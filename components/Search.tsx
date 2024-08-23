import React, { useState } from 'react';

interface Item {
  id: number;
  name: string;
}

interface Props {
  items: Item[];
}

const Search: React.FC<Props> = ({ items }) => {
  const [query, setQuery] = useState('');

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search..."
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
      />
      <ul className="divide-y divide-gray-200">
        {filteredItems.map(item => (
          <li key={item.id} className="py-2 text-gray-800">
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
