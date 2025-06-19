import { PacienteRepositoryPort } from '../../../../infrastructure/paciente/paciente.repository.port';
import { PacienteAlreadyExistsError } from '../../../../domain/paciente';
import { ICommandHandler } from '@nestjs/cqrs';
import { Result } from 'oxide.ts';
import { CreatePacienteCommand } from './create-paciente.command';
import { AggregateID } from '@odoonto7/shared';
import { PacienteBusinessRulesValidator } from '../../validators/paciente-business-rules.validator';
export declare class CreatePacienteService implements ICommandHandler<CreatePacienteCommand> {
    protected readonly pacienteRepo: PacienteRepositoryPort;
    private readonly validator;
    constructor(pacienteRepo: PacienteRepositoryPort, validator: PacienteBusinessRulesValidator);
    execute(command: CreatePacienteCommand): Promise<Result<AggregateID, PacienteAlreadyExistsError>>;
}
