import { useRef, useState, useEffect } from 'react';
import { useInView } from '../../hooks/useInView';
import { Award, ExternalLink, FileBadge } from 'lucide-react';

const awardsData = [
  {
    title: "Intro to Technical Interview Prep 101",
    organization: "Codepath",
    date: "July 2025",
    description: "Completed an accelerated 10-week course focusing on fundamental data structures, algorithms, and technical problem-solving. Mastered the UMPIRE method for breaking down complex algorithmic challenges and strengthened Big O analysis skills for coding interviews.",
  },
  {
    title: "2023 Website Design California FBLA State Champion",
    organization: "California Future Business Leaders of America",
    date: "March 2023",
    description: "Won first place for designing and developing a website that showcases the best practices in web design and user experience.",
    link: "https://www.apachenews.ausd.net/"
  },
  {
    title: "Certificate of Special Congressional Recognition",
    organization: "United States Congress",
    date: "April 2023",
    description: "Special congressional recognition of outstanding and invaluable service to the community",
  },
  {
    title: "Exemplary Student Award",
    organization: "California Legislature Assembly",
    date: "April 2023",
    description: "Acknowledged for significant contributions to the community and academic excellence.",
  }
];

const Awards = () => {
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
      id="awards"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Awards, Recognitions, and Certifications
          </h2>
          <div className="h-1 w-20 bg-indigo-600 dark:bg-indigo-400 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Achievements and recognition received throughout my career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {awardsData.map((award, index) => (
            <div
              key={award.title}
              className={`transition-all duration-1000 ${
                animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 h-full border border-gray-200 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-400 transition-colors group">
                <div className="flex items-center justify-between mb-4">
                  <Award className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                  {award.link && (
                    <a
                      href={award.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {award.title}
                </h3>
                
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {award.organization}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">•</span>
                  <span className="text-gray-600 dark:text-gray-400 text-sm">
                    {award.date}
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400">
                  {award.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;