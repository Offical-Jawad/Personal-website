# Portfolio Backend Setup Guide

This backend service handles email submissions from your portfolio forms using Gmail.

## Prerequisites

1. **Node.js** installed (v16 or higher)
2. **Gmail Account** with 2-Step Verification enabled
3. **Google App Password** generated

## Step 1: Generate Google App Password

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable 2-Step Verification if you haven't already
3. Navigate to "App passwords" (only appears if 2FA is enabled)
4. Select "Mail" and "Windows Computer" (or your device)
5. Google will generate a 16-character password
6. Copy this password

## Step 2: Configure Environment Variables

1. In the `backend` folder, create a `.env` file (copy from `.env.example`)
2. Fill in your credentials:

```env
GMAIL_USER=your-email@gmail.com
GMAIL_PASSWORD=your-16-character-app-password
PORT=5000
FRONTEND_URL=http://localhost:5173
```

⚠️ **Important**: Never commit `.env` to Git. It's already in `.gitignore`.

## Step 3: Install Dependencies

```bash
cd backend
npm install
```

## Step 4: Start the Backend Server

```bash
npm start
```

Or for development with auto-reload:

```bash
npm run dev
```

You should see:

```
Backend server running on http://localhost:5000
```

## Step 5: Test the Server

Open your browser and visit:

```
http://localhost:5000/api/health
```

You should see:

```json
{
  "status": "Backend server is running"
}
```

## API Endpoints

### 1. Contact Form

**POST** `/api/contact`

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Inquiry",
  "message": "Your message here"
}
```

### 2. Let's Talk (Project Inquiry)

**POST** `/api/lets-talk`

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+92 300 1234567",
  "subject": "Website Development",
  "message": "Your message here"
}
```

### 3. Email Me

**POST** `/api/email-me`

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "Your message here"
}
```

## Troubleshooting

### CORS Error

If you see CORS errors, make sure:

- Backend is running on `http://localhost:5000`
- Frontend is running on `http://localhost:5173`
- Both match the `FRONTEND_URL` in `.env`

### Email Not Sending

1. Verify Gmail credentials in `.env`
2. Check that Google App Password is correct (not your regular Gmail password)
3. Ensure 2-Step Verification is enabled on your Google Account
4. Check backend console for error messages

### Port Already in Use

If port 5000 is already in use, change it in `.env`:

```env
PORT=5001
```

Then update the frontend API URL in React components.

## Production Deployment

When deploying to production:

1. **Set environment variables** on your hosting platform (Heroku, Vercel, etc.)
2. **Update FRONTEND_URL** to match your deployed frontend
3. **Use a strong Gmail app password**
4. **Enable HTTPS** on your production domain
5. Consider using environment-specific configurations

## Security Notes

- Never expose `.env` file
- Use environment variables for sensitive data
- Validate all inputs on the backend
- Implement rate limiting for production
- Consider adding reCAPTCHA for additional protection
