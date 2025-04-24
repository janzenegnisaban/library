-- CreateTable
CREATE TABLE "returnedBooks" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "returnedBy" TEXT NOT NULL,
    "returnedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "returnedBooks_pkey" PRIMARY KEY ("id")
);
