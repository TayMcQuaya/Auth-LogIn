# Google Authentication Template

A modern, ready-to-use authentication template using Google Sign-In. Built with Next.js and Firebase.

![Demo Screenshot](public/screenshot.png)

## 🚀 Quick Start

### Option 1: Use as a Template (Recommended for Beginners)

1. Click "Use this template" on GitHub
2. Clone your new repository
3. Install dependencies:
   ```bash
   npm install
   ```

### Option 2: Add to Existing Project

1. Install required packages:
   ```bash
   npm install firebase
   ```

2. Copy these files to your project:
   - `lib/firebase.ts` - Firebase configuration
   - `app/auth/signin/page.tsx` - Sign-in page
   - `app/page.tsx` - Protected home page

## 🔧 Setup

1. Create a Firebase project:
   - Go to [Firebase Console](https://console.firebase.google.com)
   - Click "Add Project"
   - Follow the setup wizard

2. Enable Google Authentication:
   - In Firebase Console, go to "Authentication" → "Sign-in method"
   - Enable "Google" provider
   - Add your domain to "Authorized domains"

3. Get Firebase Config:
   - In Firebase Console, click ⚙️ (Project Settings)
   - Under "Your apps", click web icon (</>)
   - Register app and copy the config

4. Add Environment Variables:
   Create `.env.local` with your Firebase config:
   ```
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   ```

## 🔒 Using Authentication in Your Code

### React/Next.js Projects

1. Check if user is logged in:
   ```typescript
   import { auth } from '../lib/firebase'
   
   // In your component
   const [user, setUser] = useState(null)
   
   useEffect(() => {
     auth.onAuthStateChanged((user) => {
       setUser(user)
     })
   }, [])
   ```

2. Sign in user:
   ```typescript
   import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
   import { auth } from '../lib/firebase'
   
   const signIn = async () => {
     const provider = new GoogleAuthProvider()
     await signInWithPopup(auth, provider)
   }
   ```

3. Sign out user:
   ```typescript
   import { signOut } from 'firebase/auth'
   import { auth } from '../lib/firebase'
   
   const signOut = async () => {
     await signOut(auth)
   }
   ```

### Non-React Projects

1. Add Firebase to your HTML:
   ```html
   <script src="https://www.gstatic.com/firebasejs/10.x.x/firebase-app.js"></script>
   <script src="https://www.gstatic.com/firebasejs/10.x.x/firebase-auth.js"></script>
   ```

2. Initialize Firebase:
   ```html
   <script>
   const firebaseConfig = {
     // Your Firebase config
   }
   firebase.initializeApp(firebaseConfig)
   </script>
   ```

3. Add Sign-in Button:
   ```html
   <button onclick="signIn()">Sign in with Google</button>
   
   <script>
   function signIn() {
     const provider = new firebase.auth.GoogleAuthProvider()
     firebase.auth().signInWithPopup(provider)
   }
   </script>
   ```

## 📱 Features

- 🔐 Secure Google Authentication
- 🎨 Modern UI with Tailwind CSS
- 📱 Responsive Design
- ⚡ Fast Page Loads
- 🔄 Automatic Redirects
- 👤 User Profile Display

## 🤝 Need Help?

1. Check [Firebase Authentication Docs](https://firebase.google.com/docs/auth)
2. Open an issue in this repository
3. Join [Firebase Community](https://firebase.google.com/community)

## 📄 License

MIT License - feel free to use in your projects! 