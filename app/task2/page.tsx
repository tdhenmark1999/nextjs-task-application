'use client';

import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Gallery from '../../components/Gallery';
import { Photo } from '../../models/photo';

const Task2: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      const res = await fetch('/photos.json');
      const data = await res.json();
      setPhotos(data);
    };

    fetchPhotos();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl text-gray-800 font-bold mb-6 text-center">Task 2: Image Optimization and Lazy Loading</h1>
        <Gallery photos={photos} />
      </div>
    </div>
  );
};

export default Task2;
