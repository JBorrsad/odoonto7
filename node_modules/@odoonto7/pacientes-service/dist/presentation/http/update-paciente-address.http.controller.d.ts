import { CommandBus } from '@nestjs/cqrs';
import { UpdatePacienteAddressRequestDto } from './commands/update-paciente-address.request.dto';
import { IdResponse } from '@odoonto7/shared';
export declare class UpdatePacienteAddressHttpController {
    private readonly commandBus;
    constructor(commandBus: CommandBus);
    updateAddress(pacienteId: string, request: UpdatePacienteAddressRequestDto): Promise<IdResponse>;
}
