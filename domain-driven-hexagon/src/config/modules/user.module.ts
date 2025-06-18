import { Logger, Module, Provider } from '@nestjs/common';
import { UserRepository } from '@src/infrastructure/database/user/user.repository';
import { CreateUserHttpController } from '@src/presentation/http/user/create-user.http.controller';
import { DeleteUserHttpController } from '@src/presentation/http/user/delete-user.http-controller';
import { CreateUserCliController } from '@src/presentation/cli/user/create-user.cli.controller';
import { FindUsersHttpController } from '@src/presentation/http/user/find-users.http.controller';
import { CreateUserMessageController } from '@src/presentation/messaging/user/create-user.message.controller';
import { CreateUserGraphqlResolver } from '@src/presentation/graphql/user/graphql-example/create-user.graphql-resolver';
import { CreateUserService } from '@src/application/user/commands/create-user/create-user.service';
import { DeleteUserService } from '@src/application/user/commands/delete-user/delete-user.service';
import { FindUsersQueryHandler } from '@src/application/user/queries/find-users/find-users.query-handler';
import { UserMapper } from '@src/infrastructure/database/user/user.mapper';
import { CqrsModule } from '@nestjs/cqrs';
import { USER_REPOSITORY } from './user.di-tokens';
import { FindUsersGraphqlResolver } from '@src/presentation/graphql/user/find-users.graphql-resolver';

const httpControllers = [
  CreateUserHttpController,
  DeleteUserHttpController,
  FindUsersHttpController,
];

const messageControllers = [CreateUserMessageController];

const cliControllers: Provider[] = [CreateUserCliController];

const graphqlResolvers: Provider[] = [
  CreateUserGraphqlResolver,
  FindUsersGraphqlResolver,
];

const commandHandlers: Provider[] = [CreateUserService, DeleteUserService];

const queryHandlers: Provider[] = [FindUsersQueryHandler];

const mappers: Provider[] = [UserMapper];

const repositories: Provider[] = [
  { provide: USER_REPOSITORY, useClass: UserRepository },
];

@Module({
  imports: [CqrsModule],
  controllers: [...httpControllers, ...messageControllers],
  providers: [
    Logger,
    ...cliControllers,
    ...repositories,
    ...graphqlResolvers,
    ...commandHandlers,
    ...queryHandlers,
    ...mappers,
  ],
})
export class UserModule {}
