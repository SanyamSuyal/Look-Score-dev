# AI-Powered Rating Website

A modern, responsive web application that allows users to upload photos of themselves and receive AI-generated ratings, feedback, and insights.

## Features

- **AI Photo Analysis**: Upload your photo and get an instant rating out of 100
- **Personalized Insights**: View strengths and areas for improvement based on AI analysis
- **Leaderboard**: See how your rating compares to other users
- **User Profiles**: Track your rating history and manage your account

## Tech Stack

- **Frontend**: Next.js with App Router, React, TypeScript
- **Styling**: Tailwind CSS with custom theming
- **Animations**: Framer Motion for smooth UI transitions
- **Image Handling**: React Dropzone for easy file uploads
- **UI Components**: Custom components with dark theme and neon accents

## Getting Started

### Prerequisites

- Node.js 16.8.0 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ai-rating-website.git
   cd ai-rating-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
ai-rating-website/
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── api/              # API routes
│   │   ├── analysis/         # AI Analysis page
│   │   ├── leaderboard/      # Leaderboard page
│   │   ├── profile/          # User profile page
│   │   ├── layout.tsx        # Root layout
│   │   └── page.tsx          # Home page
│   ├── components/           # Reusable components
│   ├── styles/               # Global styles
│   ├── lib/                  # Library code
│   └── utils/                # Utility functions
├── public/                   # Static assets
└── ...config files
```

## Future Enhancements

- Implement real AI analysis using Face++ / DeepFace / OpenAI Vision API
- Add authentication system
- Develop mobile app versions
- Add social sharing capabilities
- Implement user feedback and rating history

## License

MIT 