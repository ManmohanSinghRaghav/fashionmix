import Image from 'next/image'
import { Settings, Heart, Edit } from 'lucide-react'

const stylePreferences = ['Casual', 'Bohemian', 'Minimalist', 'Vintage', 'Sporty', 'Elegant']

export default function Profile() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">My Profile</h1>
        <Settings className="h-6 w-6 text-gray-500" />
      </div>
      <div className="flex items-center mb-6">
        <div className="w-20 h-20 rounded-full overflow-hidden mr-4">
          <Image
            src="/placeholder.svg"
            alt="Profile picture"
            width={80}
            height={80}
          />
        </div>
        <div>
          <h2 className="text-xl font-semibold">Jane Doe</h2>
          <p className="text-sm text-gray-600">Fashion Enthusiast</p>
        </div>
      </div>
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold">Style Preferences</h3>
          <button className="text-blue-500">
            <Edit className="h-4 w-4" />
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {stylePreferences.map((style) => (
            <span key={style} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
              {style}
            </span>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Favorite Outfits</h3>
        <div className="grid grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="aspect-square bg-gray-200 rounded-lg overflow-hidden relative">
              <Image
                src="/placeholder.svg"
                alt={`Favorite outfit ${i + 1}`}
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute top-1 right-1">
                <Heart className="h-4 w-4 text-red-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

