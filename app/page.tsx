import WorkCard from "@/components/workCard";
import { works } from "@/data/works";

export default function Pages() {
  return (
  <main>
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="font-black text-2xl">
          GAKU NEMOTO
        </h1>
        <p>
          You Only Live Once ~ 人生一度きり
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 flex-1 p-32'>
        {works.map((work) => (
          <WorkCard
            key={work.id}
            title={work.title}
            href={work.href}
            id={work.id}
            intro={work.intro}
          />
        ))}
      </div>
  </main>
  );
}
