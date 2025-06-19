import { CommandBus } from '@nestjs/cqrs';
import { CreatePacienteRequestDto } from './commands/create-paciente.request.dto';
import { IdResponse } from '@odoonto7/shared';
export declare class CreatePacienteHttpController {
    private readonly commandBus;
    constructor(commandBus: CommandBus);
    create(body: CreatePacienteRequestDto): Promise<IdResponse>;
}
