import { PacienteRepositoryPort } from '../../../../infrastructure/paciente/paciente.repository.port';
import { ICommandHandler } from '@nestjs/cqrs';
import { Result } from 'oxide.ts';
import { UpdatePacientePatologiasCommand } from './update-paciente-patologias.command';
import { AggregateID } from '@odoonto7/shared';
import { NotFoundException } from '@odoonto7/shared';
export declare class UpdatePacientePatologiasService implements ICommandHandler<UpdatePacientePatologiasCommand> {
    protected readonly pacienteRepo: PacienteRepositoryPort;
    constructor(pacienteRepo: PacienteRepositoryPort);
    execute(command: UpdatePacientePatologiasCommand): Promise<Result<AggregateID, NotFoundException>>;
}
