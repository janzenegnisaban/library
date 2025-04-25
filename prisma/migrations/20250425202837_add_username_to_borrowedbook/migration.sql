/*
  Warnings:

  - Added the required column `username` to the `BorrowedBook` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `OverdueBook` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BorrowedBook" ADD COLUMN     "username" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "OverdueBook" ADD COLUMN     "username" TEXT NOT NULL;
