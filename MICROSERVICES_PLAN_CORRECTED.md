# 🏗️ PLAN CORREGIDO: MICROSERVICIOS CON DDD EXISTENTE

## ✅ RESPETANDO TU ARQUITECTURA ACTUAL

### 📋 ESTRUCTURA OBJETIVO (MANTIENE TUS CAPAS DDD):

```
odoonto7-monorepo/
├── package.json                           ← Workspace raíz
├── services/
│   ├── pacientes-service/
│   │   ├── package.json
│   │   ├── Dockerfile
│   │   ├── nest-cli.json
│   │   └── src/
│   │       ├── domain/
│   │       │   └── pacientes/              ← TU CÓDIGO: src/domain/pacientes/
│   │       ├── application/
│   │       │   └── paciente/               ← TU CÓDIGO: src/application/paciente/
│   │       ├── infrastructure/
│   │       │   └── database/paciente/      ← TU CÓDIGO: src/infrastructure/database/paciente/
│   │       ├── presentation/
│   │       │   └── http/paciente/          ← TU CÓDIGO: src/presentation/http/paciente/
│   │       ├── config/                     ← Configuración específica del servicio
│   │       └── main.ts                     ← Entry point independiente
│   │
│   └── odontogramas-service/
│       ├── package.json
│       ├── Dockerfile  
│       └── src/
│           ├── domain/
│           │   └── odontogramas/           ← TU CÓDIGO: src/domain/odontogramas/
│           ├── application/
│           │   └── odontograma/            ← TU CÓDIGO: src/application/odontograma/
│           ├── infrastructure/
│           │   └── database/odontograma/   ← TU CÓDIGO: src/infrastructure/database/odontograma/
│           ├── presentation/
│           │   └── http/odontograma/       ← TU CÓDIGO: src/presentation/http/odontograma/
│           └── main.ts
│
├── libs/shared/                            ← ARQUITECTURA DDD CONSISTENTE
│   ├── domain/                            ← CAPA DE DOMINIO COMPARTIDO
│   │   ├── ddd/                           ← TU CÓDIGO: src/shared/ddd/
│   │   │   ├── aggregate-root.base.ts
│   │   │   ├── entity.base.ts
│   │   │   ├── value-object.base.ts
│   │   │   ├── domain-event.base.ts
│   │   │   ├── command.base.ts
│   │   │   ├── query.base.ts
│   │   │   └── repository.port.ts
│   │   ├── exceptions/                    ← TU CÓDIGO: src/shared/exceptions/
│   │   │   ├── exception.base.ts
│   │   │   ├── exception.codes.ts
│   │   │   └── exceptions.ts
│   │   ├── types/                         ← TU CÓDIGO: src/shared/types/
│   │   │   ├── deep-partial.type.ts
│   │   │   ├── mutable.type.ts
│   │   │   └── primitive.types.ts
│   │   └── events/                        ← NUEVO: cross-service events
│   │       ├── cross-service-event-bus.ts
│   │       └── outbox-pattern.ts
│   │
│   ├── application/                       ← CAPA DE APLICACIÓN COMPARTIDA
│   │   ├── context/                       ← TU CÓDIGO: src/shared/application/context/
│   │   │   ├── AppRequestContext.ts
│   │   │   └── ContextInterceptor.ts
│   │   └── interceptors/                  ← TU CÓDIGO: src/shared/application/interceptors/
│   │       └── exception.interceptor.ts
│   │
│   ├── infrastructure/                    ← CAPA DE INFRAESTRUCTURA COMPARTIDA
│   │   ├── database/                      ← TODA LA LÓGICA DE BD AQUÍ
│   │   │   ├── migrations/                ← MOVER: database/migrations/
│   │   │   │   ├── 2024.01.07T13.00.00.pacientes.sql
│   │   │   │   ├── 2024.01.08T14.00.00.odontogramas.sql
│   │   │   │   └── down/
│   │   │   ├── seeds/                     ← MOVER: database/seeds/
│   │   │   │   ├── pacientes.seed.sql
│   │   │   │   └── odontogramas.seed.sql
│   │   │   ├── schemas/                   ← NUEVO: schemas separados
│   │   │   │   └── init-schemas.sql
│   │   │   ├── sql-repository.base.ts     ← TU CÓDIGO: src/shared/db/
│   │   │   ├── getMigrator.ts             ← MOVER: database/getMigrator.ts
│   │   │   ├── migrate.ts                 ← MOVER: database/migrate.ts
│   │   │   └── seed.ts                    ← MOVER: database/seed.ts
│   │   └── ports/                         ← TU CÓDIGO: src/shared/ports/
│   │       └── logger.port.ts
│   │
│   └── presentation/                      ← CAPA DE PRESENTACIÓN COMPARTIDA
│       ├── api/                           ← TU CÓDIGO: src/shared/api/
│       │   ├── api-error.response.ts
│       │   ├── id.response.dto.ts
│       │   ├── paginated-query.request.dto.ts
│       │   ├── paginated.response.base.ts
│       │   ├── response.base.ts
│       │   └── graphql/
│       │       └── paginated.graphql-response.base.ts
│       ├── decorators/                    ← TU CÓDIGO: src/shared/decorators/
│       │   ├── final.decorator.ts
│       │   └── frozen.decorator.ts
│       └── utils/                         ← TU CÓDIGO: src/shared/utils/
│           ├── convert-props-to-object.util.ts
│           └── dotenv.ts
│
└── docker-compose.microservices.yml       ← NUEVO: orquestación
```

