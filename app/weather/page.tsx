'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Sun, Cloud, CloudRain, Thermometer } from 'lucide-react'

const weatherIcons = {
  sunny: Sun,
  cloudy: Cloud,
  rainy: CloudRain,
}

const outfitSuggestions = {
  sunny: [
    { type: 'Top', name: 'Light Cotton T-Shirt', image: '/placeholder.svg' },
    { type: 'Bottom', name: 'Khaki Shorts', image: '/placeholder.svg' },
    { type: 'Shoes', name: 'Comfortable Sandals', image: '/placeholder.svg' },
    { type: 'Accessory', name: 'Sunglasses', image: '/placeholder.svg' },
  ],
  cloudy: [
    { type: 'Top', name: 'Light Sweater', image: '/placeholder.svg' },
    { type: 'Bottom', name: 'Jeans', image: '/placeholder.svg' },
    { type: 'Shoes', name: 'Sneakers', image: '/placeholder.svg' },
    { type: 'Accessory', name: 'Light Scarf', image: '/placeholder.svg' },
  ],
  rainy: [
    { type: 'Top', name: 'Waterproof Jacket', image: '/placeholder.svg' },
    { type: 'Bottom', name: 'Water-Resistant Pants', image: '/placeholder.svg' },
    { type: 'Shoes', name: 'Waterproof Boots', image: '/placeholder.svg' },
    { type: 'Accessory', name: 'Umbrella', image: '/placeholder.svg' },
  ],
}

export default function Weather() {
  const [weather, setWeather] = useState('sunny')

  const WeatherIcon = weatherIcons[weather as keyof typeof weatherIcons]

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Weather-Based Suggestions</h1>
      <div className="bg-blue-100 rounded-lg p-4 mb-6 flex items-center justify-between">
        <div>
          <p className="text-lg font-semibold">Today's Weather</p>
          <p className="text-sm text-gray-600">New York, NY</p>
          <div className="flex items-center mt-2">
            <Thermometer className="h-5 w-5 text-red-500 mr-1" />
            <span>72°F</span>
          </div>
        </div>
        <WeatherIcon className="h-16 w-16 text-blue-500" />
      </div>
      <h2 className="text-xl font-semibold mb-4">Suggested Outfit</h2>
      <div className="grid grid-cols-2 gap-4">
        {outfitSuggestions[weather as keyof typeof outfitSuggestions].map((item) => (
          <div key={item.type} className="bg-white rounded-lg shadow overflow-hidden">
            <div className="aspect-square relative">
              <Image
                src={item.image}
                alt={item.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-2">
              <h3 className="text-sm font-medium">{item.type}</h3>
              <p className="text-xs text-gray-600">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

