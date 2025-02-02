# AI Career Catalyst

AI Career Catalyst is a Next.js project designed to help users navigate their career paths in the AI field. This README provides instructions for setting up the backend using Neon.tech for the database, Clerk for authentication, Inngest for event-driven workflows, and Gemini API for AI-powered functionalities.

## 🔥 Project Features

1.Career Guidance in AI: Personalized recommendations for career growth in AI.

2.AI Resume & Cover Letter Generator: Automatically generate professional AI-optimized resumes and cover letters.

3.AI Chatbot: Interactive AI-powered chatbot for career-related queries and guidance.

4.AI Industrial Insights: Regularly updated industry insights and trends using AI analysis.

5.AI Mock Interviews: AI-powered mock interview sessions to prepare users for real-world job interviews.

6. Neon.tech Integration: Efficient database management with a cloud-based PostgreSQL database.

7. Clerk Authentication: Secure user authentication and onboarding process.

8. Inngest Event Handling: Asynchronous event-driven workflows for efficient task management.

9. Gemini AI Integration: AI-powered insights and recommendations using the Gemini API.
    
## 🚀 Getting Started

### Prerequisites
Before you begin, ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (version 14 or later)
- npm or yarn
- A [Neon.tech](https://neon.tech/) account
- A [Clerk](https://clerk.com/) account
- An [Inngest](https://www.inngest.com/) account
- A Gemini API key

### Installation and Setup

#### 1️⃣ Clone the Repository
Clone the repository to your local machine:

```bash
git clone https://github.com/PriyabrataBehera-24/AIcareercatalyst.git
cd AIcareercatalyst
```

#### 2️⃣ Install Dependencies
Install the required dependencies using npm or yarn:

```bash
npm install
# or
yarn install
```

#### 3️⃣ Set Up the Database (Neon.tech)
- Sign in to your [Neon.tech](https://neon.tech/) account and create a new database.
- Copy the database connection string provided by Neon.tech.
- Create a `.env.local` file in the root of your project and add:

```env
DATABASE_URL=your_neon_database_connection_string
```

#### 4️⃣ Set Up Authentication (Clerk)
- Sign in to your [Clerk](https://clerk.com/) account and create a new application.
- Obtain your API keys and frontend API from the Clerk dashboard.
- Add the following variables to your `.env.local` file:

```env
NEXT_PUBLIC_CLERK_FRONTEND_API=your_clerk_frontend_api
NEXT_PUBLIC_CLERK_API_KEY=your_clerk_api_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding
```

#### 5️⃣ Set Up AI Capabilities (Gemini API)
- Obtain your Gemini API key from the Gemini platform.
- Add the API key to your `.env.local` file:

```env
GEMINI_API_KEY=your_gemini_api_key
```

### Enviroment variable
Create a .env.local file in the root of your project and add the following:

DATABASE_URL=
GEMINI_API_KEY=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up 
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding


### 🔧 Running the Development Server
Once you have completed the setup, you can start the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## 📚 Learn More
To learn more about the technologies used in this project, check out the following resources:
- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Neon.tech Documentation](https://neon.tech/docs) - Set up and manage a cloud database.
- [Clerk Documentation](https://clerk.dev/docs) - Implement authentication in your application.
- [Inngest Documentation](https://www.inngest.com/docs) - Work with event-driven workflows.
- [Gemini API](https://developers.google.com/ai/gemini) - Integrate AI-powered capabilities.

## 🚀 Deployment on Vercel
For production deployment, Vercel is the recommended platform.
- Follow the [Next.js deployment guide](https://nextjs.org/docs/deployment) to deploy your application.
- You can deploy directly using the Vercel CLI:

```bash
npm install -g vercel
vercel
```

## 📜 License
This project is licensed under the MIT License.

## 🔗 Repository
[GitHub Repository](https://github.com/PriyabrataBehera-24/AIcareercatalyst)

---

Happy coding! 🚀

