/*
  Warnings:

  - You are about to drop the column `personajeId` on the `Imagenes` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[imganeId]` on the table `Personajes` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Imagenes" DROP CONSTRAINT "Imagenes_personajeId_fkey";

-- DropIndex
DROP INDEX "Imagenes_personajeId_key";

-- AlterTable
ALTER TABLE "Imagenes" DROP COLUMN "personajeId";

-- AlterTable
ALTER TABLE "Personajes" ADD COLUMN     "imganeId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Personajes_imganeId_key" ON "Personajes"("imganeId");

-- AddForeignKey
ALTER TABLE "Personajes" ADD CONSTRAINT "Personajes_imganeId_fkey" FOREIGN KEY ("imganeId") REFERENCES "Imagenes"("idImagen") ON DELETE CASCADE ON UPDATE CASCADE;
