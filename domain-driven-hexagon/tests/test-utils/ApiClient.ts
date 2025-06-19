import { routesV1 } from '@src/config/app.routes';
import { IdResponse } from '@odoonto7/shared';
import { CreateUserRequestDto } from '@src/presentation/http/user/commands/create-user.request.dto';
import { UserPaginatedResponseDto } from '@src/presentation/http/user/dtos/user.paginated.response.dto';
import { getHttpServer } from '@tests/setup/jestSetupAfterEnv';

export class ApiClient {
  private url = `/${routesV1.version}/${routesV1.user.root}`;

  async createUser(dto: CreateUserRequestDto): Promise<IdResponse> {
    const response = await getHttpServer().post(this.url).send(dto);
    return response.body;
  }

  async deleteUser(id: string): Promise<void> {
    const response = await getHttpServer().delete(`${this.url}/${id}`);
    return response.body;
  }

  async findAllUsers(): Promise<UserPaginatedResponseDto> {
    const response = await getHttpServer().get(this.url);
    return response.body;
  }
}
