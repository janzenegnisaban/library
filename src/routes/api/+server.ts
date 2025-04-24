import { json, type RequestHandler } from "@sveltejs/kit";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export const POST: RequestHandler = async ({ request }) => {
    try {
        const body = await request.json();
        const { action, email, password, username, mobile } = body;

        if (!action) {
            return json({ error: "Action is required!" }, { status: 400 });
        }

        switch (action) {
            case "signup":
                return await handleSignup(email, password, username, mobile);

            case "login":
                return await handleLogin(email, password);

            default:
                return json({ error: "Invalid action!" }, { status: 400 });
        }
    } catch (error) {
        console.error("API Error:", error instanceof Error ? error.message : error);
        return json({
            error: "An unexpected error occurred.",
            details: error instanceof Error ? error.message : "Unknown error",
        }, { status: 500 });
    }
};

// Handle user signup
async function handleSignup(email: string, password: string, username: string, mobile: string) {
    if (!email || !password || !username || !mobile) {
        return json({ error: "All fields are required for signup!" }, { status: 400 });
    }

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
}

// Handle user login
async function handleLogin(email: string, password: string) {
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
}