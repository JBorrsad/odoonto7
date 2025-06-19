import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UpdatePacientePatologiasRequestDto {
  @ApiProperty({
    example: 'Hipertensión arterial, diabetes tipo 2',
    description: 'Patologías médicas del paciente',
  })
  @IsString()
  readonly patologiasMedicas: string;
} 
