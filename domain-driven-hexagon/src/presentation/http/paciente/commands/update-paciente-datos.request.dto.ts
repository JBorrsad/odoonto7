import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  MaxLength,
  IsOptional,
  IsInt,
  Min,
  Max,
  Matches,
} from 'class-validator';

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
    example: 'Masculino',
    description: 'Sexo del paciente',
    required: false,
  })
  @IsOptional()
  @MaxLength(20)
  @IsString()
  readonly sexo?: string;
}
