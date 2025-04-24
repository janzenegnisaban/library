<script lang="ts">
    let email = '';
    let password = '';
  
    async function handleSignIn(e: Event) {
      e.preventDefault();
  
      // Validate required fields
      if (!email || !password) {
        alert("Email and password are required!");
        return;
      }
  
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address!");
        return;
      }
  
      try {
        const response = await fetch("/api", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            action: "login",
            email,
            password,
          }),
        });
  
        const result = await response.json();
  
        if (response.ok) {
          alert("Sign In Successful!");
          console.log("User Data:", result.user); // Log user data for debugging
          localStorage.setItem("user", JSON.stringify(result.user)); // Save user data locally
          window.location.href = "/dashboard"; // Redirect to dashboard or another page
        } else {
          alert(result.error || "Sign In Failed!");
        }
      } catch (error) {
        console.error("Error during sign in:", error);
        alert("An error occurred. Please try again.");
      }
    }
  </script>
  
  <svelte:head>
    <title>Sign In</title>
  </svelte:head>
  
  <div class="auth-container">
    <div class="logo-side">
      <div class="logo">
        <img src="/Library-logo.png" alt="SMART Library Logo" class="logo-image" />
      </div>
    </div>
    
    <div class="form-side">
      <div class="auth-card">
        <h1>SIGN IN</h1>
        <p>Description.</p>
        
        <div class="tab-toggle">
          <a href="/signup" class="tab-btn">Sign Up</a>
          <button class="tab-btn active">Sign In</button>
        </div>
        
        <form on:submit={handleSignIn}>
          <div class="input-group">
            <span class="input-icon">✉️</span>
            <input 
              type="email" 
              placeholder="Email" 
              bind:value={email} 
              required
            />
          </div>
          
          <div class="input-group">
            <span class="input-icon">🔒</span>
            <input 
              type="password" 
              placeholder="Password" 
              bind:value={password} 
              required
            />
          </div>
          
          <div class="forgot-password">
            <a href="/reset-password">Forgot password?</a>
          </div>
          
          <button type="submit" class="submit-btn">Sign In</button>
        </form>
      </div>
    </div>
  </div>
  
  <style>
    /* Main container */
    .auth-container {
      display: flex;
      min-height: 100vh;
      background-color: #f5f0e5;
      font-family: 'Arial', sans-serif;
    }
    
    /* Logo side */
    .logo-side {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
    }
    
    .logo {
      width: 100%;
      max-width: 400px;
      height: auto;
      display: flex;
      justify-content: center;
    }
    
    .logo-image {
      width: 100%;
      height: auto;
    }
    
    /* Form side */
    .form-side {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
    }
    
    .auth-card {
      background-color: white;
      border-radius: 16px;
      padding: 40px;
      width: 100%;
      max-width: 400px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
    
    h1 {
      margin: 0;
      font-size: 24px;
      font-weight: bold;
      text-align: center;
    }
    
    p {
      margin: 8px 0 20px;
      color: #666;
      text-align: center;
    }
    
    /* Tab toggle */
    .tab-toggle {
      display: flex;
      margin-bottom: 20px;
      border-radius: 30px;
      overflow: hidden;
      border: 1px solid #eee;
    }
    
    .tab-btn {
      flex: 1;
      padding: 10px;
      border: none;
      background: none;
      cursor: pointer;
      transition: background-color 0.3s;
      font-size: 14px;
      text-align: center;
      text-decoration: none;
      color: #333;
    }
    
    .tab-btn.active {
      background-color: #6c5ce7;
      color: white;
    }
    
    /* Form inputs */
    .input-group {
      position: relative;
      margin-bottom: 16px;
    }
    
    .input-icon {
      position: absolute;
      left: 12px;
      top: 50%;
      transform: translateY(-50%);
      color: #999;
    }
    
    input {
      width: 100%;
      padding: 12px 12px 12px 40px;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 14px;
      transition: border-color 0.3s;
    }
    
    input:focus {
      outline: none;
      border-color: #6c5ce7;
    }
    
    /* Forgot password */
    .forgot-password {
      text-align: right;
      margin-bottom: 20px;
    }
    
    .forgot-password a {
      color: #2c7a7b;
      text-decoration: none;
      font-size: 14px;
    }
    
    .forgot-password a:hover {
      text-decoration: underline;
    }
    
    /* Submit button */
    .submit-btn {
      width: 100%;
      padding: 12px;
      background-color: #2c7a7b;
      color: white;
      border: none;
      border-radius: 4px;
      font-size: 16px;
      cursor: pointer;
      margin-top: 10px;
      transition: background-color 0.3s;
    }
    
    .submit-btn:hover {
      background-color: #246b6b;
    }
    
    /* Responsive design */
    @media (max-width: 768px) {
      .auth-container {
        flex-direction: column;
      }
      
      .logo-side {
        padding: 20px 20px 0;
      }
      
      .form-side {
        padding: 0 20px 20px;
      }
    }
  </style>