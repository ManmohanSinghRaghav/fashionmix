import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const formData = await request.formData()
  const image = formData.get('image')

  if (!image) {
    return NextResponse.json({ error: 'No image provided' }, { status: 400 })
  }

  // In a real application, you would process the image here
  // and generate suggestions based on the image content.
  // For this example, we'll return mock suggestions.

  const mockSuggestions = [
    {
      category: 'Tops',
      items: ['White cotton t-shirt', 'Blue denim jacket', 'Black leather jacket'],
    },
    {
      category: 'Bottoms',
      items: ['Dark wash jeans', 'Khaki chinos', 'Black leather skirt'],
    },
    {
      category: 'Shoes',
      items: ['White sneakers', 'Brown leather boots', 'Black pumps'],
    },
    {
      category: 'Accessories',
      items: ['Silver watch', 'Leather belt', 'Sunglasses'],
    },
  ]

  return NextResponse.json(mockSuggestions)
}

export async function GET() {
  // This is just to demonstrate fetching suggestions.
  // In a real app, you'd probably store the suggestions in a database or state management solution.
  const mockSuggestions = [
    {
      category: 'Tops',
      items: ['White cotton t-shirt', 'Blue denim jacket', 'Black leather jacket'],
    },
    {
      category: 'Bottoms',
      items: ['Dark wash jeans', 'Khaki chinos', 'Black leather skirt'],
    },
    {
      category: 'Shoes',
      items: ['White sneakers', 'Brown leather boots', 'Black pumps'],
    },
    {
      category: 'Accessories',
      items: ['Silver watch', 'Leather belt', 'Sunglasses'],
    },
  ]

  return NextResponse.json(mockSuggestions)
}

