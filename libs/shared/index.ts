// LIBS/SHARED - ARQUITECTURA DDD CONSISTENTE
// Exports organizados por las 4 capas DDD estándar

// =====================================
// DOMAIN LAYER - Lógica de Negocio
// =====================================

// DDD Building Blocks
export * from './domain/ddd';

// Domain Exceptions
export * from './domain/exceptions';

// Domain Types
export * from './domain/types';

// =====================================
// APPLICATION LAYER - Casos de Uso
// =====================================

// Application Context
export * from './application/context/AppRequestContext';
export * from './application/context/ContextInterceptor';

// Application Interceptors
export * from './application/interceptors/exception.interceptor';

// =====================================
//  INFRASTRUCTURE LAYER - Técnico
// =====================================

// Database Infrastructure
export * from './infrastructure/database';

// Infrastructure Ports
export * from './infrastructure/ports';

// =====================================
// PRESENTATION LAYER - Interfaces
// =====================================

// API DTOs y Responses
export * from './presentation/api';

// Presentation Decorators
export * from './presentation/decorators';

// Presentation Utils
export * from './presentation/utils';

// Guards
export * from './presentation/guard'; 