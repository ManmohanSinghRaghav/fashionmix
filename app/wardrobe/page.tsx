'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Plus, X } from 'lucide-react'

const categories = ['Tops', 'Bottoms', 'Shoes', 'Accessories']

export default function Wardrobe() {
  const [activeCategory, setActiveCategory] = useState('Tops')
  const [isAddingItem, setIsAddingItem] = useState(false)

  const handleAddItem = () => {
    setIsAddingItem(true)
    // In a real app, this would open a form or camera to add a new item
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">My Wardrobe</h1>
      <div className="flex space-x-2 mb-4 overflow-x-auto">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              activeCategory === category
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="aspect-square bg-gray-200 rounded-lg overflow-hidden relative">
            <Image
              src="/placeholder.svg"
              alt={`${activeCategory} item ${i + 1}`}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
        <button
          className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center"
          onClick={handleAddItem}
        >
          <Plus className="h-8 w-8 text-gray-400" />
        </button>
      </div>
      {isAddingItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-2">Add New Item</h2>
            <p>This is where you'd add UI for uploading or capturing a new item.</p>
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => setIsAddingItem(false)}
            >
              <X className="inline-block mr-2" />
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

