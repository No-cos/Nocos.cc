import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import ProjectFilters from './ProjectFilters'
import { projects } from '@/constants';
import ProjectCard from './ProjectCard';

const ProjectSection = () => {
  return (
    <section className="bg-[#0E0F12] py-20">
      <MaxWidthWrapper className='w-11/12'>
        <ProjectFilters />
        <section className='grid lg:grid-cols-3 gap-2 mt-10'>
          {projects?.map((data) => (
            <ProjectCard key={data?.id} data={data} />
          ))}
        </section>
      </MaxWidthWrapper>
    </section>
  );
}

export default ProjectSection
