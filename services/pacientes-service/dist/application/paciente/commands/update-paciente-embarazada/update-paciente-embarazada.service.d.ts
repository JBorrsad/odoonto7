import { PacienteRepositoryPort } from '../../../../infrastructure/paciente/paciente.repository.port';
import { ICommandHandler } from '@nestjs/cqrs';
import { Result } from 'oxide.ts';
import { UpdatePacienteEmbarazadaCommand } from './update-paciente-embarazada.command';
import { AggregateID } from '@odoonto7/shared';
import { NotFoundException } from '@odoonto7/shared';
export declare class UpdatePacienteEmbarazadaService implements ICommandHandler<UpdatePacienteEmbarazadaCommand> {
    protected readonly pacienteRepo: PacienteRepositoryPort;
    constructor(pacienteRepo: PacienteRepositoryPort);
    execute(command: UpdatePacienteEmbarazadaCommand): Promise<Result<AggregateID, NotFoundException>>;
}
