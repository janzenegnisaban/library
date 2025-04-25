/*
  Warnings:

  - Added the required column `description` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Book" ADD COLUMN     "coverImage" TEXT,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "quantity" INTEGER NOT NULL;
