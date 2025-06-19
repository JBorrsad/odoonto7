import { PacienteRepositoryPort } from '../../../infrastructure/paciente/paciente.repository.port';
import { ICommandHandler } from '@nestjs/cqrs';
import { Result } from 'oxide.ts';
import { UpdatePacienteAlergiasCommand } from './update-paciente-alergias.command';
import { AggregateID } from '@odoonto7/shared';
import { NotFoundException } from '@odoonto7/shared';
export declare class UpdatePacienteAlergiasService implements ICommandHandler<UpdatePacienteAlergiasCommand> {
    protected readonly pacienteRepo: PacienteRepositoryPort;
    constructor(pacienteRepo: PacienteRepositoryPort);
    execute(command: UpdatePacienteAlergiasCommand): Promise<Result<AggregateID, NotFoundException>>;
}
