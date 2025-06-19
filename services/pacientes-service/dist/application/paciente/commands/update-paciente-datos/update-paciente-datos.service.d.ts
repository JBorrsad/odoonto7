import { PacienteRepositoryPort } from '../../../../infrastructure/paciente/paciente.repository.port';
import { ICommandHandler } from '@nestjs/cqrs';
import { Result } from 'oxide.ts';
import { UpdatePacienteDatosCommand } from './update-paciente-datos.command';
import { AggregateID } from '@odoonto7/shared';
import { NotFoundException } from '@odoonto7/shared';
export declare class UpdatePacienteDatosService implements ICommandHandler<UpdatePacienteDatosCommand> {
    protected readonly pacienteRepo: PacienteRepositoryPort;
    constructor(pacienteRepo: PacienteRepositoryPort);
    execute(command: UpdatePacienteDatosCommand): Promise<Result<AggregateID, NotFoundException>>;
}
