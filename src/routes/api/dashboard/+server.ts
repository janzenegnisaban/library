import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
    const users = await prisma.user.count();
    const books = await prisma.book.count();
    const borrowed = await prisma.borrowedBook.count();
    const overdue = await prisma.borrowedBook.count({
        where: {
            isOverdue: true
        }
    });

    return {
        status: 200,
        body: {
            users,
            books,
            borrowed,
            overdue
        }
    };
}