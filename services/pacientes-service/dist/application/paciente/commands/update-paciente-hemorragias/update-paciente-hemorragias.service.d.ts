import { PacienteRepositoryPort } from '../../../../infrastructure/paciente/paciente.repository.port';
import { ICommandHandler } from '@nestjs/cqrs';
import { Result } from 'oxide.ts';
import { UpdatePacienteHemorragiasCommand } from './update-paciente-hemorragias.command';
import { AggregateID } from '@odoonto7/shared';
import { NotFoundException } from '@odoonto7/shared';
export declare class UpdatePacienteHemorragiasService implements ICommandHandler<UpdatePacienteHemorragiasCommand> {
    protected readonly pacienteRepo: PacienteRepositoryPort;
    constructor(pacienteRepo: PacienteRepositoryPort);
    execute(command: UpdatePacienteHemorragiasCommand): Promise<Result<AggregateID, NotFoundException>>;
}
