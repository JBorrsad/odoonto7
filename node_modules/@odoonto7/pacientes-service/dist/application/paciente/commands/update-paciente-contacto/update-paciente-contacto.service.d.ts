import { PacienteRepositoryPort } from '../../../infrastructure/paciente/paciente.repository.port';
import { ICommandHandler } from '@nestjs/cqrs';
import { Result } from 'oxide.ts';
import { UpdatePacienteContactoCommand } from './update-paciente-contacto.command';
import { AggregateID } from '@odoonto7/shared';
import { NotFoundException } from '@odoonto7/shared';
export declare class UpdatePacienteContactoService implements ICommandHandler<UpdatePacienteContactoCommand> {
    protected readonly pacienteRepo: PacienteRepositoryPort;
    constructor(pacienteRepo: PacienteRepositoryPort);
    execute(command: UpdatePacienteContactoCommand): Promise<Result<AggregateID, NotFoundException>>;
}
