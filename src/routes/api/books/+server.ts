import { PrismaClient } from '@prisma/client';
import { json, type RequestHandler } from '@sveltejs/kit';

const prisma = new PrismaClient();

export const GET: RequestHandler = async () => {
    try {
        const books = await prisma.book.findMany();
        return json(books);
    } catch (error) {
        console.error('Error fetching books:', error);
        return json({ error: 'Failed to fetch books' }, { status: 500 });
    }
};

export async function DELETE({ params }: { params: { id: string } }) {
    const { id } = params;

    try {
        await prisma.book.delete({
            where: { id: parseInt(id) },
        });
        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        console.error('Error deleting book:', error);
        return new Response(JSON.stringify({ error: 'Book not found or could not be deleted' }), { status: 404 });
    }
}

export const POST: RequestHandler = async ({ request }) => {
    try {
        const bookData = await request.json();

        if (!bookData.title || !bookData.author || !bookData.isbn || !bookData.description || !bookData.category || bookData.quantity === undefined) {
            return json({ success: false, error: 'Missing required fields' }, { status: 400 });
        }

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