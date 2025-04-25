-- CreateTable
CREATE TABLE "Query" (
    "id" SERIAL NOT NULL,
    "userQuery" TEXT NOT NULL,
    "assistantResponse" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Query_pkey" PRIMARY KEY ("id")
);
