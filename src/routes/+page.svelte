<script>
    // No specific logic is required for this landing page
  </script>
  
  <svelte:head>
    <title>Welcome to MyLibrary</title>
  </svelte:head>
  
  <div class="landing-container">
    <div class="content">
      <div class="logo">
        <img src="/Library-logo.png" alt="SMART Library Logo" class="logo-image" />
      </div>
      <h1>Welcome to SMART Library</h1>
      <p>Your gateway to a smarter way of managing your library resources.</p>
      <div class="buttons">
        <a href="/signup" class="btn">Sign Up</a>
        <a href="/signin" class="btn secondary">Sign In</a>
      </div>
    </div>
  </div>
  
  <style>
    /* Main container */
    .landing-container {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background-color: #f5f0e5;
      font-family: 'Arial', sans-serif;
      text-align: center;
    }
  
    .content {
      max-width: 600px;
      padding: 20px;
      background-color: white;
      border-radius: 16px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
  
    .logo {
      margin-bottom: 20px;
    }
  
    .logo-image {
      width: 150px;
      height: auto;
    }
  
    h1 {
      font-size: 28px;
      font-weight: bold;
      margin: 0 0 10px;
      color: #333;
    }
  
    p {
      font-size: 16px;
      color: #666;
      margin: 0 0 20px;
    }
  
    .buttons {
      display: flex;
      justify-content: center;
      gap: 20px;
    }
  
    .btn {
      display: inline-block;
      padding: 12px 20px;
      font-size: 16px;
      font-weight: bold;
      text-decoration: none;
      color: white;
      background-color: #6c5ce7;
      border-radius: 4px;
      transition: background-color 0.3s;
    }
  
    .btn:hover {
      background-color: #5b4bc4;
    }
  
    .btn.secondary {
      background-color: #2c7a7b;
    }
  
    .btn.secondary:hover {
      background-color: #246b6b;
    }
  </style>