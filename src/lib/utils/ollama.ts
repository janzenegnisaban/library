export async function chatWithOllama(model: string, messages: Array<{ role: string; content: string }>) {
    try {
        const response = await fetch("http://127.0.0.1:11434/api/chat", {
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
            const rawError = await response.text(); // Log raw response
            console.error("Ollama API Raw Error Response:", rawError);

            let errorData;
            try {
                errorData = JSON.parse(rawError); // Attempt to parse JSON
            } catch (jsonError) {
                console.error("Failed to parse error response as JSON:", jsonError);
                throw new Error("Failed to communicate with Ollama server.");
            }
            console.error("Ollama API Error:", errorData);
            throw new Error(errorData.error || "Failed to communicate with Ollama server.");
        }

        const rawData = await response.text(); // Log raw response
        console.log("Ollama API Raw Response:", rawData);

        let data;
        try {
            data = JSON.parse(rawData); // Attempt to parse JSON
        } catch (jsonError) {
            console.error("Failed to parse response as JSON:", jsonError);
            throw new Error("Invalid JSON response from Ollama server.");
        }

        return data;
    } catch (error: any) {
        console.error("Ollama Error:", error);

        // Handle specific network errors like ECONNREFUSED
        if (error.code === "ECONNREFUSED") {
            console.error("Unable to connect to Ollama server. Ensure it is running on http://localhost:11434.");
        }

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