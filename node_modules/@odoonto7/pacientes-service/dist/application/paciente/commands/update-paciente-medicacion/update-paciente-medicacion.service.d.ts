import { PacienteRepositoryPort } from '../../../infrastructure/paciente/paciente.repository.port';
import { ICommandHandler } from '@nestjs/cqrs';
import { Result } from 'oxide.ts';
import { UpdatePacienteMedicacionCommand } from './update-paciente-medicacion.command';
import { AggregateID } from '@odoonto7/shared';
import { NotFoundException } from '@odoonto7/shared';
export declare class UpdatePacienteMedicacionService implements ICommandHandler<UpdatePacienteMedicacionCommand> {
    protected readonly pacienteRepo: PacienteRepositoryPort;
    constructor(pacienteRepo: PacienteRepositoryPort);
    execute(command: UpdatePacienteMedicacionCommand): Promise<Result<AggregateID, NotFoundException>>;
}
