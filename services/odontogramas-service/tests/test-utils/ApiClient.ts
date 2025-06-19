import { IdResponse } from '@libs/shared/presentation/api/id.response.dto';
import { CreateOdontogramaCommand } from '@src/application/commands/create-odontograma/create-odontograma.command';
import { OdontogramaResponseDto } from '@src/presentation/dtos/odontograma.response.dto';
import { getHttpServer } from '@tests/setup/jestSetupAfterEnv';

export class ApiClient {
  private url = '/api/v1/odontogramas';

  async createOdontograma(dto: { pacienteId: string }): Promise<IdResponse> {
    const response = await getHttpServer().post(this.url).send(dto);
    return response.body;
  }

  async findOdontogramaByPaciente(pacienteId: string): Promise<OdontogramaResponseDto> {
    const response = await getHttpServer().get(`${this.url}/paciente/${pacienteId}`);
    return response.body;
  }

  async agregarLesion(odontogramaId: string, dto: any): Promise<void> {
    const response = await getHttpServer().patch(`${this.url}/${odontogramaId}/lesion`).send(dto);
    return response.body;
  }

  async agregarTratamiento(odontogramaId: string, dto: any): Promise<void> {
    const response = await getHttpServer().patch(`${this.url}/${odontogramaId}/tratamiento`).send(dto);
    return response.body;
  }
} 