import { PrismaClient } from '@prisma/client';
import { json, type RequestHandler } from '@sveltejs/kit';

const prisma = new PrismaClient();

export const POST: RequestHandler = async ({ request, locals }) => {
    try {
        const borrowData = await request.json();

        // Validate required fields
        if (!borrowData.bookId || !borrowData.userId || !borrowData.dueDate) {
            return json({ success: false, error: 'Missing required fields' }, { status: 400 });
        }

        // Convert userId to an integer
        const userId = parseInt(borrowData.userId, 10);
        if (isNaN(userId)) {
            return json({ success: false, error: 'Invalid userId' }, { status: 400 });
        }

        // Retrieve username from session or set a default value
        const username = (locals.user as { id: string; username?: string })?.username || 'Unknown User'; // Replace with actual session logic

        // Check if the due date is after today
        const dueDate = new Date(borrowData.dueDate);
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Normalize to midnight for comparison
        const isOverdue = dueDate < today;

        // Create a new borrowed book record
        const borrowedBook = await prisma.borrowedBook.create({
            data: {
                bookId: borrowData.bookId,
                userId: userId,
                username: username, // Provide a value for the username field
                borrowedAt: new Date(),
                dueDate: dueDate,
                isOverdue: isOverdue, // Set overdue status
            },
        });

        // Update the book's status to "Unavailable"
        await prisma.book.update({
            where: { id: borrowData.bookId },
            data: { status: 'Unavailable' },
        });

        return json({ success: true, borrowedBook });
    } catch (error) {
        console.error('Error borrowing book:', error);
        return json({ error: 'Failed to borrow book' }, { status: 500 });
    }
};