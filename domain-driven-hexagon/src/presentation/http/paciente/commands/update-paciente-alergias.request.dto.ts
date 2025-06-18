import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength } from 'class-validator';

export class UpdatePacienteAlergiasRequestDto {
  @ApiProperty({
    example: 'Alergia a la penicilina, polen',
    description: 'Alergias conocidas del paciente',
    required: true,
  })
  @MaxLength(500)
  @IsString()
  readonly alergias: string;
}
