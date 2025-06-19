import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength } from 'class-validator';

export class UpdatePacienteNotasRequestDto {
  @ApiProperty({
    example:
      'Paciente cooperativo, requiere sedación para procedimientos largos',
    description: 'Notas adicionales sobre el paciente',
    required: true,
  })
  @MaxLength(1000)
  @IsString()
  readonly notas: string;
}
