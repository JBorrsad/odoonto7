import { CommandBus } from '@nestjs/cqrs';
import { UpdatePacienteDatosRequestDto } from './commands/update-paciente-datos.request.dto';
import { IdResponse } from '@odoonto7/shared';
export declare class UpdatePacienteDatosHttpController {
    private readonly commandBus;
    constructor(commandBus: CommandBus);
    updateDatos(pacienteId: string, request: UpdatePacienteDatosRequestDto): Promise<IdResponse>;
}
