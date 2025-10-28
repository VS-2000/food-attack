import React from 'react';


export default function SearchBar({ value, setValue }) {
  return (
    <div className="w-full md:w-1/2">
      <input
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Search food..."
        className="w-full rounded border px-4 py-2 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-300"
      />
    </div>
  );
}
