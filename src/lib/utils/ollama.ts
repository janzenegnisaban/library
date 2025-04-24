export async function chatWithOllama(model: string, messages: Array<{ role: string; content: string }>) {
    try {
        const response = await fetch("http://localhost:11434/api/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                model,
                messages,
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error("Ollama API Error:", errorData);
            throw new Error(errorData.error || "Failed to communicate with Ollama server.");
        }

        const data = await response.json();
        return data;
    } catch (error) {
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