<script lang="ts">
  import { onMount } from 'svelte';
  import Navbar from '$lib/navbar.svelte';
  import MarkdownIt from 'markdown-it';

  // Define types for chat messages
  interface ChatMessage {
      role: 'user' | 'assistant';
      content: string;
  }

  let userInput = '';
  let chatHistory: ChatMessage[] = [];
  let isLoading = false;
  const md = new MarkdownIt(); // Markdown parser

  // Initialize recentQueries
  let recentQueries: { userQuery: string }[] = [
      { userQuery: "Summary of the System Reports?" },
      { userQuery: "Daily Report?" },
      { userQuery: "Weekly Report?" }
  ];

  // Function to handle chat submission
  async function handleSubmit(): Promise<void> {
      if (!userInput.trim()) return;

      // Add user message to chat
      chatHistory = [...chatHistory, { 
          role: 'user', 
          content: userInput 
      }];

      // Simulate loading state
      isLoading = true;

      try {
          // Make API call to the AI assistant server
          const res = await fetch('/api/ai-assistant', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  chat: userInput,
              }),
          });

          const data = await res.json();

          if (res.ok && data.message?.content) {
              // Add assistant's response to chat
              chatHistory = [...chatHistory, { 
                  role: 'assistant', 
                  content: data.message.content 
              }];
          } else {
              // Handle error response
              chatHistory = [...chatHistory, { 
                  role: 'assistant', 
                  content: `Error: ${data.error || 'An error occurred.'}` 
              }];
          }
      } catch (error) {
          console.error('Error during API call:', error);
          chatHistory = [...chatHistory, { 
              role: 'assistant', 
              content: 'An unexpected error occurred while processing your request.' 
          }];
      } finally {
          isLoading = false;
          userInput = '';
      }
  }

  onMount(() => {
      // Add welcome message
      chatHistory = [{ 
          role: 'assistant', 
          content: 'Hello! I am your AI library assistant. How can I help you today?' 
      }];
  });
</script>

<svelte:head>
    <title>AI Assistance - SMART Library</title>
</svelte:head>

<div class="dashboard-container">
    <Navbar />
    
    <main class="main-content">
        <div class="page-header">
            <div class="icon-box">
                <span class="icon">⊞</span>
            </div>
            <h2 class="page-title">AI ASSISTANCE</h2>
        </div>
        
        <div class="ai-container">
            <div class="chat-container">
                <div class="chat-messages">
                    {#each chatHistory as message}
                        <div class="message {message.role}">
                            <div class="message-avatar">
                                {message.role === 'assistant' ? '🤖' : '👤'}
                            </div>
                            <div class="message-content">
                              {@html md.render(message.content.replace(/^[\s\S]*<\/think>(?![\s\S]*<\/think>)/g, ""))}
                            </div>
                        </div>
                    {/each}
                    
                    {#if isLoading}
                        <div class="message assistant">
                            <div class="message-avatar">🤖</div>
                            <div class="message-content typing">
                                <span class="dot"></span>
                                <span class="dot"></span>
                                <span class="dot"></span>
                            </div>
                        </div>
                    {/if}
                </div>

                
                <form class="chat-input" on:submit|preventDefault={handleSubmit}>
                    <input 
                        type="text" 
                        bind:value={userInput} 
                        placeholder="Ask me anything about the library..." 
                        disabled={isLoading}
                    />
                    <button type="submit" disabled={isLoading || !userInput.trim()}>
                        Send
                    </button>
                </form>
            </div>
            
            <div class="ai-features">
                <h3>Quick Actions</h3>
                <div class="feature-buttons">
                    <button class="feature-btn" on:click={() => userInput = "Find books about machine learning"}>
                        Find books
                    </button>
                    <button class="feature-btn" on:click={() => userInput = "How do I renew a book?"}>
                        How to renew
                    </button>
                    <button class="feature-btn" on:click={() => userInput = "What are the library hours?"}>
                        Library hours
                    </button>
                    <button class="feature-btn" on:click={() => userInput = "Recommend books similar to Harry Potter"}>
                        Book recommendations
                    </button>
                </div>
                
                <h3>Recent Queries</h3>
                <ul class="feature-buttons">
                    {#each recentQueries as query}
                        <button type="button" class="feature-btn" on:click={() => userInput = query.userQuery}>
                            {query.userQuery}
                        </button>
                    {/each}
                </ul>
            </div>
        </div>
    </main>
</div>
  
  <style>
    /* Main container */
    .dashboard-container {
      font-family: 'Arial', sans-serif;
      background-color: #9ca3af;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
    
    /* Main content */
    .main-content {
      padding: 20px;
      flex: 1;
    }
    
    .page-header {
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    
    .icon-box {
      background-color: #000;
      color: white;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
    }
    
    .page-title {
      font-size: 24px;
      font-weight: bold;
      margin: 0;
      color: white;
    }
    
    /* AI Container */
    .ai-container {
      display: grid;
      grid-template-columns: 1fr 300px;
      gap: 20px;
      height: calc(100vh - 150px);
    }
    
    /* Chat container */
    .chat-container {
      background-color: white;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }
    
    .chat-messages {
      flex: 1;
      padding: 20px;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
    
    .message {
      display: flex;
      gap: 10px;
      max-width: 80%;
    }
    
    .message.user {
      align-self: flex-end;
      flex-direction: row-reverse;
    }
    
    .message-avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: #e0e0e0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
    }
    
    .message-content {
      background-color: #f0f0f0;
      padding: 12px;
      border-radius: 12px;
      font-size: 14px;
    }
    
    .message.assistant .message-content {
      background-color: #e8f4ff;
    }
    
    .message.user .message-content {
      background-color: #f0f7ea;
    }
    
    .typing {
      display: flex;
      align-items: center;
      gap: 5px;
      padding: 15px;
    }
    
    .dot {
      width: 8px;
      height: 8px;
      background-color: #999;
      border-radius: 50%;
      animation: typing 1.4s infinite ease-in-out;
    }
    
    .dot:nth-child(1) {
      animation-delay: 0s;
    }
    
    .dot:nth-child(2) {
      animation-delay: 0.2s;
    }
    
    .dot:nth-child(3) {
      animation-delay: 0.4s;
    }
    
    @keyframes typing {
      0%, 60%, 100% {
        transform: translateY(0);
      }
      30% {
        transform: translateY(-5px);
      }
    }
    
    .chat-input {
      display: flex;
      padding: 10px;
      border-top: 1px solid #eee;
    }
    
    .chat-input input {
      flex: 1;
      padding: 12px;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 14px;
    }
    
    .chat-input button {
      padding: 0 20px;
      background-color: #3b82f6;
      color: white;
      border: none;
      border-radius: 4px;
      margin-left: 10px;
      cursor: pointer;
    }
    
    .chat-input button:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
    
    /* AI Features */
    .ai-features {
      background-color: white;
      border-radius: 8px;
      padding: 20px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    
    .ai-features h3 {
      margin-top: 0;
      margin-bottom: 15px;
      font-size: 16px;
    }
    
    .feature-buttons {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      margin-bottom: 20px;
    }
    
    .feature-btn {
      padding: 10px;
      background-color: #f0f7ea;
      border: none;
      border-radius: 4px;
      font-size: 14px;
      cursor: pointer;
      text-align: center;
    }
    
    .feature-btn:hover {
      background-color: #e0f0d5;
    }
    
    .recent-queries {
      list-style: none;
      padding: 0;
      margin: 0;
    }
  
    
    /* Responsive design */
    @media (max-width: 768px) {
      .ai-container {
        grid-template-columns: 1fr;
      }
    }
  </style>