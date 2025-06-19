import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { Logger } from '@nestjs/common';
import { PacienteDatosUpdatedDomainEvent } from '../../../domain/paciente/events/paciente-datos-updated.domain-event';
import { PacienteContactoUpdatedDomainEvent } from '../../../domain/paciente/events/paciente-contacto-updated.domain-event';
import { PacienteAddressUpdatedDomainEvent } from '../../../domain/paciente/events/paciente-address-updated.domain-event';

@EventsHandler(
  PacienteDatosUpdatedDomainEvent,
  PacienteContactoUpdatedDomainEvent,
  PacienteAddressUpdatedDomainEvent,
)
export class PacienteUpdatedEventHandler
  implements 
    IEventHandler<PacienteDatosUpdatedDomainEvent>,
    IEventHandler<PacienteContactoUpdatedDomainEvent>,
    IEventHandler<PacienteAddressUpdatedDomainEvent>
{
  private readonly logger = new Logger(PacienteUpdatedEventHandler.name);

  handle(event: PacienteDatosUpdatedDomainEvent | PacienteContactoUpdatedDomainEvent | PacienteAddressUpdatedDomainEvent): void {
    this.logger.log(`Paciente actualizado: ${event.aggregateId}`);
    
    // Lógica específica según el tipo de evento
    if (event instanceof PacienteDatosUpdatedDomainEvent) {
      this.handleDatosUpdated(event);
    } else if (event instanceof PacienteContactoUpdatedDomainEvent) {
      this.handleContactoUpdated(event);
    } else if (event instanceof PacienteAddressUpdatedDomainEvent) {
      this.handleAddressUpdated(event);
    }
  }

  private handleDatosUpdated(event: PacienteDatosUpdatedDomainEvent): void {
    this.logger.debug(`Datos personales actualizados para paciente ${event.aggregateId}`);
    // Lógica específica para actualización de datos personales
  }

  private handleContactoUpdated(event: PacienteContactoUpdatedDomainEvent): void {
    this.logger.debug(`Información de contacto actualizada para paciente ${event.aggregateId}`);
    // Lógica específica para actualización de contacto
  }

  private handleAddressUpdated(event: PacienteAddressUpdatedDomainEvent): void {
    this.logger.debug(`Dirección actualizada para paciente ${event.aggregateId}`);
    // Lógica específica para actualización de dirección
  }
} 