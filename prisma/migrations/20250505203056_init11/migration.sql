/*
  Warnings:

  - The primary key for the `Imagenes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `idPersonaje` on the `Imagenes` table. All the data in the column will be lost.
  - You are about to drop the column `imagenId` on the `Imagenes` table. All the data in the column will be lost.
  - The primary key for the `Personajes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `personajeId` on the `Personajes` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[personajeId]` on the table `Imagenes` will be added. If there are existing duplicate values, this will fail.
  - The required column `idImagen` was added to the `Imagenes` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `idPersonaje` was added to the `Personajes` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "Imagenes" DROP CONSTRAINT "Imagenes_idPersonaje_fkey";

-- DropIndex
DROP INDEX "Imagenes_idPersonaje_key";

-- AlterTable
ALTER TABLE "Imagenes" DROP CONSTRAINT "Imagenes_pkey",
DROP COLUMN "idPersonaje",
DROP COLUMN "imagenId",
ADD COLUMN     "idImagen" TEXT NOT NULL,
ADD COLUMN     "personajeId" TEXT,
ADD CONSTRAINT "Imagenes_pkey" PRIMARY KEY ("idImagen");

-- AlterTable
ALTER TABLE "Personajes" DROP CONSTRAINT "Personajes_pkey",
DROP COLUMN "personajeId",
ADD COLUMN     "idPersonaje" TEXT NOT NULL,
ADD CONSTRAINT "Personajes_pkey" PRIMARY KEY ("idPersonaje");

-- CreateIndex
CREATE UNIQUE INDEX "Imagenes_personajeId_key" ON "Imagenes"("personajeId");

-- AddForeignKey
ALTER TABLE "Imagenes" ADD CONSTRAINT "Imagenes_personajeId_fkey" FOREIGN KEY ("personajeId") REFERENCES "Personajes"("idPersonaje") ON DELETE CASCADE ON UPDATE CASCADE;
