import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  MaxLength,
  IsOptional,
  IsEmail,
  Matches,
} from 'class-validator';

export class UpdatePacienteContactoRequestDto {
  @ApiProperty({
    example: '+34 123 456 789',
    description: 'Número de teléfono del paciente',
    required: false,
  })
  @IsOptional()
  @MaxLength(20)
  @IsString()
  @Matches(/^[+]?[0-9\s\-()]+$/)
  readonly telefono?: string;

  @ApiProperty({
    example: 'juan.garcia@email.com',
    description: 'Email del paciente',
    required: false,
  })
  @IsOptional()
  @IsEmail()
  readonly email?: string;
}
