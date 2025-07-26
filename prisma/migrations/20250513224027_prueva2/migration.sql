/*
  Warnings:

  - You are about to drop the column `inStock` on the `Personajes` table. All the data in the column will be lost.
  - You are about to drop the column `precio` on the `Personajes` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Imagenes" ADD COLUMN     "publicID" TEXT;

-- AlterTable
ALTER TABLE "Personajes" DROP COLUMN "inStock",
DROP COLUMN "precio";
