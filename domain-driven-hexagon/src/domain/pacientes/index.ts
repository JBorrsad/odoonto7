// Entities
export * from './entities/paciente.entity';

// Value Objects
export * from './value-objects/address.value-object';

// Events
export * from './events/paciente-created.domain-event';
export * from './events/paciente-deleted.domain-event';
export * from './events/paciente-address-updated.domain-event';
export * from './events/paciente-alergias-updated.domain-event';
export * from './events/paciente-contacto-updated.domain-event';
export * from './events/paciente-datos-updated.domain-event';
export * from './events/paciente-embarazada-updated.domain-event';
export * from './events/paciente-hemorragias-updated.domain-event';
export * from './events/paciente-medicacion-updated.domain-event';
export * from './events/paciente-notas-updated.domain-event';
export * from './events/paciente-patologias-updated.domain-event';

// Errors
export * from './errors/paciente-already-exists.error';
export * from './errors/paciente-invalid-pregnancy.error';

// Types
export * from './types';

// Repository interfaces
export * from './repositories/paciente-repository.port'; 