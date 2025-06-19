import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean } from 'class-validator';

export class UpdatePacienteHemorragiasRequestDto {
  @ApiProperty({
    example: false,
    description: 'Historial de hemorragias dentales en extracciones',
  })
  @IsBoolean()
  readonly hemorragiasDentales: boolean;
} 
