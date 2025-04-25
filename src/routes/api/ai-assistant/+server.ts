import { json, type RequestHandler } from "@sveltejs/kit";
import { chatWithOllama } from "$lib/utils/ollama";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const POST: RequestHandler = async ({ request }) => {
    try {
        const body = await request.json();
        const { chat } = body;

        if (!chat) {
            return json({ error: "Chat message is required!" }, { status: 400 });
        }

        let borrowedBooks = [];
        let donatedBooks = [];
        let overdueBooksCount = 0;

        try {
            // Fetch borrowed books from the database
            borrowedBooks = await prisma.borrowedBook.findMany({
                select: {
                    id: true,
                    book: {
                        select: {
                            title: true,
                            author: true,
                        },
                    },
                    user: {
                        select: {
                            username: true,
                        },
                    },
                    borrowedAt: true,
                    dueDate: true,
                },
            });

            // Count overdue books
            const currentDate = new Date();
            overdueBooksCount = borrowedBooks.filter(
                (book) => book.dueDate < currentDate
            ).length;

            // Fetch donated books from the database
            donatedBooks = await prisma.book.findMany({
                where: {
                    donatedBy: {
                        not: null,
                    },
                },
                select: {
                    id: true,
                    title: true,
                    author: true,
                    donatedBy: true,
                    donatedAt: true,
                },
            });
        } catch (dbError) {
            console.error("Database fetch error:", dbError);
            borrowedBooks = [];
            donatedBooks = [];
        }

        const totalBorrowedBooks = borrowedBooks.length;
        const totalDonatedBooks = donatedBooks.length;

        let chatResponse;
        try {
            chatResponse = await chatWithOllama("deepseek-r1:7b", [
                {
                    role: "system",
                    content: `
                        You are an AI assistant for a library management system. Your role is to generate a summarization report for the system based on the following data:
                        
                        - Total Borrowed Books: ${totalBorrowedBooks}
                        - Total Donated Books: ${totalDonatedBooks}
                        - Overdue Books: ${overdueBooksCount}
                        
                        Provide a concise and insightful summary of the library's current status, highlighting key statistics and trends.
                    `,
                },
                {
                    role: "user",
                    content: chat,
                },
            ]);
        } catch (ollamaError) {
            console.error("Ollama Error:", ollamaError);
            return json({
                message: {
                    role: "assistant",
                    content: "I'm sorry, I couldn't process your request at the moment. Please try again later.",
                },
            });
        }

        return json(chatResponse);
    } catch (error) {
        console.error("AI Assistant API Error:", error);
        return json({
            error: "An unexpected error occurred.",
            details: error instanceof Error ? error.message : "Unknown error",
        }, { status: 500 });
    }
};