import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { Logger } from '@nestjs/common';
import { PacienteCreatedDomainEvent } from '../../../domain/paciente/events/paciente-created.domain-event';

@EventsHandler(PacienteCreatedDomainEvent)
export class PacienteCreatedEventHandler
  implements IEventHandler<PacienteCreatedDomainEvent>
{
  private readonly logger = new Logger(PacienteCreatedEventHandler.name);

  handle(event: PacienteCreatedDomainEvent): void {
    this.logger.log(`Paciente creado: ${event.aggregateId}`);
    
    // Aquí puedes agregar lógica adicional como:
    // - Enviar notificaciones
    // - Actualizar otros agregados
    // - Publicar eventos de integración
    // - Crear auditoría
    
    this.logger.debug(`Paciente ${event.aggregateId} - Nombre: ${event.nombre} ${event.apellidos}`);
  }
} 