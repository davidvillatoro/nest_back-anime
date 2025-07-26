/*
  Warnings:

  - You are about to drop the column `personajeIdd` on the `Imagenes` table. All the data in the column will be lost.
  - The primary key for the `Personajes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `idPersonaej` on the `Personajes` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[personajesIdPersonaje]` on the table `Imagenes` will be added. If there are existing duplicate values, this will fail.
  - The required column `idPersonaje` was added to the `Personajes` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "Imagenes" DROP CONSTRAINT "Imagenes_personajeIdd_fkey";

-- DropIndex
DROP INDEX "Imagenes_personajeIdd_key";

-- AlterTable
ALTER TABLE "Imagenes" DROP COLUMN "personajeIdd",
ADD COLUMN     "personajesIdPersonaje" TEXT;

-- AlterTable
ALTER TABLE "Personajes" DROP CONSTRAINT "Personajes_pkey",
DROP COLUMN "idPersonaej",
ADD COLUMN     "idPersonaje" TEXT NOT NULL,
ADD CONSTRAINT "Personajes_pkey" PRIMARY KEY ("idPersonaje");

-- CreateIndex
CREATE UNIQUE INDEX "Imagenes_personajesIdPersonaje_key" ON "Imagenes"("personajesIdPersonaje");

-- AddForeignKey
ALTER TABLE "Imagenes" ADD CONSTRAINT "Imagenes_personajesIdPersonaje_fkey" FOREIGN KEY ("personajesIdPersonaje") REFERENCES "Personajes"("idPersonaje") ON DELETE CASCADE ON UPDATE CASCADE;
