import { CommandBus } from '@nestjs/cqrs';
import { UpdatePacienteHemorragiasRequestDto } from './commands/update-paciente-hemorragias.request.dto';
import { IdResponse } from '@odoonto7/shared';
export declare class UpdatePacienteHemorragiasHttpController {
    private readonly commandBus;
    constructor(commandBus: CommandBus);
    updateHemorragias(pacienteId: string, request: UpdatePacienteHemorragiasRequestDto): Promise<IdResponse>;
}
