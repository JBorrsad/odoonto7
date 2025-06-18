import { ResponseBase } from '@src/shared/api/response.base';
import { ApiProperty } from '@nestjs/swagger';

export class OdontogramaResponseDto extends ResponseBase {
  @ApiProperty({
    example: 'temporal',
    description: 'Tipo de dentadura',
  })
  tipoDentadura: string;

  @ApiProperty({
    example: {},
    description: 'Datos de los dientes en formato JSON',
  })
  dientes: any;
} 