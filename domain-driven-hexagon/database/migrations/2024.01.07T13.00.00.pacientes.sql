CREATE TABLE "pacientes" (
  "id" character varying NOT NULL,
  "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  "nombre" character varying(50) NOT NULL,
  "apellidos" character varying(100) NOT NULL,
  "edad" integer NOT NULL CHECK ("edad" >= 0 AND "edad" <= 120),
  "sexo" character varying(20) NOT NULL,
  "telefono" character varying(20) NOT NULL,
  "email" character varying NOT NULL,
  "alergias" character varying(500) NOT NULL DEFAULT '',
  "notas" character varying(1000) NOT NULL DEFAULT '',
  "country" character varying(50) NOT NULL,
  "postalCode" character varying(10) NOT NULL,
  "street" character varying(100) NOT NULL,
  CONSTRAINT "UQ_pacientes_email" UNIQUE ("email"),
  CONSTRAINT "UQ_pacientes_telefono" UNIQUE ("telefono"),
  CONSTRAINT "PK_pacientes" PRIMARY KEY ("id")
) 