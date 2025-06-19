import { CommandBus } from '@nestjs/cqrs';
import { UpdatePacienteMedicacionRequestDto } from './commands/update-paciente-medicacion.request.dto';
import { IdResponse } from '@odoonto7/shared';
export declare class UpdatePacienteMedicacionHttpController {
    private readonly commandBus;
    constructor(commandBus: CommandBus);
    updateMedicacion(pacienteId: string, request: UpdatePacienteMedicacionRequestDto): Promise<IdResponse>;
}
