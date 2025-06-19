export class ApiErrorResponse {
  readonly statusCode: number;
  readonly message: string;
  readonly error: string;
  readonly correlationId: string;
  readonly subErrors?: string[];
  readonly timestamp: string;
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