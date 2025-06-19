import { PaginatedQueryParams, RepositoryPort } from '@odoonto7/shared';
import { UserEntity } from '@src/domain/user/user.entity';

export interface FindUsersParams extends PaginatedQueryParams {
  readonly country?: string;
  readonly postalCode?: string;
  readonly street?: string;
}

export interface UserRepositoryPort extends RepositoryPort<UserEntity> {
  findOneByEmail(email: string): Promise<UserEntity | null>;
}
