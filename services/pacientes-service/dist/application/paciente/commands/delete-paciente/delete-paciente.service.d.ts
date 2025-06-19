import { NotFoundException } from '@odoonto7/shared';
import { PacienteRepositoryPort } from '../../../infrastructure/paciente/paciente.repository.port';
import { ICommandHandler } from '@nestjs/cqrs';
import { Result } from 'oxide.ts';
import { DeletePacienteCommand } from './delete-paciente.command';
export declare class DeletePacienteService implements ICommandHandler<DeletePacienteCommand> {
    private readonly pacienteRepo;
    constructor(pacienteRepo: PacienteRepositoryPort);
    execute(command: DeletePacienteCommand): Promise<Result<boolean, NotFoundException>>;
}
