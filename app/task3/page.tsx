'use client';

import React from 'react';
import Navbar from '../../components/Navbar';
import TodoList from '../../components/TodoList';

const Task3: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl text-gray-800 font-bold mb-6 text-center">Task 3: Open-Ended Challenge - Todo List</h1>
        <TodoList />
      </div>
    </div>
  );
};

export default Task3;
