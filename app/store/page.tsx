'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Search, Filter } from 'lucide-react'

const dummyProducts = [
  { id: 1, name: 'Floral Summer Dress', price: 59.99, image: '/placeholder.svg' },
  { id: 2, name: 'Denim Jacket', price: 79.99, image: '/placeholder.svg' },
  { id: 3, name: 'White Sneakers', price: 49.99, image: '/placeholder.svg' },
  { id: 4, name: 'Black Leather Bag', price: 89.99, image: '/placeholder.svg' },
  { id: 5, name: 'Striped T-Shirt', price: 24.99, image: '/placeholder.svg' },
  { id: 6, name: 'Slim Fit Jeans', price: 69.99, image: '/placeholder.svg' },
]

export default function Store() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProducts = dummyProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Online Store Recommendations</h1>
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search for items..."
          className="w-full pl-10 pr-4 py-2 border rounded-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Search className="absolute left-3 top-2.5 text-gray-400" />
        <button className="absolute right-3 top-2">
          <Filter className="text-gray-400" />
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow overflow-hidden">
            <div className="aspect-square relative">
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-2">
              <h3 className="text-sm font-medium">{product.name}</h3>
              <p className="text-sm text-gray-600">${product.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

