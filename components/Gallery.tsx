import React from 'react';
import Image from 'next/image';
import { Photo } from '../models/photo';

interface Props {
  photos: Photo[];
}

const Gallery: React.FC<Props> = ({ photos }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {photos.map((photo) => (
        <div key={photo.id} className="relative">
          <Image
            src={photo.url}
            alt={photo.caption}
            width={500}
            height={500}
            layout="responsive"
            objectFit="cover"
            loading="lazy"
            className="rounded-md shadow-md"
          />
          <p className="text-center mt-2">{photo.caption}</p>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
