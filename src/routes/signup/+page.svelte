<script lang="ts">
    let signupData = {
        email: '',
        username: '',
        mobileNumber: '',
        password: '',
        confirmPassword: ''
    };

    async function handleSignUp(e: Event) {
        e.preventDefault();

        // Validate required fields
        if (!signupData.email || !signupData.username || !signupData.mobileNumber || !signupData.password || !signupData.confirmPassword) {
            alert("All fields are required!");
            return;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(signupData.email)) {
            alert("Please enter a valid email address!");
            return;
        }

        // Validate mobile number format (basic validation)
        const mobileRegex = /^[0-9]{10,15}$/;
        if (!mobileRegex.test(signupData.mobileNumber)) {
            alert("Please enter a valid mobile number (10-15 digits)!");
            return;
        }

        // Validate passwords match
        if (signupData.password !== signupData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        // Validate password strength (at least 8 characters, 1 uppercase, 1 number)
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (!passwordRegex.test(signupData.password)) {
            alert("Password must be at least 8 characters long, include at least one uppercase letter and one number!");
            return;
        }

        try {
            const response = await fetch("/api", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    action: "signup",
                    email: signupData.email,
                    username: signupData.username,
                    mobile: signupData.mobileNumber,
                    password: signupData.password,
                }),
            });

            const result = await response.json();

            if (response.ok) {
                alert("Sign Up Successful!");
                window.location.href = "/signin"; // Redirect to Sign In page
            } else {
                alert(result.error || "Sign Up Failed!");
            }
        } catch (error) {
            console.error("Error during sign up:", error);
            alert("An error occurred. Please try again.");
        }
    }
</script>
  
  <svelte:head>
    <title>Sign Up</title>
  </svelte:head>
  
  <div class="auth-container">
    <div class="logo-side">
      <div class="logo">
        <img src="/Library-logo.png" alt="SMART Library Logo" class="logo-image" />
      </div>
    </div>
  
    <div class="form-side">
      <div class="auth-card">
        <h1>SIGN UP</h1>
        <p>Create your account to access the SMART Library.</p>
  
        <div class="tab-toggle">
          <button class="tab-btn active">Sign Up</button>
          <a href="/signin" class="tab-btn">Sign In</a>
        </div>
  
        <form on:submit={handleSignUp}>
          <div class="input-group">
            <span class="input-icon">✉️</span>
            <input
              type="email"
              placeholder="Email"
              bind:value={signupData.email}
              required
            />
          </div>
  
          <div class="input-group">
            <span class="input-icon">👤</span>
            <input
              type="text"
              placeholder="Username"
              bind:value={signupData.username}
              required
            />
          </div>
  
          <div class="input-group">
            <span class="input-icon">📱</span>
            <input
              type="tel"
              placeholder="Mobile Number"
              bind:value={signupData.mobileNumber}
              required
            />
          </div>
  
          <div class="input-group">
            <span class="input-icon">🔒</span>
            <input
              type="password"
              placeholder="Password"
              bind:value={signupData.password}
              required
            />
          </div>
  
          <div class="input-group">
            <span class="input-icon">🔒</span>
            <input
              type="password"
              placeholder="Confirm Password"
              bind:value={signupData.confirmPassword}
              required
            />
          </div>
  
          <button type="submit" class="submit-btn">Sign Up</button>
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
      background-color: #2c7a7b;
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
      border-color: #2c7a7b;
    }
  
    /* Submit button */
    .submit-btn {
      width: 100%;
      padding: 12px;
      background-color: #6c5ce7;
      color: white;
      border: none;
      border-radius: 4px;
      font-size: 16px;
      cursor: pointer;
      margin-top: 10px;
      transition: background-color 0.3s;
    }
  
    .submit-btn:hover {
      background-color: #5b4bc4;
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