import { Mapper } from '@odoonto7/shared';
import { PacienteModel, pacienteSchema } from './paciente.schema';
import { Address, PacienteEntity } from '../../domain/paciente';
import { PacienteResponseDto } from '../../presentation/http/dtos/paciente.response.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PacienteMapper
  implements Mapper<PacienteEntity, PacienteModel, PacienteResponseDto>
{
  toPersistence(entity: PacienteEntity): PacienteModel {
    const copy = entity.getProps();
    const record: PacienteModel = {
      id: copy.id,
      createdAt: copy.createdAt,
      updatedAt: copy.updatedAt,
      nombre: copy.nombre,
      apellidos: copy.apellidos,
      edad: copy.edad,
      sexo: copy.sexo,
      telefono: copy.telefono,
      email: copy.email,
      alergias: copy.alergias,
      notas: copy.notas,
      medicacion: copy.medicacion,
      patologiasMedicas: copy.patologiasMedicas,
      embarazada: copy.embarazada ?? null,
      hemorragiasDentales: copy.hemorragiasDentales,
      country: copy.address.country,
      postalCode: copy.address.postalCode,
      street: copy.address.street,
    };
    return pacienteSchema.parse(record);
  }

  toDomain(record: PacienteModel): PacienteEntity {
    const entity = new PacienteEntity({
      id: record.id,
      createdAt: new Date(record.createdAt),
      updatedAt: new Date(record.updatedAt),
      props: {
        nombre: record.nombre,
        apellidos: record.apellidos,
        edad: record.edad,
        sexo: record.sexo,
        telefono: record.telefono,
        email: record.email,
        alergias: record.alergias,
        notas: record.notas,
        medicacion: record.medicacion,
        patologiasMedicas: record.patologiasMedicas,
        embarazada: record.embarazada ?? undefined,
        hemorragiasDentales: record.hemorragiasDentales,
        address: new Address({
          street: record.street,
          postalCode: record.postalCode,
          country: record.country,
        }),
      },
    });
    return entity;
  }

  toResponse(entity: PacienteEntity): PacienteResponseDto {
    const props = entity.getProps();
    const response = new PacienteResponseDto(entity);
    response.nombre = props.nombre;
    response.apellidos = props.apellidos;
    response.edad = props.edad;
    response.sexo = props.sexo;
    response.telefono = props.telefono;
    response.email = props.email;
    response.alergias = props.alergias;
    response.notas = props.notas;
    response.medicacion = props.medicacion;
    response.patologiasMedicas = props.patologiasMedicas;
    response.embarazada = props.embarazada;
    response.hemorragiasDentales = props.hemorragiasDentales;
    response.country = props.address.country;
    response.postalCode = props.address.postalCode;
    response.street = props.address.street;
    return response;
  }
}

