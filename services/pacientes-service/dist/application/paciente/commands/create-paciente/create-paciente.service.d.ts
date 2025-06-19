import { PacienteRepositoryPort } from '../../../../infrastructure/paciente/paciente.repository.port';
import { PacienteAlreadyExistsError } from '../../../../domain/paciente';
import { ICommandHandler } from '@nestjs/cqrs';
import { Result } from 'oxide.ts';
import { CreatePacienteCommand } from './create-paciente.command';
import { AggregateID } from '@odoonto7/shared';
export declare class CreatePacienteService implements ICommandHandler<CreatePacienteCommand> {
    protected readonly pacienteRepo: PacienteRepositoryPort;
    constructor(pacienteRepo: PacienteRepositoryPort);
    execute(command: CreatePacienteCommand): Promise<Result<AggregateID, PacienteAlreadyExistsError>>;
}
