import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean } from 'class-validator';

export class UpdatePacienteEmbarazadaRequestDto {
  @ApiProperty({
    example: false,
    description: 'Estado de embarazo (solo para mujeres)',
  })
  @IsBoolean()
  readonly embarazada: boolean;
} 