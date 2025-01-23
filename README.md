# Simple Google Login Module

A ready-to-use Google login system that you can add to any website. Built with Next.js and styled with Tailwind CSS.

![Login Preview](preview.png)

## What You Get
- Clean, modern login page
- Secure Google authentication
- User session management
- Protected routes
- Mobile-friendly design

## Quick Start (5 minutes)

### 1. Get Google Credentials
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project
3. Go to "APIs & Services" > "Credentials"
4. Click "Create Credentials" > "OAuth client ID"
5. Add this redirect URI: `http://your-website.com/api/auth/callback/google`
6. Copy your Client ID and Client Secret

### 2. Add to Your Website

#### Option A: For Next.js Projects
1. Copy these folders to your project:
   ```
   app/api/auth/     (handles authentication)
   app/auth/         (login page)
   components/       (session management)
   ```

2. Install required packages:
   ```bash
   npm install next-auth@latest
   ```

3. Add environment variables to `.env.local`:
   ```env
   NEXTAUTH_URL=http://your-website.com
   NEXTAUTH_SECRET=your-random-secret-key
   GOOGLE_ID=your-google-client-id
   GOOGLE_SECRET=your-google-client-secret
   ```

#### Option B: For Any Other Website
1. Create a new Next.js API route in your server:
   ```
   /api/auth/*
   ```

2. Add login button to your HTML:
   ```html
   <a href="/auth/signin" class="login-button">
     Sign in with Google
   </a>
   ```

3. Check login status:
   ```javascript
   // Frontend
   async function checkLogin() {
     const res = await fetch('/api/auth/session');
     const session = await res.json();
     if (session.user) {
       // User is logged in
       console.log(session.user.email);
     }
   }
   ```

### 3. Protect Your Content
```javascript
// Check if user is logged in
const session = await fetch('/api/auth/session').then(r => r.json());
if (!session.user) {
  // Redirect to login
  window.location.href = '/auth/signin';
}
```

## Features You Can Add
- Custom login page design
- Additional OAuth providers (Microsoft, GitHub, etc.)
- User profile pages
- Role-based access control

## Integration Guide for Regular Websites (HTML, PHP, etc.)

### Step 1: Set Up the Authentication Server
1. Create a new folder called `auth-server`
2. Copy these files into it:
   ```
   app/api/auth/     (handles login)
   .env.local        (credentials)
   package.json      (dependencies)
   ```
3. Install Node.js from [nodejs.org](https://nodejs.org)
4. Open terminal in the `auth-server` folder and run:
   ```bash
   npm install
   npm run dev
   ```
   This starts your authentication server on `http://localhost:3000`

### Step 2: Add Login to Your Website
Add this button to your HTML where you want the login to appear:
```html
<!-- Example: Add to your index.html -->
<button onclick="loginWithGoogle()" class="login-button">
  Sign in with Google
</button>

<!-- Add this script to your page -->
<script>
  // Function to handle login
  function loginWithGoogle() {
    window.location.href = 'http://localhost:3000/auth/signin';
  }

  // Function to check if user is logged in
  async function checkLoginStatus() {
    const response = await fetch('http://localhost:3000/api/auth/session');
    const data = await response.json();
    
    if (data.user) {
      // User is logged in
      document.getElementById('user-info').innerHTML = `
        Welcome, ${data.user.email}!
        <button onclick="logout()">Logout</button>
      `;
    } else {
      // User is not logged in
      document.getElementById('user-info').innerHTML = `
        <button onclick="loginWithGoogle()">Login with Google</button>
      `;
    }
  }

  // Function to handle logout
  async function logout() {
    window.location.href = 'http://localhost:3000/api/auth/signout';
  }

  // Check login status when page loads
  checkLoginStatus();
</script>
```

### Step 3: Protect Your Content
Add this to pages that need login:
```html
<div id="protected-content" style="display: none;">
  Your protected content here
</div>

<script>
  // Check if user can view this page
  async function checkAccess() {
    const response = await fetch('http://localhost:3000/api/auth/session');
    const data = await response.json();
    
    if (data.user) {
      // Show content if logged in
      document.getElementById('protected-content').style.display = 'block';
    } else {
      // Redirect to login if not logged in
      window.location.href = 'http://localhost:3000/auth/signin';
    }
  }

  checkAccess();
</script>
```

### Step 4: Going Live
When ready to go live:
1. Deploy the auth-server to a hosting service (like Vercel or Heroku)
2. Update the URLs in your code from `http://localhost:3000` to your live server URL
3. Update Google OAuth credentials with your live server URL

### Example: PHP Website Integration
```php
<?php
// At the top of your protected pages
session_start();

// Function to check if user is logged in
function isLoggedIn() {
    $response = file_get_contents('http://localhost:3000/api/auth/session');
    $data = json_decode($response, true);
    return isset($data['user']);
}

// Protect your page
if (!isLoggedIn()) {
    header('Location: http://localhost:3000/auth/signin');
    exit();
}
?>

<!-- Your protected HTML content -->
<div>
    Welcome to protected page!
</div>
```

## Need Help?
- Create an issue in this repository
- Email: support@example.com

## Security Notes
- Always use HTTPS in production
- Keep your credentials secure
- Never share your .env.local file 