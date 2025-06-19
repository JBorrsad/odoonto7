import { z } from 'zod';

export const odontogramaSchema = z.object({
  id: z.string().uuid(),
  tipo_dentadura: z.string(),
  dientes_data: z.any(),
  created_at: z.preprocess((val: any) => new Date(val), z.date()),
  updated_at: z.preprocess((val: any) => new Date(val), z.date()),
});

export type OdontogramaModel = z.TypeOf<typeof odontogramaSchema>; 