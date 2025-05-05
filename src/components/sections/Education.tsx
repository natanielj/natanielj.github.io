import { useRef, useState, useEffect } from 'react';
import { useInView } from '../../hooks/useInView';
import { GraduationCap } from 'lucide-react';

const educationData = [
  {
    degree: "Bachelor of Science in Computer Engineering",
    institution: "University of California, Santa Cruz",
    duration: "2023 - 2027(Expected)",
    description: "Focus on Systems Programming",
    achievements: [
      "Crown College Scholars - Honors Program"
    ]
  }
];

const Education = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isInView && !animate) {
      setAnimate(true);
    }
  }, [isInView, animate]);

  return (
    <section
      id="education"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <div className="h-1 w-20 bg-indigo-600 dark:bg-indigo-400 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My academic journey and qualifications.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {educationData.map((education, index) => (
            <div
              key={education.degree}
              className={`mb-8 transition-all duration-1000 ${
                animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-indigo-600/10 dark:bg-indigo-400/10 rounded-full"></div>
                <div className="absolute top-4 right-4">
                  <GraduationCap className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {education.degree}
                </h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {education.institution}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">•</span>
                  <span className="text-gray-600 dark:text-gray-400 text-sm">
                    {education.duration}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {education.description}
                </p>
                <ul className="space-y-2">
                  {education.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="flex items-center text-gray-600 dark:text-gray-400"
                    >
                      <span className="w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full mr-3"></span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;