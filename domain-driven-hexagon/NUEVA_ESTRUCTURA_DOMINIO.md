# 🏗️ Nueva Estructura de Dominios DDD

## 📁 Estructura Implementada

Ambos dominios (`pacientes` y `odontogramas`) ahora siguen la estructura DDD recomendada:

```
src/domain/
├── pacientes/
│   ├── entities/          ← Agregados y entidades hijas
│   │   └── paciente.entity.ts
│   ├── value-objects/     ← Tipos inmutables con lógica propia
│   │   └── address.value-object.ts
│   ├── events/            ← DomainEvents (ya-ocurrió)
│   │   ├── index.ts
│   │   ├── paciente-created.domain-event.ts
│   │   ├── paciente-address-updated.domain-event.ts
│   │   ├── paciente-contacto-updated.domain-event.ts
│   │   ├── paciente-datos-updated.domain-event.ts
│   │   ├── paciente-alergias-updated.domain-event.ts
│   │   ├── paciente-notas-updated.domain-event.ts
│   │   ├── paciente-medicacion-updated.domain-event.ts
│   │   ├── paciente-patologias-updated.domain-event.ts
│   │   ├── paciente-embarazada-updated.domain-event.ts
│   │   ├── paciente-hemorragias-updated.domain-event.ts
│   │   └── paciente-deleted.domain-event.ts
│   ├── errors/            ← Excepciones de dominio
│   │   ├── index.ts
│   │   ├── paciente-already-exists.error.ts
│   │   └── paciente-invalid-pregnancy.error.ts
│   ├── services/          ← Domain-services (reglas que tocan >1 entidad)
│   ├── repositories/      ← Interfaces de acceso a datos (solo la abstracción)
│   │   └── paciente-repository.port.ts
│   ├── types.ts           ← Tipos auxiliares (enums, alias, interfaces)
│   └── index.ts           ← Barrel para exportar de forma limpia
│
└── odontogramas/
    ├── entities/
    │   └── odontograma.entity.ts
    ├── value-objects/
    │   ├── index.ts
    │   ├── diente.value-object.ts
    │   ├── estado-cara.value-object.ts
    │   ├── lesion.value-object.ts
    │   └── tratamiento.value-object.ts
    ├── events/
    │   ├── index.ts
    │   ├── odontograma-created.domain-event.ts
    │   ├── lesion-agregada.domain-event.ts
    │   ├── tipo-dentadura-cambiado.domain-event.ts
    │   └── tratamiento-agregado.domain-event.ts
    ├── errors/
    │   ├── index.ts
    │   ├── odontograma-not-found.error.ts
    │   ├── odontograma-already-exists.error.ts
    │   ├── diente-not-found.error.ts
    │   ├── invalid-diente-number.error.ts
    │   └── invalid-tipo-dentadura.error.ts
    ├── services/
    ├── repositories/
    │   └── odontograma-repository.port.ts
    ├── types.ts
    └── index.ts
```

## 🎯 Contenido de Cada Carpeta

| Carpeta | Contenido | Ejemplos |
|---------|-----------|----------|
| **entities/** | Agregados raíz y entidades hijas | `PacienteEntity`, `OdontogramaEntity` |
| **value-objects/** | Objetos inmutables con invariantes | `Address`, `Diente`, `Lesion`, `Tratamiento` |
| **events/** | Domain Events que anuncian cambios | `PacienteCreated`, `LesionAgregada` |
| **errors/** | Excepciones de reglas de negocio | `PacienteInvalidPregnancy`, `InvalidDienteNumber` |
| **services/** | Lógica que no cabe en una entidad | Domain services complejos |
| **repositories/** | Interfaces puras de persistencia | `PacienteRepositoryPort`, `OdontogramaRepositoryPort` |
| **types.ts** | Enums, interfaces, tipos auxiliares | `Sexo`, `TipoDentadura`, `CaraDiente` |
| **index.ts** | Barrel exports para uso limpio | Re-exporta todo lo público |

## ✅ Beneficios de la Nueva Estructura

### 1. **Separación Clara de Responsabilidades**
- Cada carpeta tiene un propósito específico
- Fácil localizar tipos de código relacionados
- Imports más claros y organizados

### 2. **Escalabilidad**
- Agregar nuevos value objects es simple
- Nuevos eventos se organizan automáticamente
- Errores específicos en su lugar apropiado

### 3. **Imports Limpios**
```typescript
// Antes (imports dispersos)
import { PacienteEntity } from '@src/domain/paciente/paciente.entity';
import { Address } from '@src/domain/paciente/value-objects/address.value-object';
import { Sexo } from '@src/domain/paciente/paciente.types';

// Después (barrel import)
import { PacienteEntity, Address, Sexo } from '@src/domain/pacientes';
```

### 4. **Consistencia con DDD**
- Sigue las convenciones de Domain-Driven Design
- Estructura similar a proyectos enterprise
- Fácil onboarding para desarrolladores

## 🔄 Migración Realizada

### Archivos Movidos:
1. **Entidades** → `entities/`
2. **Value Objects** → `value-objects/`
3. **Eventos** → `events/`
4. **Errores** → `errors/`
5. **Tipos** → `types.ts`
6. **Interfaces de Repositorio** → `repositories/`

### Imports Actualizados:
- Todas las referencias internas actualizadas
- Paths relativos corregidos
- Barrel exports implementados

## 📋 Próximos Pasos

1. **Actualizar imports en otras capas** (Application, Infrastructure, Presentation)
2. **Crear Domain Services** si es necesario
3. **Implementar Specifications** en carpeta `specs/` (opcional)
4. **Documentar reglas de negocio** específicas de cada dominio

## 🎉 Resultado

Ambos dominios ahora siguen una **estructura DDD profesional** que es:
- ✅ **Escalable**
- ✅ **Mantenible** 
- ✅ **Consistente**
- ✅ **Fácil de navegar**
- ✅ **Enterprise-ready** 