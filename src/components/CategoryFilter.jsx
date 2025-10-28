import React from 'react'


export default function CategoryFilter({ categories, active, setActive }) {
    return (
        <div className="flex gap-2 flex-wrap">
            <button onClick={() => setActive('All')} className={`px-3 py-1 rounded ${active === 'All' ? 'bg-indigo-600 text-white' : 'bg-white dark:bg-gray-700'}`}>All</button>
            {categories.map(cat => (
                <button key={cat} onClick={() => setActive(cat)} className={`px-3 py-1 rounded ${active === cat ? 'bg-indigo-600 text-white' : 'bg-white dark:bg-gray-700'}`}>{cat}</button>
            ))}
        </div>
    )
}