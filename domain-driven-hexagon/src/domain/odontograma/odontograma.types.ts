export enum TipoDentadura {
  TEMPORAL = 'temporal',
  MIXTA_PRIMERA = 'mixta_primera',
  MIXTA_SEGUNDA = 'mixta_segunda',
  DEFINITIVA = 'definitiva',
}

export enum CaraDiente {
  VESTIBULAR = 'vestibular',
  LABIAL = 'labial',
  BUCAL = 'bucal',
  LINGUAL = 'lingual',
  PALATINO = 'palatino',
  MESIAL = 'mesial',
  DISTAL = 'distal',
  OCLUSAL = 'oclusal',
  INCISAL = 'incisal',
}

export enum TipoDiente {
  INCISIVO = 'incisivo',
  CANINO = 'canino',
  PREMOLAR = 'premolar',
  MOLAR = 'molar',
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

export interface CreateOdontogramaProps {
  id: string;
  tipoDentadura: TipoDentadura;
}

export interface OdontogramaProps {
  id: string;
  tipoDentadura: TipoDentadura;
  dientes: Map<string, any>;
  createdAt: Date;
  updatedAt: Date;
}
