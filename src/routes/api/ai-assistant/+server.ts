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

        try {
            // Attempt to fetch borrowed books from the database
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

            // Attempt to fetch donated books from the database
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
            // If database queries fail, fallback to empty arrays
            borrowedBooks = [];
            donatedBooks = [];
        }

        // Send the query to Ollama with context from the database (or fallback data)
        let chatResponse;
        try {
            chatResponse = await chatWithOllama("deepseek-r1:7b", [
                {
                    role: "system",
                    content: `
                        You are an AI assistant for a library management system.
                        Here is the library data:
                        - Borrowed Books: ${JSON.stringify(borrowedBooks)}
                        - Donated Books: ${JSON.stringify(donatedBooks)}
                        
                        Respond to the user's query with relevant reports, analytics, or book suggestions.
                    `,
                },
                {
                    role: "user",
                    content: chat,
                },
            ]);
        } catch (ollamaError) {
            console.error("Ollama Error:", ollamaError);
            chatResponse = {
                choices: [
                    {
                        message: {
                            role: "assistant",
                            content: "I'm sorry, I couldn't process your request at the moment. Please try again later.",
                        },
                    },
                ],
            };
        }
    


        return json(chatResponse);
    } catch (error) {
        if (error instanceof Error) {
            console.error("AI Assistant API Error:", error.message, error.stack);
        } else {
            console.error("AI Assistant API Error:", error);
        }
        return json({
            error: "An unexpected error occurred.",
            details: error instanceof Error ? error.message : "Unknown error",
        }, { status: 500 });
    }
};