import React from 'react'
import { useCart } from '../contexts/CartContext'


export default function ProductCard({ product }) {
    const { addToCart } = useCart()
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden flex flex-col">
            <img src={product.img} alt={product.title} className="w-full h-44 object-cover" />
            <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-semibold text-lg">{product.title}</h3>
                <p className="text-sm mt-1 flex-1">{product.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                    <div className="font-bold">${product.price.toFixed(2)}</div>
                    <button onClick={() => addToCart(product)} className="px-3 py-1 bg-indigo-600 text-white rounded">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}