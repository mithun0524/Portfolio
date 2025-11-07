export type Project = {
  id: string
  title: string
  description: string
  image?: string
  link?: string
}

const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Client Dashboard',
    description: 'A responsive dashboard built with React, TypeScript and TailwindCSS. Shows charts, tables and integrations.',
    image: '/assets/project-1.svg',
    link: '#'
  },
  {
    id: 'project-2',
    title: 'E‑commerce Store',
    description: 'A storefront demo with product listing, cart and checkout flow implemented with Stripe (demo).',
    image: '/assets/project-2.svg',
    link: '#'
  },
  {
    id: 'project-3',
    title: 'Open Source Lib',
    description: 'A tiny utility library published to npm — includes tests, CI and coverage reports.',
    image: '/assets/project-3.svg',
    link: '#'
  }
]

export default projects
