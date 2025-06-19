import { z } from 'zod';
import { Sexo } from '../../domain/paciente';

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
  alergias: z.string().max(500).optional(),
  notas: z.string().max(1000).optional(),
  medicacion: z.string().optional(),
  patologiasMedicas: z.string().optional(),
  embarazada: z.boolean().nullable(),
  hemorragiasDentales: z.boolean(),
  country: z.string().min(1).max(50),
  postalCode: z.string().min(1).max(10),
  street: z.string().min(1).max(100),
});

export type PacienteModel = z.TypeOf<typeof pacienteSchema>; 