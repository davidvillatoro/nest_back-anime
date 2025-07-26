-- AlterTable
ALTER TABLE "Personajes" ADD COLUMN     "genero" TEXT[] DEFAULT ARRAY['accion', 'fantacia']::TEXT[],
ADD COLUMN     "inStock" INTEGER DEFAULT 2,
ADD COLUMN     "precio" DOUBLE PRECISION DEFAULT 2;
