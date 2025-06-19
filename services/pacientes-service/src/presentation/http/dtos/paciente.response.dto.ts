import { ApiProperty } from '@nestjs/swagger';
import { ResponseBase } from '@odoonto7/shared';
import { Sexo } from '@src/domain/pacientes';

export class PacienteResponseDto extends ResponseBase {
  @ApiProperty({
    example: 'Juan',
    description: 'Nombre del paciente',
  })
  nombre: string;

  @ApiProperty({
    example: 'García López',
    description: 'Apellidos del paciente',
  })
  apellidos: string;

  @ApiProperty({
    example: 30,
    description: 'Edad del paciente',
  })
  edad: number;

  @ApiProperty({
    example: Sexo.HOMBRE,
    description: 'Sexo del paciente',
    enum: Sexo,
  })
  sexo: Sexo;

  @ApiProperty({
    example: '+34612345678',
    description: 'Teléfono del paciente',
  })
  telefono: string;

  @ApiProperty({
    example: 'juan@email.com',
    description: 'Email del paciente',
  })
  email: string;

  @ApiProperty({
    example: 'Alérgico a penicilina',
    description: 'Alergias del paciente',
  })
  alergias: string;

  @ApiProperty({
    example: 'Paciente nervioso, requiere cuidado especial',
    description: 'Notas del paciente',
  })
  notas: string;

  @ApiProperty({
    example: 'Omeprazol 20mg cada 12h, Ibuprofeno 600mg si dolor',
    description: 'Medicación actual del paciente',
  })
  medicacion: string;

  @ApiProperty({
    example: 'Hipertensión arterial, diabetes tipo 2',
    description: 'Patologías médicas del paciente',
  })
  patologiasMedicas: string;

  @ApiProperty({
    example: false,
    description: 'Estado de embarazo (solo para mujeres)',
    required: false,
  })
  embarazada?: boolean;

  @ApiProperty({
    example: false,
    description: 'Historial de hemorragias dentales en extracciones',
  })
  hemorragiasDentales: boolean;

  @ApiProperty({
    example: 'España',
    description: 'País de residencia',
  })
  country: string;

  @ApiProperty({
    example: '28001',
    description: 'Código postal',
  })
  postalCode: string;

  @ApiProperty({
    example: 'Calle Mayor 123',
    description: 'Dirección del paciente',
  })
  street: string;
}
