import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AgregarTratamientoCommand } from './agregar-tratamiento.command';
import { AgregarTratamientoService } from './agregar-tratamiento.service';

@CommandHandler(AgregarTratamientoCommand)
export class AgregarTratamientoCommandHandler implements ICommandHandler<AgregarTratamientoCommand> {
  constructor(private readonly agregarTratamientoService: AgregarTratamientoService) {}

  async execute(command: AgregarTratamientoCommand): Promise<void> {
    await this.agregarTratamientoService.execute(command);
  }
} 