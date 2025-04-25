import { PrismaClient } from '@prisma/client';
import { json, type RequestHandler } from '@sveltejs/kit';

const prisma = new PrismaClient();

export const POST: RequestHandler = async ({ request }) => {
    try {
        const bookData = await request.json();
        console.log('Received book data:', bookData);

        // Validate required fields
        if (!bookData.title || !bookData.author || !bookData.isbn || !bookData.description || !bookData.category || bookData.quantity === undefined) {
            console.error('Validation failed: Missing required fields');
            return json({ success: false, error: 'Missing required fields' }, { status: 400 });
        }

        // Save the book to the database
        const newBook = await prisma.book.create({
            data: {
                title: bookData.title,
                author: bookData.author,
                isbn: bookData.isbn,
                description: bookData.description,
                category: bookData.category,
                coverImage: bookData.coverImage || null, // Optional field
                quantity: bookData.quantity,
            },
        });

        console.log('Book saved to database:', newBook);

        // Fetch the updated list of books
        const books = await prisma.book.findMany();

        return json({ success: true, book: newBook, books });
    } catch (error) {
        console.error('Error adding book:', error);
        return json({ success: false, error: 'Failed to add book' }, { status: 500 });
    }
};

export const GET: RequestHandler = async () => {
    try {
        // Fetch all books from the database
        const books = await prisma.book.findMany();
        return json(books);
    } catch (error) {
        console.error('Error fetching books:', error);
        return json({ error: 'Failed to fetch books' }, { status: 500 });
    }
};