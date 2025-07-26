/*
  Warnings:

  - The primary key for the `Personajes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `idPersonaje` on the `Personajes` table. All the data in the column will be lost.
  - You are about to drop the column `img` on the `Personajes` table. All the data in the column will be lost.
  - The required column `personajeId` was added to the `Personajes` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "Personajes" DROP CONSTRAINT "Personajes_pkey",
DROP COLUMN "idPersonaje",
DROP COLUMN "img",
ADD COLUMN     "personajeId" TEXT NOT NULL,
ALTER COLUMN "fechaLanzamiento" SET DATA TYPE TIMESTAMP(3),
ALTER COLUMN "createdAt" SET DATA TYPE TIMESTAMP(3),
ADD CONSTRAINT "Personajes_pkey" PRIMARY KEY ("personajeId");

-- CreateTable
CREATE TABLE "Imagenes" (
    "imagenId" TEXT NOT NULL,
    "url" TEXT NOT NULL DEFAULT 'http://localhost:3002/public/noimg.svg',
    "idPersonaje" TEXT,

    CONSTRAINT "Imagenes_pkey" PRIMARY KEY ("imagenId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Imagenes_idPersonaje_key" ON "Imagenes"("idPersonaje");

-- AddForeignKey
ALTER TABLE "Imagenes" ADD CONSTRAINT "Imagenes_idPersonaje_fkey" FOREIGN KEY ("idPersonaje") REFERENCES "Personajes"("personajeId") ON DELETE CASCADE ON UPDATE CASCADE;
