import { ApiProperty } from '@nestjs/swagger';
import {
  MaxLength,
  IsString,
  IsAlphanumeric,
  Matches,
  IsOptional,
  IsEmail,
} from 'class-validator';

export class FindPacientesRequestDto {
  @ApiProperty({ example: 'España', description: 'País de residencia' })
  @IsOptional()
  @MaxLength(50)
  @IsString()
  @Matches(/^[a-zA-Z ]*$/)
  readonly country?: string;

  @ApiProperty({ example: '28001', description: 'Código postal' })
  @IsOptional()
  @MaxLength(10)
  @IsAlphanumeric()
  readonly postalCode?: string;

  @ApiProperty({ example: 'Gran Vía', description: 'Calle' })
  @IsOptional()
  @MaxLength(50)
  @Matches(/^[a-zA-Z ]*$/)
  readonly street?: string;

  @ApiProperty({
    example: 'juan@example.com',
    description: 'Email del paciente',
  })
  @IsOptional()
  @IsEmail()
  readonly email?: string;

  @ApiProperty({ example: 'Juan', description: 'Nombre del paciente' })
  @IsOptional()
  @MaxLength(50)
  @IsString()
  readonly nombre?: string;

  @ApiProperty({ example: 'García', description: 'Apellidos del paciente' })
  @IsOptional()
  @MaxLength(100)
  @IsString()
  readonly apellidos?: string;
}
