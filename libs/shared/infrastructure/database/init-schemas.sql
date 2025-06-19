-- 🏗️ CONFIGURACIÓN DE SCHEMAS PARA MICROSERVICIOS
-- Base de datos compartida con schemas separados por servicio

-- 🏥 Schema para Pacientes Service
CREATE SCHEMA IF NOT EXISTS pacientes_schema;

-- 🦷 Schema para Odontogramas Service  
CREATE SCHEMA IF NOT EXISTS odontogramas_schema;

-- 🔄 Schema compartido para comunicación cross-service
CREATE SCHEMA IF NOT EXISTS shared_schema;

-- 📬 OUTBOX PATTERN para eventos cross-service
CREATE TABLE IF NOT EXISTS shared_schema.outbox_events (
    event_id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    event_type varchar(255) NOT NULL,
    aggregate_id varchar(255) NOT NULL,
    aggregate_type varchar(100) NOT NULL,
    payload jsonb NOT NULL,
    metadata jsonb DEFAULT '{}',
    created_at timestamp with time zone DEFAULT now(),
    processed_at timestamp with time zone NULL,
    retry_count integer DEFAULT 0,
    max_retries integer DEFAULT 3
);

-- 📊 Índices para performance del outbox
CREATE INDEX IF NOT EXISTS idx_outbox_events_processed 
ON shared_schema.outbox_events (processed_at, created_at);

CREATE INDEX IF NOT EXISTS idx_outbox_events_type 
ON shared_schema.outbox_events (event_type);

CREATE INDEX IF NOT EXISTS idx_outbox_events_aggregate 
ON shared_schema.outbox_events (aggregate_type, aggregate_id);

-- 🔧 Función para limpiar eventos procesados (opcional)
CREATE OR REPLACE FUNCTION shared_schema.cleanup_processed_events()
RETURNS void AS $$
BEGIN
    DELETE FROM shared_schema.outbox_events 
    WHERE processed_at IS NOT NULL 
    AND processed_at < now() - interval '7 days';
END;
$$ LANGUAGE plpgsql;

-- ✅ Foreign Keys cross-schema permitidas
-- Ejemplo: odontogramas_schema.odontogramas puede referenciar pacientes_schema.pacientes
-- CREATE TABLE odontogramas_schema.odontogramas (
--     id uuid PRIMARY KEY,
--     paciente_id uuid REFERENCES pacientes_schema.pacientes(id),
--     ...
-- );

COMMENT ON SCHEMA pacientes_schema IS 'Schema exclusivo para el servicio de pacientes';
COMMENT ON SCHEMA odontogramas_schema IS 'Schema exclusivo para el servicio de odontogramas';
COMMENT ON SCHEMA shared_schema IS 'Schema compartido para comunicación entre servicios';
COMMENT ON TABLE shared_schema.outbox_events IS 'Patrón Outbox para garantizar entrega de eventos cross-service'; 