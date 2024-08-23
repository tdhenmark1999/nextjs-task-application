import React, { useState } from 'react';
import { Todo } from '../models/todo';

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');
  const [editingTodo, setEditingTodo] = useState<number | null>(null);
  const [editedTitle, setEditedTitle] = useState('');
  const [filter, setFilter] = useState<'all' | 'completed' | 'incomplete'>('all');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([
        ...todos,
        { id: todos.length + 1, title: newTodo, completed: false },
      ]);
      setNewTodo('');
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const startEditing = (id: number, title: string) => {
    setEditingTodo(id);
    setEditedTitle(title);
  };

  const saveEdit = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, title: editedTitle } : todo
      )
    );
    setEditingTodo(null);
    setEditedTitle('');
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'incomplete') return !todo.completed;
    return true;
  });

  return (
    <div className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Todo List</h2>
      <div className="mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
        />
        <button
          onClick={addTodo}
          className="mt-2 w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-600 transition"
        >
          Add Task
        </button>
      </div>

      <div className="mb-4">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value as 'all' | 'completed' | 'incomplete')}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>

      <ul className="space-y-2">
        {filteredTodos.map((todo) => (
          <li
            key={todo.id}
            className={`flex justify-between items-center p-2 rounded-md ${
              todo.completed ? 'bg-green-100' : 'bg-gray-100'
            }`}
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className="mr-2"
              />
              {editingTodo === todo.id ? (
                <input
                  type="text"
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                  className="flex-grow px-2 py-1 border rounded-md text-gray-800"
                />
              ) : (
                <span
                  className={`flex-grow cursor-pointer text-gray-800 ${
                    todo.completed ? 'line-through' : ''
                  }`}
                >
                  {todo.title}
                </span>
              )}
            </div>
            {editingTodo === todo.id ? (
              <button
                onClick={() => saveEdit(todo.id)}
                className="text-blue-600 hover:text-blue-800 ml-2"
              >
                Save
              </button>
            ) : (
              <>
                <div>
                    <button
                        onClick={() => startEditing(todo.id, todo.title)}
                        className="text-yellow-600 hover:text-yellow-800 ml-2"
                    >
                    Edit
                    </button>
                    <button
                        onClick={() => deleteTodo(todo.id)}
                        className="text-red-600 hover:text-red-800 ml-2"
                    >
                    Delete
                    </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
