import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ConfigModule } from '@nestjs/config';

import { OdontogramaModule } from './modules/odontograma.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.local', '.env'],
    }),
    
    CqrsModule,
    EventEmitterModule.forRoot(),
    
    OdontogramaModule,
  ],
})
export class AppModule {} 
