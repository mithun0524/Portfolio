type Props = {
  title: string
  description?: string
}

export default function ProjectCard({ title, description }: Props) {
  return (
    <article className="p-4 border rounded-lg bg-white shadow-sm">
      <h3 className="font-semibold mb-2">{title}</h3>
      {description && <p className="text-sm text-gray-600">{description}</p>}
    </article>
  )
}
