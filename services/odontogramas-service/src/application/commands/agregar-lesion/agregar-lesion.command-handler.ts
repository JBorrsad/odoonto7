import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AgregarLesionCommand } from './agregar-lesion.command';
import { AgregarLesionService } from './agregar-lesion.service';

@CommandHandler(AgregarLesionCommand)
export class AgregarLesionCommandHandler implements ICommandHandler<AgregarLesionCommand> {
  constructor(private readonly agregarLesionService: AgregarLesionService) {}

  async execute(command: AgregarLesionCommand): Promise<void> {
    await this.agregarLesionService.execute(command);
  }
} 