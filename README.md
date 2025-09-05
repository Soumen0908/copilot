# CodeMentor Copilot

CodeMentor Copilot is a comprehensive coding assistant platform that helps developers with code generation, debugging assistance, and interview preparation.

## Features

- **User Authentication**: Secure registration and login system
- **Code Generation**: AI-powered code generation based on user prompts
- **Debugging Assistance**: Intelligent code analysis and debugging suggestions
- **Interview Simulation**: Practice coding interviews with generated questions and challenges

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)

## Project Structure

```
code_mentor_copilot/
├── backend/
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── codeGenController.js
│   │   ├── debugController.js
│   │   └── interviewController.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── codeGenRoutes.js
│   │   ├── debugRoutes.js
│   │   └── interviewRoutes.js
│   └── server.js
├── .env
└── README.md
```

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login a user

### Code Generation

- `POST /api/code-generation/generate` - Generate code from a prompt
- `GET /api/code-generation/snippets` - Get all user's code snippets
- `GET /api/code-generation/snippets/:id` - Get a specific code snippet
- `DELETE /api/code-generation/snippets/:id` - Delete a code snippet

### Debugging

- `POST /api/debug/analyze` - Analyze code for debugging
- `GET /api/debug/sessions` - Get all user's debugging sessions
- `GET /api/debug/sessions/:id` - Get a specific debugging session
- `DELETE /api/debug/sessions/:id` - Delete a debugging session

### Interview Simulation

- `POST /api/interview/sessions` - Start a new interview session
- `GET /api/interview/sessions` - Get all user's interview sessions
- `GET /api/interview/sessions/:id` - Get a specific interview session
- `POST /api/interview/sessions/:id/submit` - Submit answers for an interview session
- `DELETE /api/interview/sessions/:id` - Delete an interview session

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)

### Installation

1. Clone the repository
   ```
   git clone https://github.com/yourusername/code_mentor_copilot.git
   cd code_mentor_copilot
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/code-mentor
   JWT_SECRET=your_jwt_secret_key
   JWT_EXPIRES_IN=90d
   ```

4. Start the server
   ```
   npm start
   ```

5. The API will be available at `http://localhost:5000`

## Future Enhancements

- Frontend UI with React
- Real AI integration for code generation and debugging
- Code execution environment
- User profile and progress tracking
- Community features and code sharing

## License

MIT