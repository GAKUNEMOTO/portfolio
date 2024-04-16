import { AppConfig } from '@/app.config'
import IntroCard from '@/components/introCard'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'


export default function About() {
  return (
    <div className="w-screen px-32 py-20">
      <div className='flex justify-between'>
      <div className='flex flex-col'>
      <h2 className="font-semibold text-2xl">{AppConfig.nameK}</h2>
      <h1 className='font-bold text-4xl'>{AppConfig.nameA}</h1>
      </div>
      <div className='flex mt-6 mb-20'>
      <span className="text-bold text-4xl mr-2">|</span>
      <h2 className='flex mt-2 text-muted-foreground'>STUDENT</h2>
      </div>
      </div>
      <div className='flex items-center justify-center'>
        <div className="items-center mr-20 mb-2">
          <Image src="images/myphoto.png" width={300} height={300} alt={''} />
        </div>
        <IntroCard/>
      </div>


    </div>
  )
}