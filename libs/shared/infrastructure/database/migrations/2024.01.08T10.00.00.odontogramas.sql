CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS odontogramas (
    id UUID PRIMARY KEY,
    tipo_dentadura VARCHAR(20) NOT NULL CHECK (tipo_dentadura IN ('temporal', 'mixta_primera', 'mixta_segunda', 'definitiva')),
    dientes_data JSONB NOT NULL DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    CONSTRAINT fk_odontograma_paciente 
        FOREIGN KEY (id) REFERENCES pacientes(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_odontogramas_tipo_dentadura ON odontogramas(tipo_dentadura);
CREATE INDEX IF NOT EXISTS idx_odontogramas_dientes_data ON odontogramas USING GIN(dientes_data);
CREATE INDEX IF NOT EXISTS idx_odontogramas_created_at ON odontogramas(created_at);
CREATE INDEX IF NOT EXISTS idx_odontogramas_updated_at ON odontogramas(updated_at); 