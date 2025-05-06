 import { useEffect, useRef, useState } from 'react';
import { useInView } from '../../hooks/useInView';
import { FileText, Github, Linkedin, Mail } from 'lucide-react';

const skills = [
  { name: 'React/Node.js', level: 90 },
  { name: 'Typescript', level: 85 },
  { name: 'Python', level: 80 },
  { name: 'Machine Learning', level: 55 },
  { name: 'Artificial Intelligence / Generative AI', level: 40 },
  { name: 'Natural Language Processing', level: 30 },
];

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  const isSkillsInView = useInView(skillsRef, { threshold: 0.5 });
  const [animate, setAnimate] = useState(false);
  const [animateSkills, setAnimateSkills] = useState(false);

  useEffect(() => {
    if (isInView && !animate) {
      setAnimate(true);
    }
  }, [isInView, animate]);

  useEffect(() => {
    if (isSkillsInView && !animateSkills) {
      setAnimateSkills(true);
    }
  }, [isSkillsInView, animateSkills]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="h-1 w-20 bg-indigo-600 dark:bg-indigo-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div
            className={`transition-all duration-1000 ${animate ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`}
          >
            <div className="rounded-lg overflow-hidden shadow-lg mb-6">
              <img
                src="src/assets/acm-workshop.jpg"
                alt="ACM Workshop"
                className="w-full h-auto"
              />
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://linkedin.com/in/nataniel-jayaseelan-80977b223"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors flex items-center justify-center gap-2"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
              <a
                href="https://github.com/natanielj"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 text-base font-medium rounded-lg text-gray-800 dark:text-white bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center justify-center gap-2"
              >
                <Github size={18} />
                GitHub
              </a>
              <a
                href="src/assets/SWEResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 text-base font-medium rounded-lg text-gray-800 dark:text-white bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center justify-center gap-2"
              >
                <FileText size={18} />
                Resume
              </a>
              <a
                href="mailto:nataniel.jayaseelan@gmail.com"
                className="px-6 py-3 text-base font-medium rounded-lg text-gray-800 dark:text-white bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center justify-center gap-2"
              >
                <Mail size={18} />
                Email
              </a>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${animate ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
              }`}
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Who I Am
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            I’m currently studying Computer Engineering (with a minor in Computer Science) at the University of California, Santa Cruz, where I’m part of the College Scholars Program. I’ve been fortunate to combine my love for technology with real-world experience in software development, web design, and AI research.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Beyond campus, I’ve developed award-winning websites for nonprofits, built telemedical software for communities in need, and conducted cutting-edge AI research in reinforcement learning for autonomous vehicles at UCSC’s AIEA Lab.

              When I’m not coding, you’ll probably find me piloting drones through the skies, tinkering with full-stack projects, or working on the next big idea in AI and tech.
            </p>

            <div ref={skillsRef}>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                My Skills
              </h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="w-full">
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-800 dark:text-gray-200 font-medium">
                        {skill.name}
                      </span>
                      <span
                        className={`text-gray-600 dark:text-gray-400 text-sm transition-opacity duration-500 ${animateSkills ? 'opacity-100' : 'opacity-0'
                          }`}
                        style={{ transitionDelay: `${index * 100}ms` }}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                      <div
                        className="bg-indigo-600 dark:bg-indigo-400 h-2.5 rounded-full transition-all duration-1000 ease-out relative"
                        style={{
                          width: animateSkills ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 100}ms`
                        }}
                      >
                        <div
                          className="absolute top-0 right-0 h-full w-2 bg-white/20"
                          style={{
                            animation: animateSkills ? 'shimmer 2s infinite' : 'none',
                            animationDelay: `${index * 100}ms`
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;