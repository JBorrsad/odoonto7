import { PacienteRepositoryPort } from '../../../../infrastructure/paciente/paciente.repository.port';
import { ICommandHandler } from '@nestjs/cqrs';
import { Result } from 'oxide.ts';
import { UpdatePacienteNotasCommand } from './update-paciente-notas.command';
import { AggregateID } from '@odoonto7/shared';
import { NotFoundException } from '@odoonto7/shared';
export declare class UpdatePacienteNotasService implements ICommandHandler<UpdatePacienteNotasCommand> {
    protected readonly pacienteRepo: PacienteRepositoryPort;
    constructor(pacienteRepo: PacienteRepositoryPort);
    execute(command: UpdatePacienteNotasCommand): Promise<Result<AggregateID, NotFoundException>>;
}
