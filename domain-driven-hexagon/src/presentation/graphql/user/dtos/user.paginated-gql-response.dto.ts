import { Field, ObjectType } from '@nestjs/graphql';
import { PaginatedGraphqlResponse } from '@odoonto7/shared';

import { UserGraphqlResponseDto } from './user.graphql-response.dto';

@ObjectType()
export class UserPaginatedGraphqlResponseDto extends PaginatedGraphqlResponse(
  UserGraphqlResponseDto,
) {
  @Field(() => [UserGraphqlResponseDto])
  data: UserGraphqlResponseDto[];

  constructor(props: { data: UserGraphqlResponseDto[]; count: number; limit: number; page: number }) {
    super(props);
  }
}
