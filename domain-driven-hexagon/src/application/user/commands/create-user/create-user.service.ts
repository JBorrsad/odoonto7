import { UserRepositoryPort } from '@src/infrastructure/database/user/user.repository.port';
import { Address } from '@src/domain/user/value-objects/address.value-object';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Err, Ok, Result } from 'oxide.ts';
import { CreateUserCommand } from './create-user.command';
import { UserAlreadyExistsError } from '@src/domain/user/user.errors';
import { AggregateID } from '@src/shared/ddd';
import { UserEntity } from '@src/domain/user/user.entity';
import { ConflictException } from '@src/shared/exceptions';
import { Inject } from '@nestjs/common';
import { USER_REPOSITORY } from '@src/config/modules/user.di-tokens';

@CommandHandler(CreateUserCommand)
export class CreateUserService implements ICommandHandler<CreateUserCommand> {
  constructor(
    @Inject(USER_REPOSITORY)
    protected readonly userRepo: UserRepositoryPort,
  ) {}

  async execute(
    command: CreateUserCommand,
  ): Promise<Result<AggregateID, UserAlreadyExistsError>> {
    const user = UserEntity.create({
      email: command.email,
      address: new Address({
        country: command.country,
        postalCode: command.postalCode,
        street: command.street,
      }),
    });

    try {
      /* Wrapping operation in a transaction to make sure
         that all domain events are processed atomically */
      await this.userRepo.transaction(async () => this.userRepo.insert(user));
      return Ok(user.id);
    } catch (error: any) {
      if (error instanceof ConflictException) {
        return Err(new UserAlreadyExistsError(error));
      }
      throw error;
    }
  }
}
