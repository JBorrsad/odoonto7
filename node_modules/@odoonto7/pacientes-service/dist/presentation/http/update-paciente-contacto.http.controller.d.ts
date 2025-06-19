import { CommandBus } from '@nestjs/cqrs';
import { UpdatePacienteContactoRequestDto } from './commands/update-paciente-contacto.request.dto';
import { IdResponse } from '@odoonto7/shared';
export declare class UpdatePacienteContactoHttpController {
    private readonly commandBus;
    constructor(commandBus: CommandBus);
    updateContacto(pacienteId: string, request: UpdatePacienteContactoRequestDto): Promise<IdResponse>;
}
