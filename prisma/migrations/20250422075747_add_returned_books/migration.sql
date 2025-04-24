-- CreateTable
CREATE TABLE "borrowedBooks" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "borrowedBy" TEXT NOT NULL,
    "borrowedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "borrowedBooks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "donatedBooks" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "donatedBy" TEXT NOT NULL,
    "donatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "donatedBooks_pkey" PRIMARY KEY ("id")
);
