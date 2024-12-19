import SuggestionDisplay from '../components/SuggestionDisplay'

export default function SuggestionsPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Your Fashion Suggestions</h1>
      <SuggestionDisplay />
    </div>
  )
}

