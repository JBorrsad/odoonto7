import { ApiProperty } from '@nestjs/swagger';
import { PaginatedResponseDto } from '@odoonto7/shared';
import { UserResponseDto } from './user.response.dto';

export class UserPaginatedResponseDto extends PaginatedResponseDto<UserResponseDto> {
  @ApiProperty({ type: UserResponseDto, isArray: true })
  readonly data: readonly UserResponseDto[];
}
