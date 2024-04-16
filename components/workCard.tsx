import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function WorkCard({ title, href, id, intro}:
     { 
        title: string; 
        href: string; 
        id: string
        intro: string
    }) {
  return (
    <div className='relative p-4 border rounded-md shadow-sm bg-card'>
        <div className="aspect-video overflow-hidden border relative mb-2 rounded">
            <Image fill className='object-cover' src={`/gaku-portfolio/images/${id}.png`} alt={''}/>
        </div>
      <h2>
        <Link href={href} target='_blank'>
            {title}
        </Link>

      </h2>
    </div>
  )
}
