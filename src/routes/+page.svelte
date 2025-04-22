<script lang="ts">
    import MarkdownIt from "markdown-it";
    import { goto } from '$app/navigation';

    let response = "";
    let chat = "";
    let isTyping = false;
    let activeTab = "login"; // Tracks the active tab (login, signup, or chat)

    // Login form variables
    let loginEmail = "";
    let loginPassword = "";

    // Signup form variables
    let signupEmail = "";
    let signupUsername = "";
    let signupMobile = "";
    let signupPassword = "";
    let signupConfirmPassword = "";

    const md = new MarkdownIt();

    const onSubmitChat = async () => {
        if (!chat.trim()) return;

        isTyping = true;
        response = "";

        try {
            const req = await fetch("/api", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ action: "chat", email: loginEmail, chat }),
            });

            const res = await req.json();
            if (req.ok) {
                response = res.message?.content || "No response from the server.";
            } else {
                alert(res.error || "Chat failed!");
            }
        } catch (error) {
            console.error("Chat Error:", error);
            alert("An error occurred while sending the chat message.");
        } finally {
            isTyping = false;
            chat = ""; // Clear input after sending
        }
    };

    const handleLogin = async () => {
        try {
            const response = await fetch("/api", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ action: "login", email: loginEmail, password: loginPassword }),
            });

            const result = await response.json();
            if (response.ok) {
                alert("Login successful!");
                goto("/dashboard"); // Redirect to dashboard
            } else {
                alert(result.error || "Login failed!");
            }
        } catch (error) {
            console.error("Login Error:", error);
            alert("An error occurred during login.");
        }
    };

    const handleSignup = async () => {
        if (signupPassword !== signupConfirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            const response = await fetch("/api", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    action: "signup",
                    email: signupEmail,
                    username: signupUsername,
                    mobile: signupMobile,
                    password: signupPassword,
                }),
            });

            const result = await response.json();
            if (response.ok) {
                alert("Signup successful!");
                activeTab = "login"; // Switch to login tab
            } else {
                alert(result.error || "Signup failed!");
            }
        } catch (error) {
            console.error("Signup Error:", error);
            alert("An error occurred during signup.");
        }
    };
</script>

<style>
    :global(body) {
        margin: 0;
        padding: 0;
        min-height: 100vh;
        background: radial-gradient(circle at center, #0d1b2a 0%, #1b263b 100%);
        font-family: "Orbitron", "Segoe UI", sans-serif;
        color: #e0e0e0;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }

    .workspace {
        width: 100%;
        max-width: 1200px;
        height: 90vh;
        background: rgba(20, 33, 61, 0.85);
        border-radius: 30px;
        box-shadow: 0 0 50px rgba(0, 255, 255, 0.2), inset 0 0 20px rgba(0, 255, 255, 0.1);
        display: flex;
        flex-direction: column;
        overflow: hidden;
        border: 2px solid #00d4ff;
    }

    .tabs {
        display: flex;
        justify-content: center;
        background: rgba(15, 25, 45, 0.95);
        border-bottom: 2px solid #00d4ff;
    }

    .tab {
        flex: 1;
        text-align: center;
        padding: 15px;
        cursor: pointer;
        font-size: 1.2rem;
        color: #b0eaff;
        transition: background 0.3s ease;
    }

    .tab.active {
        background: #00d4ff;
        color: #0d1b2a;
        font-weight: bold;
    }

    .content {
        flex: 1;
        padding: 20px;
        overflow-y: auto;
    }

    .form-group {
        margin-bottom: 15px;
    }

    input {
        width: 100%;
        padding: 12px;
        border: 1px solid #ddd;
        border-radius: 5px;
        font-size: 16px;
    }

    button {
        width: 100%;
        padding: 12px;
        background-color: #6c3b85;
        color: white;
        border: none;
        border-radius: 5px;
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.3s;
    }

    button:hover {
        background-color: #336D82;
    }
</style>

<div class="workspace">
    <!-- Tabs -->
    <div class="tabs">
        <button type="button" class="tab {activeTab === 'login' ? 'active' : ''}" on:click={() => (activeTab = 'login')} role="tab" aria-selected={activeTab === 'login'}>Login</button>
        <button type="button" class="tab {activeTab === 'signup' ? 'active' : ''}" on:click={() => (activeTab = 'signup')} role="tab" aria-selected={activeTab === 'signup'}>Signup</button>
        <button type="button" class="tab {activeTab === 'chat' ? 'active' : ''}" on:click={() => (activeTab = 'chat')} role="tab" aria-selected={activeTab === 'chat'}>Chat</button>
    </div>

    <!-- Content -->
    <div class="content">
        {#if activeTab === 'login'}
            <h2>Login</h2>
            <div class="form-group">
                <input type="email" placeholder="Email" bind:value={loginEmail} />
            </div>
            <div class="form-group">
                <input type="password" placeholder="Password" bind:value={loginPassword} />
            </div>
            <button on:click={handleLogin}>Login</button>
        {:else if activeTab === 'signup'}
            <h2>Signup</h2>
            <div class="form-group">
                <input type="email" placeholder="Email" bind:value={signupEmail} />
            </div>
            <div class="form-group">
                <input type="text" placeholder="Username" bind:value={signupUsername} />
            </div>
            <div class="form-group">
                <input type="tel" placeholder="Mobile Number" bind:value={signupMobile} />
            </div>
            <div class="form-group">
                <input type="password" placeholder="Password" bind:value={signupPassword} />
            </div>
            <div class="form-group">
                <input type="password" placeholder="Confirm Password" bind:value={signupConfirmPassword} />
            </div>
            <button on:click={handleSignup}>Signup</button>
        {:else if activeTab === 'chat'}
            <h2>Chat</h2>
            <div class="response-display">
                {#if response}
                    {@html md.render(response)}
                {:else}
                    Initiating transmission...
                {/if}
            </div>

            {#if isTyping}
                <div class="status-orbit active">Processing signal</div>
            {:else}
                <div class="status-orbit">Awaiting input</div>
            {/if}

            <div class="input-dock">
                <input type="text" bind:value={chat} placeholder="Transmit message..." on:keypress={(e) => e.key === 'Enter' && onSubmitChat()} />
                <button on:click={onSubmitChat}>Send</button>
            </div>
        {/if}
    </div>
</div>