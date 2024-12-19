'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function ImageUpload() {
  const [image, setImage] = useState<File | null>(null)
  const router = useRouter()

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0])
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!image) return

    const formData = new FormData()
    formData.append('image', image)

    try {
      const response = await fetch('/api/fashion-suggestions', {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        router.push('/suggestions')
      } else {
        console.error('Failed to get suggestions')
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
      />
      <button
        type="submit"
        disabled={!image}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
      >
        Get Suggestions
      </button>
    </form>
  )
}

