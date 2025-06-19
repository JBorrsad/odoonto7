import { CommandBus } from '@nestjs/cqrs';
export declare class DeletePacienteHttpController {
    private readonly commandBus;
    constructor(commandBus: CommandBus);
    deletePaciente(id: string): Promise<void>;
}
