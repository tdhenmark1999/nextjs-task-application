'use client';

import React, { useEffect, useState } from 'react';
import Search from '../components/Search';
import Navbar from '../components/Navbar';

interface Item {
  id: number;
  name: string;
}

const Home: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/data.json');
      const data = await res.json();
      setItems(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl text-gray-800 font-bold mb-6 text-center">Task 1: Real-Time Search</h1>
        <Search items={items} />
      </div>
    </div>
  );
};

export default Home;
