-- CreateTable
CREATE TABLE "Persona" (
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "identificacion" TEXT NOT NULL,
    "fecha_nacimiento" TIMESTAMP(3) NOT NULL,
    "direccion" TEXT NOT NULL,
    "tipo_sangre" TEXT NOT NULL,
    "genero" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "telefono_emergencia" TEXT NOT NULL,

    CONSTRAINT "Persona_pkey" PRIMARY KEY ("identificacion")
);

-- CreateTable
CREATE TABLE "Historia_Medica" (
    "personaId" TEXT NOT NULL,
    "altura" TEXT,
    "peso" TEXT,
    "temperatura" TEXT,
    "tension_sistolica" TEXT,
    "tension_diastolica" TEXT,
    "fecha_Revision" TIMESTAMP(3) NOT NULL,
    "Observaciones" TEXT NOT NULL,
    "alergias" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "Historia_Medica_personaId_key" ON "Historia_Medica"("personaId");

-- AddForeignKey
ALTER TABLE "Historia_Medica" ADD CONSTRAINT "Historia_Medica_personaId_fkey" FOREIGN KEY ("personaId") REFERENCES "Persona"("identificacion") ON DELETE RESTRICT ON UPDATE CASCADE;
