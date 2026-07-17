import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/stories')({
  component: Stories,
})

function Stories() {
  return (
    <div className="pt-32 pb-24 text-center">
      <h1 className="fluid-h1 font-display mb-4">Travel Stories</h1>
      <p className="text-gray-500">Read our latest travel stories (Coming soon).</p>
    </div>
  )
}
