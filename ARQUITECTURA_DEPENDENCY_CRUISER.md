# 🏛️ Validación Arquitectónica con Dependency Cruiser

## **¿Qué es Dependency Cruiser?**

Dependency Cruiser es una herramienta que actúa como "**policía arquitectónico**" para nuestro proyecto. Valida que el código respete las reglas de arquitectura DDD (Domain-Driven Design) y detecta problemas como dependencias circulares.

## **Scripts Disponibles**

```bash
# ✅ Validación básica (solo errores)
npm run deps:check

# 📋 Validación detallada (con explicaciones)
npm run deps:validate

# 📊 Generar gráfico visual de dependencias
npm run deps:graph

# 📄 Información textual sobre dependencias
npm run deps:info
```

## **Reglas Implementadas**

### **🚫 Dependencias Circulares**
- **Regla**: `no-circular`
- **Qué detecta**: Módulos que se importan mutuamente
- **Ejemplo**: A importa B → B importa A

### **🔄 Aislamiento de Microservicios**
- **Regla**: `no-cross-service-deps`
- **Qué detecta**: Un servicio importando código de otro servicio
- **Ejemplo**: `pacientes-service` importando de `odontogramas-service`

### **📚 Pureza de Librería Compartida**
- **Regla**: `no-shared-deps-services`
- **Qué detecta**: `libs/shared` importando código específico de servicios
- **Ejemplo**: `libs/shared` importando de `services/pacientes-service`

### **🏛️ Capas DDD (Domain-Driven Design)**

#### **Domain Layer - Capa más pura**
- ❌ NO puede importar: `application/`, `infrastructure/`, `presentation/`
- ✅ SÍ puede importar: Otras entidades del dominio, value objects

#### **Application Layer - Orquestación**
- ❌ NO puede importar: `presentation/`
- ✅ SÍ puede importar: `domain/`, `infrastructure/` (solo ports)

#### **Infrastructure Layer - Implementación**
- ❌ NO puede importar: `presentation/`
- ✅ SÍ puede importar: `domain/`, `application/`

#### **Presentation Layer - Interfaz**
- ✅ SÍ puede importar: Todas las capas

## **Violaciones Detectadas Actualmente**

### **⚠️ Estado Actual: 26 violaciones**

#### **🔴 Violaciones Críticas en `libs/shared`**
1. **Domain → Presentation** (5 violaciones)
   - Classes base del dominio importando utilidades de presentación
   
2. **Domain → Infrastructure** (1 violación)
   - `aggregate-root.base.ts` importando `logger.port.ts`
   
3. **Domain → Application** (4 violaciones)
   - Classes base importando `AppRequestContext`

4. **Application → Presentation** (1 violación)
   - Interceptor importando response de API

#### **🔴 Dependencias Circulares**
1. **Servicios** (12 violaciones)
   - Mappers ↔ Repositories
   - Value Objects circulares en odontogramas
   - Command Handlers ↔ Services ↔ Modules

2. **Shared** (3 violaciones)
   - Exceptions circulares
   - Base classes circulares

## **Integración con CI/CD**

Para integrar con tu pipeline de CI/CD, añade:
```bash
npm run deps:check
```

El comando falla (exit code 1) si hay violaciones, deteniendo el build.

## **Próximos Pasos Recomendados**

### **🚨 Prioridad Alta**
1. **Limpiar libs/shared**
   - Separar concerns entre capas
   - Eliminar imports cruzados

2. **Resolver dependencias circulares**
   - Refactorizar mappers
   - Simplificar value objects

### **📈 Prioridad Media**
3. **Integrar en pre-commit hooks**
4. **Añadir reglas más específicas**
5. **Generar reportes automáticos**

## **Comandos Útiles**

```bash
# Ver solo violaciones de una regla específica
npx depcruise services libs --config .dependency-cruiser.js --output-type err-long | grep "no-circular"

# Generar gráfico solo de un servicio
npx depcruise services/pacientes-service --config .dependency-cruiser.js --output-type dot | dot -T svg > pacientes-deps.svg

# Ver dependencias de un archivo específico
npx depcruise services libs --focus "libs/shared/domain/ddd/entity.base.ts" --config .dependency-cruiser.js --output-type dot
```

---

**💡 Recuerda**: Dependency Cruiser no es solo un validador, es un **guardián de la arquitectura** que mantiene el código limpio y mantenible. 