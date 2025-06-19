import { InjectPool } from 'nestjs-slonik';
import { DatabasePool, sql } from 'slonik';
import { PacienteRepositoryPort } from './paciente.repository.port';
import { z } from 'zod';
import { PacienteMapper } from './paciente.mapper';
import { PacienteEntity, Sexo } from '@src/domain/pacientes';
import { SqlRepositoryBase } from '@src/shared/db/sql-repository.base';
import { Injectable, Logger } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';

export const pacienteSchema = z.object({
  id: z.string().uuid(),
  createdAt: z.preprocess((val: any) => new Date(val), z.date()),
  updatedAt: z.preprocess((val: any) => new Date(val), z.date()),
  nombre: z.string().min(1).max(50),
  apellidos: z.string().min(1).max(100),
  edad: z.number().min(0).max(120),
  sexo: z.nativeEnum(Sexo),
  telefono: z.string().min(1).max(20),
  email: z.string().email(),
  alergias: z.string().max(500),
  notas: z.string().max(1000),
  medicacion: z.string(),
  patologiasMedicas: z.string(),
  embarazada: z.boolean().nullable(),
  hemorragiasDentales: z.boolean(),
  country: z.string().min(1).max(50),
  postalCode: z.string().min(1).max(10),
  street: z.string().min(1).max(100),
});

export type PacienteModel = z.TypeOf<typeof pacienteSchema>;

@Injectable()
export class PacienteRepository
  extends SqlRepositoryBase<PacienteEntity, PacienteModel>
  implements PacienteRepositoryPort
{
  protected tableName = 'pacientes';
  protected schema = pacienteSchema;

  constructor(
    @InjectPool()
    pool: DatabasePool,
    mapper: PacienteMapper,
    eventEmitter: EventEmitter2,
  ) {
    super(pool, mapper, eventEmitter, new Logger(PacienteRepository.name));
  }

  async updateAddress(paciente: PacienteEntity): Promise<void> {
    const address = paciente.getProps().address;
    const statement = sql`
      UPDATE "pacientes" SET
      street = ${address.street}, 
      country = ${address.country}, 
      "postalCode" = ${address.postalCode}
      WHERE id = ${paciente.id}`;

    await this.writeQuery(statement, paciente);
  }

  async findOneByEmail(email: string): Promise<PacienteEntity | null> {
    try {
      const paciente = await this.pool.one(
        sql`SELECT * FROM "pacientes" WHERE email = ${email}`,
      );
      return this.mapper.toDomain(paciente as any);
    } catch (error) {
      return null;
    }
  }

  async findOneByTelefono(telefono: string): Promise<PacienteEntity | null> {
    try {
      const paciente = await this.pool.one(
        sql`SELECT * FROM "pacientes" WHERE telefono = ${telefono}`,
      );
      return this.mapper.toDomain(paciente as any);
    } catch (error) {
      return null;
    }
  }
}
