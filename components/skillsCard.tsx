import { skillData } from '@/data/skills';
import React from 'react';

export default function SkillsCard() {
  return (
    <div className='flex flex-col justify-center items-center'>
      {skillData.map((skill) => (
        <div key={skill.id} className='hover:shadow-lg mb-5 transition duration-500 relative p-4 border rounded-md shadow-sm bg-card dark:bg-gray-800 w-4/5 h-2/5'>
          <div className='flex items-center'>
            <div className='flex items-center'>
              <img
                className='w-20 h-20 mr-3 flex-shrink-0 dark:filter dark:invert dark:bg-opacity-0'
                src={`/gaku-portfolio/icons/${skill.icon}.svg`}
                alt={skill.title}
                title={skill.title}
              />
              <div className='flex flex-col'>
                <h3>{skill.title}</h3>
                <p className='hidden md:block text-muted-foreground'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam obcaecati
                  similique pariatur ipsum, dolor temporibus consectetur earum reprehenderit fuga
                  cumque quam delectus exercitationem laboriosam officiis? Sed quidem labore
                  facilis accusamus.
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
