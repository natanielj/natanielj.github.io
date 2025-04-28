import { useRef, useState, useEffect } from 'react';
import { useInView } from '../../hooks/useInView';
import { experienceData } from '../../data/experienceData';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  const [animate, setAnimate] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (isInView && !animate) {
      setAnimate(true);
    }
  }, [isInView, animate]);

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : experienceData.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < experienceData.length - 1 ? prev + 1 : 0));
  };

  const getVisibleExperiences = () => {
    const experiences = [];
    const prev = activeIndex === 0 ? experienceData.length - 1 : activeIndex - 1;
    const next = activeIndex === experienceData.length - 1 ? 0 : activeIndex + 1;

    experiences.push({ data: experienceData[prev], position: 'prev' });
    experiences.push({ data: experienceData[activeIndex], position: 'active' });
    experiences.push({ data: experienceData[next], position: 'next' });

    return experiences;
  };

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 min-h-[calc(100vh-4rem)] flex items-center justify-center"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <div className="h-1 w-20 bg-indigo-600 dark:bg-indigo-400 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and the companies I've had the pleasure to work with.
          </p>
        </div>

        <div className="relative px-4 sm:px-0">
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white dark:bg-gray-900 shadow-lg text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
            aria-label="Previous experience"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white dark:bg-gray-900 shadow-lg text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
            aria-label="Next experience"
          >
            <ChevronRight size={24} />
          </button>

          <div className="overflow-hidden px-8 sm:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 items-center justify-center">
              {getVisibleExperiences().map(({ data: experience, position }, index) => (
                <div
                  key={`${experience.company}-${position}`}
                  className={`transition-all duration-500 ${
                    position === 'active'
                      ? 'opacity-100 scale-100 z-20'
                      : position === 'prev'
                      ? 'opacity-50 scale-95 -translate-x-4'
                      : 'opacity-50 scale-95 translate-x-4'
                  } ${!animate ? 'opacity-0 translate-y-10' : ''}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div
                    className={`bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg border-l-4 ${
                      position === 'active'
                        ? 'border-indigo-600 dark:border-indigo-400'
                        : 'border-gray-300 dark:border-gray-700'
                    } mx-auto max-w-sm w-full`}
                  >
                    <div className="flex flex-col mb-4">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {experience.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {experience.company}
                        </span>
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full text-indigo-800 bg-indigo-100 dark:text-indigo-200 dark:bg-indigo-900/30">
                          {experience.type}
                        </span>
                      </div>
                      <span className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                        {experience.duration}
                      </span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed line-clamp-4">
                      {experience.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
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
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {experienceData.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'w-8 bg-indigo-600 dark:bg-indigo-400'
                    : 'bg-gray-300 dark:bg-gray-700'
                }`}
                aria-label={`Go to experience ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;