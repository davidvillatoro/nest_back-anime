-- CreateTable
CREATE TABLE "Personajes" (
    "idPersonaje" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripccion" TEXT NOT NULL,
    "precio" DOUBLE PRECISION NOT NULL,
    "inStock" INTEGER NOT NULL,
    "fechaLanzamiento" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "img" TEXT NOT NULL,
    "genero" TEXT[] DEFAULT ARRAY[]::TEXT[],

    CONSTRAINT "Personajes_pkey" PRIMARY KEY ("idPersonaje")
);

-- CreateIndex
CREATE UNIQUE INDEX "Personajes_nombre_key" ON "Personajes"("nombre");
