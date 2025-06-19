import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  MaxLength,
  IsOptional,
  IsInt,
  Min,
  Max,
  Matches,
  IsEnum,
} from 'class-validator';
import { Sexo } from '@src/domain/pacientes';

export class UpdatePacienteDatosRequestDto {
  @ApiProperty({
    example: 'Juan',
    description: 'Nombre del paciente',
    required: false,
  })
  @IsOptional()
  @MaxLength(50)
  @IsString()
  @Matches(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/)
  readonly nombre?: string;

  @ApiProperty({
    example: 'García López',
    description: 'Apellidos del paciente',
    required: false,
  })
  @IsOptional()
  @MaxLength(100)
  @IsString()
  @Matches(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/)
  readonly apellidos?: string;

  @ApiProperty({
    example: 35,
    description: 'Edad del paciente',
    required: false,
  })
  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(120)
  readonly edad?: number;

  @ApiProperty({
    example: Sexo.HOMBRE,
    description: 'Sexo del paciente',
    enum: Sexo,
    required: false,
  })
  @IsOptional()
  @IsEnum(Sexo)
  readonly sexo?: Sexo;
}
