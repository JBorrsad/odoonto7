import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  MaxLength,
  IsOptional,
  Matches,
  IsAlphanumeric,
} from 'class-validator';

export class UpdatePacienteAddressRequestDto {
  @ApiProperty({
    example: 'España',
    description: 'País de residencia',
    required: false,
  })
  @IsOptional()
  @MaxLength(50)
  @IsString()
  @Matches(/^[a-zA-Z ]*$/)
  readonly country?: string;

  @ApiProperty({
    example: '28001',
    description: 'Código postal',
    required: false,
  })
  @IsOptional()
  @MaxLength(10)
  @IsAlphanumeric()
  readonly postalCode?: string;

  @ApiProperty({
    example: 'Gran Vía 123',
    description: 'Dirección de la calle',
    required: false,
  })
  @IsOptional()
  @MaxLength(100)
  @IsString()
  readonly street?: string;
}
