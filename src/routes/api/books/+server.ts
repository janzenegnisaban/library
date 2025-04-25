import { PrismaClient } from '@prisma/client';
import { json, type RequestHandler } from '@sveltejs/kit';

const prisma = new PrismaClient();

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

export const POST: RequestHandler = async ({ request }) => {
    try {
        const bookData = await request.json();

        // Validate required fields
        if (!bookData.title || !bookData.author || !bookData.isbn || !bookData.description || !bookData.category || bookData.quantity === undefined) {
            return json({ success: false, error: 'Missing required fields' }, { status: 400 });
        }

        // Save the book to the database with status "Available"
        const newBook = await prisma.book.create({
            data: {
                title: bookData.title,
                author: bookData.author,
                isbn: bookData.isbn,
                description: bookData.description,
                category: bookData.category,
                coverImage: bookData.coverImage || null,
                quantity: bookData.quantity,
                status: 'Available',
            },
        });

        return json({ success: true, book: newBook });
    } catch (error) {
        console.error('Error adding book:', error);
        return json({ success: false, error: 'Failed to add book' }, { status: 500 });
    }
};