import { IdResponse } from '@odoonto7/shared/presentation/api/id.response.dto';
import { CreatePacienteRequestDto } from '@src/presentation/http/commands/create-paciente.request.dto';
import { PacientePaginatedResponseDto } from '@src/presentation/http/dtos/paciente.paginated.response.dto';
import { getHttpServer } from '@tests/setup/jestSetupAfterEnv';

export class ApiClient {
  private url = '/api/v1/pacientes';

  async createPaciente(dto: CreatePacienteRequestDto): Promise<IdResponse> {
    const response = await getHttpServer().post(this.url).send(dto);
    return response.body;
  }

  async deletePaciente(id: string): Promise<void> {
    const response = await getHttpServer().delete(`${this.url}/${id}`);
    return response.body;
  }

  async findAllPacientes(): Promise<PacientePaginatedResponseDto> {
    const response = await getHttpServer().get(this.url);
    return response.body;
  }

  async updatePacienteAddress(id: string, dto: any): Promise<void> {
    const response = await getHttpServer().patch(`${this.url}/${id}/address`).send(dto);
    return response.body;
  }

  async updatePacienteContacto(id: string, dto: any): Promise<void> {
    const response = await getHttpServer().patch(`${this.url}/${id}/contacto`).send(dto);
    return response.body;
  }
} 