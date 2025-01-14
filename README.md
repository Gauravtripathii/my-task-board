# My Task Board

**My Task Board** is a full-stack task management application developed as part of a challenge from [devchallenges.io](https://devchallenges.io). The application allows users to manage tasks by performing fundamental HTTP operations such as GET, POST, PUT, and DELETE. It provides a simple yet efficient interface for organizing and updating tasks, with changes saved automatically.

## Features
- **Task Management**: Add, edit, delete, and retrieve tasks.
- **User Authentication**: Secure login system to ensure personalized task boards.
- **Real-time Updates**: The board is updated immediately as changes are made.
- **Accessible**: Task boards are available to users after logging in.

## Tech Stack
### Frontend
- **Next.js**: For server-side rendering and efficient frontend development.
- **Tailwind CSS**: For styling and responsive design.
- **Material UI (Icons)**: For modern and consistent icons.
- **react-hot-toast**: For displaying notifications and alerts.

### Backend
- **Node.js**: As the runtime environment.
- **MongoDB**: For storing task and user data.
- **Mongoose**: For object data modeling (ODM).
- **jsonwebtoken**: For secure authentication.
- **bcryptjs**: For hashing passwords.

## Installation
### Prerequisites
- Node.js and npm/yarn installed on your system.
- MongoDB URI for database connection.

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/Gauravtripathii/my-task-board
   cd my-task-board
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and configure the following variables:
   ```env
   MONGO_URI=your_mongodb_connection_uri
   JWT_SECRET=your_jwt_secret
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000`.

## Usage
1. Register a new account or log in with an existing one.
2. Create tasks by entering the task details and clicking on the "Add Task" button.
3. Edit or delete tasks as needed.
4. Log out when finished.

## Dependencies
- `next`
- `react`
- `react-dom`
- `tailwindcss`
- `@mui/icons-material`
- `react-hot-toast`
- `mongoose`
- `jsonwebtoken`
- `bcryptjs`

## Acknowledgments
- [devchallenges.io](https://devchallenges.io) for providing the challenge inspiration.

---

