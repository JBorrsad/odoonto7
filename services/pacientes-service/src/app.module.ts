import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ConfigModule } from '@nestjs/config';

// Librerías compartidas
import { SharedDatabaseModule } from '@odoonto7/shared-db';
import { SharedEventsModule } from '@odoonto7/shared-events';

// Módulos locales del servicio
import { PacienteModule } from './modules/paciente.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.local', '.env'],
    }),
    
    // Infraestructura base
    CqrsModule,
    EventEmitterModule.forRoot(),
    
    // Librerías compartidas
    SharedDatabaseModule.forRoot({
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '5432'),
      database: process.env.DB_NAME || 'odoonto7_shared',
      username: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASS || 'postgres'
    }),
    SharedEventsModule,
    
    // Dominio específico
    PacienteModule
  ]
})
export class AppModule {} 
