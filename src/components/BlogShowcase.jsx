'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function BlogShowcase() {
  const projects = [
    {
      id: '1',
      title: 'The Rise of AI in Web Development',
      imageUrl: '/blog1.png',
      liveUrl: 'https://swiift-basat.vercel.app/'
    },
    {
        id: '2',
        title: 'Chosing Right Tech Stack for your Web application',
        imageUrl: '/blog2.png',
        liveUrl: 'https://www.wildandfree.us/'
      },
    {
      id: '3',
      title: 'MicroServices Explained',
      imageUrl: '/blog3.png',
      liveUrl: 'https://react-social-mediaapp.vercel.app/sign-in'
    },
    {
      id: '4',
      title: 'Why Good UX/UI Design Can Make or Break Your Digital Product',
      imageUrl: '/blog4.png',
      liveUrl: 'https://remotive-jobs.vercel.app/'
    }
  ]

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
      <div className="space-y-12">

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col overflow-hidden border rounded-md"
            >
              <div className="relative w-full h-80 overflow-hidden bg-gray-100">
                <Image
                  src={project.imageUrl}
                  layout="fill"
                  objectFit="cover"
                  alt={project.title}
                  className="object-cover object-center transition-transform duration-300 group-hover:scale-105 grayscale"
                />
              </div>
              <div className="flex flex-col space-y-2 p-4">
                <h3 className="text-xl font-normal text-gray-900">
                  {project.title}
                </h3>
                <Link 
                  href={project.liveUrl}
                  className="text-sm font-normal text-gray-600 hover:text-black transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read Now →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
