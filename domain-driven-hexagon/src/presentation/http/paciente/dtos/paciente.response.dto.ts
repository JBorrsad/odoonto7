import { ApiProperty } from '@nestjs/swagger';
import { ResponseBase } from '@src/shared/api/response.base';

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
    example: 'Masculino',
    description: 'Sexo del paciente',
  })
  sexo: string;

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
