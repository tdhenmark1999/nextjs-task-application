## Installation

Before running the application, ensure you have Node.js installed. Then, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/nextjs-task-application.git
   cd nextjs-task-application
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

## Running the Application

To run the application in development mode, use the following command:

```bash
npm run dev
```

This will start the development server, and you can access the application at `http://localhost:3000` in your web browser.

## Tasks Overview

### Task 1: Real-Time Search

**Location:** `http://localhost:3000`

This task implements a real-time search feature using a static JSON file to mock the dataset. As you type in the search box, the list of items filters dynamically based on the search query.

**Features:**
- Real-time filtering of items based on input.
- Simple and responsive design with Tailwind CSS.

### Task 2: Image Optimization and Lazy Loading

**Location:** `http://localhost:3000/task2`

This task demonstrates image optimization and lazy loading techniques in a photo gallery. The gallery loads images from a mock JSON file and displays them efficiently using Next.js's `Image` component.

**Features:**
- Images are optimized and lazy-loaded for performance.
- Responsive grid layout for different screen sizes.

### Task 3: To-Do List with Editing and Filtering

**Location:** `http://localhost:3000/task3`

This task presents a dynamic to-do list with the ability to add, edit, delete, and mark tasks as complete. Additionally, users can filter tasks to show all, only completed, or only incomplete tasks.

**Features:**
- Add, edit, and delete tasks.
- Mark tasks as complete or incomplete using a checkbox.
- Filter tasks based on their completion status.

## Navigation

The application includes a global navigation bar that appears on every page. You can easily navigate between the tasks using the links provided in the navbar:

- **Task 1:** Accessible from the home page (`/`).
- **Task 2:** Accessible from `/task2`.
- **Task 3:** Accessible from `/task3`.

Each task page is designed to showcase specific features, and the global navigation ensures easy access between them.
```