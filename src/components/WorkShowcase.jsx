'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function WorkShowcase() {
  const projects = [
    {
      id: '1',
      title: 'Swiift: South African Ride Sharing Platform',
      imageUrl: '/swift.png',
      liveUrl: 'https://swiift-basat.vercel.app/'
    },
    {
        id: '5',
        title: 'Wild and Free: Explore Events in Bali Nightlife, Indonesia',
        imageUrl: '/wildandfree.png',
        liveUrl: 'https://www.wildandfree.us/'
      },
    {
      id: '3',
      title: 'SnapGram: The NextGen Social Media Platform',
      imageUrl: '/snapgram.png',
      liveUrl: 'https://react-social-mediaapp.vercel.app/sign-in'
    },
    {
      id: '4',
      title: 'Remotive Jobs: Land Your next Job with us',
      imageUrl: '/remotive.png',
      liveUrl: 'https://remotive-jobs.vercel.app/'
    },
    {
        id: '2',
        title: 'LangBridge: AI Powered Translator App',
        imageUrl: '/langbridge.png',
        liveUrl: 'https://lang-bridge-basat.vercel.app/'
      },
      {
          id: '6',
          title: 'Cara: Buy with us',
          imageUrl: '/cara.png',
          liveUrl: 'https://ecommercearbab.netlify.app/'
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
                  View live project →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
