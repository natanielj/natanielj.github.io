import { Project } from '../../types';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
  animate: boolean;
}

const ProjectCard = ({ project, index, animate }: ProjectCardProps) => {
  return (
    <div 
      className={`group rounded-lg overflow-hidden shadow-md bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 transition-all duration-1000 hover:-translate-y-2 hover:shadow-xl ${
        animate ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ 
        transitionDelay: `${index * 100}ms`,
        transform: animate 
          ? 'translateY(0)' 
          : 'translateY(30px)'
      }}
    >
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {project.liveUrl && (
            <a 
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full hover:bg-indigo-600 hover:text-white transition-colors"
              aria-label="Visit live site"
            >
              <ExternalLink size={20} />
            </a>
          )}
          {project.githubUrl && (
            <a 
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full hover:bg-indigo-600 hover:text-white transition-colors"
              aria-label="View GitHub repository"
            >
              <Github size={20} />
            </a>
          )}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.technologies.map((tech, i) => (
            <span 
              key={i}
              className="px-2 py-1 text-xs rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;