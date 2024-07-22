# Workout Planning Web Application - Backend 🔧

## Backend 🛠️

This is the backend for the Workout Planning Web Application built using Node.js, Express, and MongoDB.

## Frontend 🏠

The frontend for this project can be found at
[github.com/galaxiaX/frontend-workout-planning](https://github.com/galaxiaX/frontend-workout-planning)
It was built with Next.js, TypeScript, and Tailwind CSS.

### Getting Started 💻

To get started with the project, follow these steps:

1.Clone the repository:

```bash
git clone https://github.com/galaxiaX/backend-workout-planning.git
cd backend-workout-planning
```

2.Install dependencies:

```bash
npm install
```

3.Set up environment variables: Copy the provided .env.example file to
.env.local and update it with your configuration.

```bash
cp .env.example .env.local
```

Update the following variables in `.env`

```env
PORT=8000
BASE_URL=http://localhost:3000
DATABASE_URL=mongodb+srv://<user>:<password>@<endpoint>/?retryWrites=true&w=majority
OPENAI_API_KEY=YOUR_OPENAI_API_KEY
JWT_SECRET=YOUR_JWT_SECRET
```

4.Run the development server:

```bash
npm run dev
```

This will start the development server at `http://localhost:8000`.

### Available Scripts 📜

- `npm run dev` : Runs the application in development mode.
- `npm run start` : Starts the application in production mode.

### Project Structure 📂

- `src/` : Contains the source code.
- `controllers/` : Contains the route controllers.
- `models/` : Contains the Mongoose models.
- `routes/` : Contains the route definitions.
- `middlewares/` : Contains middleware functions.
- `utils/` : Contains utility functions.

### Contributing 🤝

Feel free to open issues or submit pull requests. For major changes, please open
an issue first to discuss what you would like to change.
