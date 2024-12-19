'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Camera, Upload, Sparkles } from 'lucide-react'

export default function Home() {
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const handleUpload = () => {
    setIsAnalyzing(true)
    // Simulating AI analysis
    setTimeout(() => {
      setIsAnalyzing(false)
    }, 3000)
  }

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-2xl font-bold mb-6">Snap & Suggest</h1>
      <div className="relative w-64 h-64 bg-gray-200 rounded-full overflow-hidden mb-6">
        <Image
          src="/placeholder.svg"
          alt="Upload your photo"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <Camera className="h-16 w-16 text-white" />
        </div>
      </div>
      <button 
        className="bg-blue-500 text-white px-6 py-2 rounded-full font-semibold flex items-center"
        onClick={handleUpload}
      >
        <Upload className="mr-2 h-5 w-5" />
        Upload Photo
      </button>
      {isAnalyzing && (
        <div className="mt-4 flex items-center text-blue-500">
          <Sparkles className="animate-pulse mr-2" />
          <span>AI analyzing your style...</span>
        </div>
      )}
      <p className="mt-4 text-sm text-gray-600 text-center">
        Our advanced AI will analyze your photo and suggest the best outfit combinations from your wardrobe.
      </p>
    </div>
  )
}

