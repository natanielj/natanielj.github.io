import { Experience } from '../../types';

interface ExperienceCardProps {
  experience: Experience;
  index: number;
  animate: boolean;
}

const ExperienceCard = ({ experience, index, animate }: ExperienceCardProps) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className={`relative z-10 flex items-center justify-center ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
      <div 
        className={`w-full md:w-5/12 transition-all duration-1000 ${
          animate 
            ? 'opacity-100' 
            : 'opacity-0'
        }`}
        style={{ 
          transitionDelay: `${index * 200}ms`,
          transform: animate 
            ? 'translateY(0)' 
            : `translateY(${isEven ? -30 : 30}px)`
        }}
      >
        <div className={`bg-white dark:bg-gray-900 p-6 md:p-8 rounded-lg shadow-md border-l-4 border-indigo-600 dark:border-indigo-400 ${
          isEven ? 'md:text-right' : 'md:text-left'
        }`}>
          <div className="flex flex-col md:flex-row md:items-baseline md:mb-2 gap-2">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {experience.role}
            </h3>
            <div className="inline-block px-3 py-1 text-xs font-medium rounded-full text-indigo-800 bg-indigo-100 dark:text-indigo-200 dark:bg-indigo-900/30">
              {experience.type}
            </div>
          </div>
          
          <div className="text-gray-700 dark:text-gray-300 text-sm font-medium mb-3">
            {experience.company} | {experience.duration}
          </div>
          
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {experience.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-1 mt-4">
            {experience.technologies.map((tech, i) => (
              <span 
                key={i}
                className="px-3 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline dot */}
      <div className={`absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-indigo-600 dark:bg-indigo-400 transition-all duration-1000 z-10 ${
        animate ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
      }`}
      style={{ transitionDelay: `${index * 200 + 300}ms` }}
      ></div>
    </div>
  );
};

export default ExperienceCard;