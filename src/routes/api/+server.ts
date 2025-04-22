import { json, type RequestHandler } from "@sveltejs/kit";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { Ollama } from "ollama";

const prisma = new PrismaClient();

export const POST: RequestHandler = async ({ request }) => {
    try {
        const body = await request.json();
        const { action, email, password, chat } = body;

        if (!action) {
            return json({ error: "Action is required!" }, { status: 400 });
        }

        if (action === "signup") {
            // Handle signup
            const { username, mobile } = body;

            if (!email || !password || !username || !mobile) {
                return json({ error: "All fields are required for signup!" }, { status: 400 });
            }

            // Hash the password
            const hashedPassword = await bcrypt.hash(password, 10);

            try {
                const user = await prisma.user.create({
                    data: {
                        email,
                        username,
                        mobile,
                        password: hashedPassword,
                    },
                });

                return json({ message: "Signup successful!", user: { id: user.id, email: user.email } });
            } catch (error) {
                if ((error as any).code === "P2002") {
                    return json({ error: "Email already exists!" }, { status: 400 });
                }
                return json({ error: "An error occurred during signup." }, { status: 500 });
            }
        } else if (action === "login") {
            // Handle login
            if (!email || !password) {
                return json({ error: "Email and password are required for login!" }, { status: 400 });
            }

            const user = await prisma.user.findUnique({
                where: { email },
            });

            if (!user) {
                return json({ error: "Invalid email or password!" }, { status: 400 });
            }

            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                return json({ error: "Invalid email or password!" }, { status: 400 });
            }

            return json({ message: "Login successful!", user: { id: user.id, email: user.email, username: user.username } });
        } else if (action === "chat") {
            // Handle chat
            if (!email || !chat) {
                return json({ error: "Email and chat message are required!" }, { status: 400 });
            }

            const ollama = new Ollama({ host: "http://localhost:11434" });

            const user = await prisma.user.findUnique({
                where: { email },
            });

            if (!user) {
                return json({ error: "User not found!" }, { status: 404 });
            }

            const chatResponse = await ollama.chat({
                model: "deepseek-r1:7b",
                messages: [
                    {
                        role: "system",
                        content: `Here is the data of my user: ${JSON.stringify(user)}
                        Respond only based on the data provided.`,
                    },
                    {
                        role: "user",
                        content: chat,
                    },
                ],
            });

            return json(chatResponse);
        } else {
            return json({ error: "Invalid action!" }, { status: 400 });
        }
    } catch (error) {
        console.error("API Error:", error);
        return json({ error: "An unexpected error occurred." }, { status: 500 });
    }
};