## 🎯 VENTAJAS DE ESTA ESTRUCTURA REORGANIZADA:

### ✅ **CONSISTENCIA ARQUITECTÓNICA TOTAL**:
- ✅ **Mismas 4 capas DDD** en servicios y shared
- ✅ **domain/**: Lógica de negocio, tipos, excepciones, eventos
- ✅ **application/**: Use cases, context, interceptors compartidos
- ✅ **infrastructure/**: BD, ports, repositories base
- ✅ **presentation/**: DTOs, decorators, utils de presentación

### ✅ **BASE DE DATOS CENTRALIZADA**:
- ✅ **libs/shared/infrastructure/database/** - Todo en un lugar
- ✅ **Migrations compartidas** - Esquemas cross-service
- ✅ **Seeds centralizados** - Datos iniciales consistentes
- ✅ **Repository base** - Lógica de persistencia común

### ✅ **NAVEGACIÓN INTUITIVA**:
- ✅ **Desarrolladores nuevos** encuentran todo donde esperan
- ✅ **Imports consistentes** - Misma estructura en todas partes
- ✅ **Refactoring seguro** - Arquitectura predecible

### ✅ PERMITE MICROSERVICIOS:
- ✅ **services/** - Despliegue independiente
- ✅ **libs/shared/** - Código reutilizable
- ✅ **BD compartida** - Transacciones ACID
- ✅ **Events cross-service** - Comunicación asíncrona

## 🔄 MIGRACIÓN ACTUALIZADA:

### 📦 PASO 1: Reorganizar Shared con Capas DDD (1 día)
```bash
# Crear estructura DDD en libs/shared
mkdir -p libs/shared/{domain,application,infrastructure,presentation}

# Mover código existente a capas DDD
mv src/shared/ddd libs/shared/domain/
mv src/shared/exceptions libs/shared/domain/
mv src/shared/types libs/shared/domain/
mv src/shared/application libs/shared/application/
mv src/shared/db libs/shared/infrastructure/database/
mv src/shared/ports libs/shared/infrastructure/
mv src/shared/api libs/shared/presentation/
mv src/shared/decorators libs/shared/presentation/
mv src/shared/utils libs/shared/presentation/

# Mover database a infrastructure
mv database/* libs/shared/infrastructure/database/
```

### 🏥 PASO 2: Crear Servicio Pacientes (2 días)  
```bash
# Copiar código específico manteniendo estructura DDD
cp -r src/domain/pacientes services/pacientes-service/src/domain/
cp -r src/application/paciente services/pacientes-service/src/application/
cp -r src/infrastructure/database/paciente services/pacientes-service/src/infrastructure/
cp -r src/presentation/http/paciente services/pacientes-service/src/presentation/
```

### 🦷 PASO 3: Crear Servicio Odontogramas (2 días)
```bash  
# Copiar código específico de odontogramas
cp -r src/domain/odontogramas services/odontogramas-service/src/domain/
cp -r src/application/odontograma services/odontogramas-service/src/application/
cp -r src/infrastructure/database/odontograma services/odontogramas-service/src/infrastructure/
cp -r src/presentation/http/odontograma services/odontogramas-service/src/presentation/
# etc...
```

### 🗄️ PASO 4: Configurar BD Compartida (1 día)
- Crear schemas separados: pacientes_schema, odontogramas_schema
- Configurar outbox pattern para eventos
- Mantener foreign keys cross-schema

### 🚀 PASO 5: Deploy Independiente (1 día)
- Docker containers por servicio
- CI/CD pipelines separados
- Load balancer / API Gateway

## ❓ PREGUNTAS PARA TI:

1. **¿Te parece mejor esta estructura que respeta tu DDD?**
si
2. **¿Empezamos moviendo solo src/shared a libs/shared?**
si
3. **¿Prefieres mantener los mismos imports o cambiarlos gradualmente?**
intenta cambiar los imports cada vez que cambias un archivo. 

## 🎯 RESULTADO: ARQUITECTURA DDD PERFECTAMENTE CONSISTENTE

```typescript
// ✅ Imports consistentes en todos lados:
import { AggregateRoot } from '@odoonto7/shared/domain/ddd';
import { ExceptionBase } from '@odoonto7/shared/domain/exceptions';
import { SqlRepositoryBase } from '@odoonto7/shared/infrastructure/database';
import { ResponseBase } from '@odoonto7/shared/presentation/api';
```

## 🎯 RESULTADO FINAL:
- ✅ **Misma funcionalidad** que tienes ahora
- ✅ **Arquitectura DDD** intacta y consistente
- ✅ **Microservicios** desplegables independientemente  
- ✅ **BD compartida** para transacciones ACID
- ✅ **Escalabilidad** cuando la necesites

**¿Te parece mejor esta estructura DDD consistente?** 🎯