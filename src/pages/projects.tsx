import { useState } from 'react';
import useSWR from 'swr';
import Head from 'next/head';
import Image from 'next/image';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import CategoryTabs from '../components/CategoryTabs';
import LoadingSkeleton from '../components/LoadingSkeleton';

const fetcher = (url) => fetch(url).then((res) => res.json());

const ProjectsPage = () => {
  const { data, error } = useSWR('/api/projects', fetcher);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  if (error) return <div>Failed to load projects</div>;
  if (!data) return <LoadingSkeleton />;

  const filteredProjects = selectedCategory === 'All'
    ? data
    : data.filter((project) => project.category === selectedCategory);

  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Gallery of welding projects" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <CategoryTabs
          categories={['All', 'Industrial', 'Commercial', 'Residential']}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </>
  );
};

export default ProjectsPage;
