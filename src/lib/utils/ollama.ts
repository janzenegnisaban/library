import { Ollama } from "ollama";

export async function chatWithOllama(model: string, messages: Array<{ role: string; content: string }>) {
    try {
        const ollama = new Ollama({ host: "http://127.0.0.1:11434" });

        const chat = await ollama.chat({
            model,
            messages,
        });

        return chat;
    } catch (error: any) {
        console.error("Ollama Error:", error);

        // Fallback response
        return {
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
}