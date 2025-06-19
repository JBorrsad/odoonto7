import { ApiProperty } from '@nestjs/swagger';

// Re-export the base class from application layer
export { ApiErrorResponse as BaseApiErrorResponse } from '../../application/responses/api-error.response';

// Presentation layer wrapper with Swagger decorators
export class ApiErrorResponse {
  @ApiProperty({ example: 400 })
  readonly statusCode: number;

  @ApiProperty({ example: 'Validation Error' })
  readonly message: string;

  @ApiProperty({ example: 'Bad Request' })
  readonly error: string;

  @ApiProperty({ example: 'YevPQs' })
  readonly correlationId: string;

  @ApiProperty({
    example: ['incorrect email'],
    description: 'Optional list of sub-errors',
    nullable: true,
    required: false,
  })
  readonly subErrors?: string[];

  @ApiProperty({ example: '2023-01-01T00:00:00.000Z' })
  readonly timestamp: string;

  @ApiProperty({ example: '/api/v1/users' })
  readonly path?: string;

  constructor(props: {
    statusCode: number;
    message: string;
    error: string;
    correlationId: string;
    subErrors?: string[];
    path?: string;
  }) {
    this.statusCode = props.statusCode;
    this.message = props.message;
    this.error = props.error;
    this.correlationId = props.correlationId;
    this.subErrors = props.subErrors;
    this.timestamp = new Date().toISOString();
    this.path = props.path;
  }
}
