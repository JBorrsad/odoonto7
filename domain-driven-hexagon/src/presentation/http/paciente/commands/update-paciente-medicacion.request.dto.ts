import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UpdatePacienteMedicacionRequestDto {
  @ApiProperty({
    example: 'Omeprazol 20mg cada 12h, Ibuprofeno 600mg si dolor',
    description: 'Medicación actual del paciente',
  })
  @IsString()
  readonly medicacion: string;
} 