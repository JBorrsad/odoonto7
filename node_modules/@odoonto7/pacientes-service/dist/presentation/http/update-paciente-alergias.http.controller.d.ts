import { CommandBus } from '@nestjs/cqrs';
import { UpdatePacienteAlergiasRequestDto } from './commands/update-paciente-alergias.request.dto';
import { IdResponse } from '@odoonto7/shared';
export declare class UpdatePacienteAlergiasHttpController {
    private readonly commandBus;
    constructor(commandBus: CommandBus);
    updateAlergias(pacienteId: string, request: UpdatePacienteAlergiasRequestDto): Promise<IdResponse>;
}
