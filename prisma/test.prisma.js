import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seedDatabase() {
    console.log("Seeding database...");

    // Insert sample books
    const book1 = await prisma.book.create({
        data: {
            title: "Book Title 1",
            author: "Author 1",
            isbn: "1234567890",
            category: "Fiction",
            donatedBy: "Donor 1",
            donatedAt: new Date(),
        },
    });

    const book2 = await prisma.book.create({
        data: {
            title: "Book Title 2",
            author: "Author 2",
            isbn: "0987654321",
            category: "Non-Fiction",
        },
    });

    console.log("Books seeded:", [book1, book2]);

    // Insert sample borrowed books
    const borrowedBook = await prisma.borrowedBook.create({
        data: {
            bookId: book1.id,
            userId: 1, // Replace with a valid user ID from your database
            borrowedAt: new Date(),
            dueDate: new Date(new Date().setDate(new Date().getDate() + 7)), // Due in 7 days
        },
    });

    console.log("Borrowed Book seeded:", borrowedBook);

    // Insert sample return history
    const returnHistory = await prisma.returnHistory.create({
        data: {
            bookId: book2.id,
            userId: 1, // Replace with a valid user ID from your database
            returnedAt: new Date(),
        },
    });

    console.log("Return History seeded:", returnHistory);

    // Insert sample overdue book
    const overdueBook = await prisma.overdueBook.create({
        data: {
            bookId: book1.id,
            userId: 1, // Replace with a valid user ID from your database
            overdueAt: new Date(new Date().setDate(new Date().getDate() - 3)), // Overdue by 3 days
        },
    });

    console.log("Overdue Book seeded:", overdueBook);
}

async function testDatabase() {
    console.log("Testing database...");

    // Test User model
    const users = await prisma.user.findMany();
    console.log('Users:', users);

    // Test Book model
    const books = await prisma.book.findMany();
    console.log('Books:', books);

    // Test BorrowedBook model
    const borrowedBooks = await prisma.borrowedBook.findMany({
        include: {
            book: true,
            user: true,
        },
    });
    console.log('Borrowed Books:', borrowedBooks);

    // Test ReturnHistory model
    const returnHistories = await prisma.returnHistory.findMany({
        include: {
            book: true,
            user: true,
        },
    });
    console.log('Return Histories:', returnHistories);

    // Test OverdueBook model
    const overdueBooks = await prisma.overdueBook.findMany({
        include: {
            book: true,
            user: true,
        },
    });
    console.log('Overdue Books:', overdueBooks);
}

async function main() {
    try {
        // Seed the database with sample data
        await seedDatabase();

        // Test the database
        await testDatabase();
    } catch (error) {
        console.error('Error:', error);
    } finally {
        // Disconnect Prisma client
        await prisma.$disconnect();
    }
}

main();