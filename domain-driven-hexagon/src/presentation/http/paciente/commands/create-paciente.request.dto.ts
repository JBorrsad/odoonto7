import { ApiProperty } from '@nestjs/swagger';
import {
  IsAlphanumeric,
  IsEmail,
  IsNumber,
  IsString,
  Matches,
  MaxLength,
  MinLength,
  Min,
  Max,
} from 'class-validator';

export class CreatePacienteRequestDto {
  @ApiProperty({ example: 'Juan', description: 'Nombre del paciente' })
  @MaxLength(50)
  @MinLength(2)
  @IsString()
  @Matches(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]*$/)
  readonly nombre: string;

  @ApiProperty({
    example: 'García López',
    description: 'Apellidos del paciente',
  })
  @MaxLength(100)
  @MinLength(2)
  @IsString()
  @Matches(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]*$/)
  readonly apellidos: string;

  @ApiProperty({ example: 30, description: 'Edad del paciente' })
  @IsNumber()
  @Min(0)
  @Max(120)
  readonly edad: number;

  @ApiProperty({ example: 'Masculino', description: 'Sexo del paciente' })
  @MaxLength(20)
  @IsString()
  readonly sexo: string;

  @ApiProperty({
    example: '+34612345678',
    description: 'Teléfono del paciente',
  })
  @MaxLength(20)
  @MinLength(9)
  @IsString()
  readonly telefono: string;

  @ApiProperty({ example: 'juan@email.com', description: 'Email del paciente' })
  @MaxLength(320)
  @MinLength(5)
  @IsEmail()
  readonly email: string;

  @ApiProperty({
    example: 'Alérgico a penicilina',
    description: 'Alergias del paciente',
  })
  @MaxLength(500)
  @IsString()
  readonly alergias: string;

  @ApiProperty({
    example: 'Paciente nervioso, requiere cuidado especial',
    description: 'Notas del paciente',
  })
  @MaxLength(1000)
  @IsString()
  readonly notas: string;

  @ApiProperty({ example: 'España', description: 'País de residencia' })
  @MaxLength(50)
  @MinLength(2)
  @IsString()
  @Matches(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]*$/)
  readonly country: string;

  @ApiProperty({ example: '28001', description: 'Código postal' })
  @MaxLength(10)
  @MinLength(4)
  @IsAlphanumeric()
  readonly postalCode: string;

  @ApiProperty({ example: 'Calle Mayor 123', description: 'Dirección' })
  @MaxLength(100)
  @MinLength(5)
  @IsString()
  readonly street: string;
}
