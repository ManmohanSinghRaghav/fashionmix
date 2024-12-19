import Image from 'next/image'

const occasions = [
  { name: 'Casual Day Out', image: '/placeholder.svg' },
  { name: 'Business Meeting', image: '/placeholder.svg' },
  { name: 'Formal Event', image: '/placeholder.svg' },
  { name: 'Date Night', image: '/placeholder.svg' },
  { name: 'Workout', image: '/placeholder.svg' },
  { name: 'Beach Day', image: '/placeholder.svg' },
]

export default function Occasions() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Occasion-Based Suggestions</h1>
      <div className="grid grid-cols-2 gap-4">
        {occasions.map((occasion) => (
          <div key={occasion.name} className="bg-white rounded-lg shadow overflow-hidden">
            <div className="aspect-square relative">
              <Image
                src={occasion.image}
                alt={occasion.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-2">
              <h3 className="text-sm font-medium text-center">{occasion.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

