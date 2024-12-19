'use client'

import { useState, useEffect } from 'react'

interface Suggestion {
  category: string
  items: string[]
}

export default function SuggestionDisplay() {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([])

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const response = await fetch('/api/fashion-suggestions')
        if (response.ok) {
          const data = await response.json()
          setSuggestions(data)
        }
      } catch (error) {
        console.error('Error fetching suggestions:', error)
      }
    }

    fetchSuggestions()
  }, [])

  if (suggestions.length === 0) {
    return null
  }

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Your Fashion Suggestions</h2>
      {suggestions.map((suggestion, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-xl font-semibold mb-2">{suggestion.category}</h3>
          <ul className="list-disc list-inside">
            {suggestion.items.map((item, itemIndex) => (
              <li key={itemIndex}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

