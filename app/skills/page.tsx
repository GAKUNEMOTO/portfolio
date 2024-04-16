import SkillChart from '@/components/skillChart';
import SkillsCard from '@/components/skillsCard';
import React from 'react';

export default function Page() {
  return (
    <div className='p-20'>
      <h1 className="text-muted-foreground font-bold text-6xl mb-6 border-b">SKILLS</h1>
      <div className="mb-4">
        <SkillChart />
      </div>
      <SkillsCard />
    </div>
  );
}
