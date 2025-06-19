export enum TipoDentadura {
  TEMPORAL = 'temporal',
  MIXTA_PRIMERA = 'mixta_primera',
  MIXTA_SEGUNDA = 'mixta_segunda',
  DEFINITIVA = 'definitiva',
}

export enum CaraDiente {
  VESTIBULAR = 'vestibular',
  PALATINO = 'palatino',
  MESIAL = 'mesial',
  DISTAL = 'distal',
  OCLUSAL = 'oclusal',
  INCISAL = 'incisal',
}

export enum TipoLesion {
  CARIES = 'caries',
  FRACTURA = 'fractura',
  LUXACION = 'luxacion',
}

export enum TipoTratamiento {
  OBTURACION = 'obturacion',
  EXTRACCION = 'extraccion',
  RECONSTRUCCION = 'reconstruccion',
}

export enum TipoDiente {
  INCISIVO = 'incisivo',
  CANINO = 'canino',
  PREMOLAR = 'premolar',
  MOLAR = 'molar',
}

import { Diente } from './value-objects/diente.value-object';

export interface OdontogramaProps {
  tipoDentadura: TipoDentadura;
  dientes: Map<string, Diente>;
}

export interface CreateOdontogramaProps {
  id: string;
  tipoDentadura: TipoDentadura;
}
