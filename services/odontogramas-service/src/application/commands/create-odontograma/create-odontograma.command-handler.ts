import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateOdontogramaCommand } from './create-odontograma.command';
import { CreateOdontogramaService } from './create-odontograma.service';

@CommandHandler(CreateOdontogramaCommand)
export class CreateOdontogramaCommandHandler implements ICommandHandler<CreateOdontogramaCommand> {
  constructor(private readonly createOdontogramaService: CreateOdontogramaService) {}

  async execute(command: CreateOdontogramaCommand): Promise<void> {
    await this.createOdontogramaService.execute(command);
  }
} 