import React from 'react'
import { GradualSpacing } from './ui/GradualSpacing'
import { blogsdata } from '@/data'
import { MagicCard } from './ui/Card'
import Image from 'next/image'
import MagicButton from './ui/MagicButton'
import Link from 'next/link'
import { FaLocationArrow } from 'react-icons/fa'
import { FaBook } from 'react-icons/fa6'

const Blog = () => {

  return (
    <section id="blog" className="container">
      <div className="container my-10 relative">
        <GradualSpacing text="Recent Articles" className="pt-14" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-10 sm:mt-10 relative">
          {blogsdata.map((project) => (
            <MagicCard key={project.id}>
              <div className="flex flex-col items-center w-full h-full transform hover:shadow-xl transition-shadow duration-500">
                <div className="relative w-full h-80 rounded-sm overflow-hidden">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    sizes='864px'
                    priority
                    className="rounded w-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                  {
                    (project.id === 3 || project.id === 4 || project.id === 5) && 
                    <span className="absolute top-2 left-2 bg-violet-500 text-white text-xs font-bold py-1 px-3 rounded-full shadow-md">
                      Private 
                    </span>
                  }
                </div>
                <div className="pt-5">
                  <h2 className="text-2xl font-bold line-clamp-1 h-[32px]">
                    {project.title}
                  </h2>
                  <p className="mt-3 text-sm text-white-100 line-clamp-4 h-[80px]">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center gap-x-3 mt-5">
                    
                   
                    <div className="flex items-center justify-center gap-4 text-white-100 text-xs sm:text-lg">
                      
                    
                    <Link
                      href={project.link}
                      className="flex items-center justify-center gap-1 hover:text-purple"
                    >
                      Read <FaBook className=' text-pink-400' />
                    </Link>
                  </div>
                  </div>
                </div>
              </div>
            </MagicCard>
          ))}
        </div>
          <div className="flex items-center justify-center mt-5">
            <Link href={"https://medium.com/@younes10sillimi"} target="_Blank">
              <MagicButton
                title="View All Articles"
                icon={<FaLocationArrow />}
                position="right"
              />
            </Link>
          </div>
      </div>
    </section>
  )
}

export default Blog 
