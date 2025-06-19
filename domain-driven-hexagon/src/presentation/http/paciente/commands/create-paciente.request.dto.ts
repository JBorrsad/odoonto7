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
  IsEnum,
  IsBoolean,
  IsOptional,
} from 'class-validator';
import { Sexo } from '@src/domain/pacientes';

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

  @ApiProperty({
    example: Sexo.HOMBRE,
    description: 'Sexo del paciente',
    enum: Sexo,
  })
  @IsEnum(Sexo)
  readonly sexo: Sexo;

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

  @ApiProperty({
    example: 'Omeprazol 20mg cada 12h, Ibuprofeno 600mg si dolor',
    description: 'Medicación actual del paciente',
  })
  @IsString()
  readonly medicacion: string;

  @ApiProperty({
    example: 'Hipertensión arterial, diabetes tipo 2',
    description: 'Patologías médicas del paciente',
  })
  @IsString()
  readonly patologiasMedicas: string;

  @ApiProperty({
    example: false,
    description: 'Estado de embarazo (solo para mujeres)',
    required: false,
  })
  @IsOptional()
  @IsBoolean()
  readonly embarazada?: boolean;

  @ApiProperty({
    example: false,
    description: 'Historial de hemorragias dentales en extracciones',
  })
  @IsBoolean()
  readonly hemorragiasDentales: boolean;

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
