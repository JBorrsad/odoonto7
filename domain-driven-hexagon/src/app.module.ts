import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { SlonikModule } from 'nestjs-slonik';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { UserModule } from '@src/config/modules/user.module';
import { WalletModule } from '@src/config/modules/wallet.module';

import { RequestContextModule } from 'nestjs-request-context';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ContextInterceptor } from '@odoonto7/shared/application/context/ContextInterceptor';
import { ExceptionInterceptor } from '@odoonto7/shared/application/interceptors/exception.interceptor';
import { postgresConnectionUri } from '@src/config/database.config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

const interceptors = [
  {
    provide: APP_INTERCEPTOR,
    useClass: ContextInterceptor,
  },
  {
    provide: APP_INTERCEPTOR,
    useClass: ExceptionInterceptor,
  },
];

@Module({
  imports: [
    EventEmitterModule.forRoot(),
    RequestContextModule,
    SlonikModule.forRoot({
      connectionUri: postgresConnectionUri,
    }),
    CqrsModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),

    // Modules
    UserModule,
    WalletModule,
  ],
  controllers: [],
  providers: [...interceptors],
})
export class AppModule {}
