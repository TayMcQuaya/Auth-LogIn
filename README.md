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

## Need Help?
- Check [Next-Auth Documentation](https://next-auth.js.org)
- Create an issue in this repository
- Email: your-support-email@example.com

## Security Notes
- Always use HTTPS in production
- Keep your credentials secure
- Never commit .env files
- Update dependencies regularly 