/*
  Warnings:

  - The primary key for the `Personajes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `idPersonaje` on the `Personajes` table. All the data in the column will be lost.
  - You are about to drop the column `imganeId` on the `Personajes` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[personajeIdd]` on the table `Imagenes` will be added. If there are existing duplicate values, this will fail.
  - The required column `idPersonaej` was added to the `Personajes` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "Personajes" DROP CONSTRAINT "Personajes_imganeId_fkey";

-- DropIndex
DROP INDEX "Personajes_imganeId_key";

-- AlterTable
ALTER TABLE "Imagenes" ADD COLUMN     "personajeIdd" TEXT;

-- AlterTable
ALTER TABLE "Personajes" DROP CONSTRAINT "Personajes_pkey",
DROP COLUMN "idPersonaje",
DROP COLUMN "imganeId",
ADD COLUMN     "idPersonaej" TEXT NOT NULL,
ADD CONSTRAINT "Personajes_pkey" PRIMARY KEY ("idPersonaej");

-- CreateIndex
CREATE UNIQUE INDEX "Imagenes_personajeIdd_key" ON "Imagenes"("personajeIdd");

-- AddForeignKey
ALTER TABLE "Imagenes" ADD CONSTRAINT "Imagenes_personajeIdd_fkey" FOREIGN KEY ("personajeIdd") REFERENCES "Personajes"("idPersonaej") ON DELETE CASCADE ON UPDATE CASCADE;
