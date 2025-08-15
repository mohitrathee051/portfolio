import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Frontend Web Developer',
      company: 'Codeflies Technologies',
      period: 'Feb 2024 – May 2024',
      location: 'Remote',
      description: 'Developed responsive web applications using modern frontend technologies with DevOps integration. Collaborated with cross-functional teams to deliver scalable, high-quality user experiences.',
      achievements: [
        'Built responsive web applications using React.js and modern CSS frameworks',
        'Implemented CI/CD pipelines using GitHub Actions and Jenkins for automated deployments',
        'Optimized application performance resulting in 40% faster load times using cloud technologies',
        'Collaborated with DevOps teams to containerize applications using Docker',
        'Implemented monitoring solutions with Grafana and Prometheus for application health tracking',
        'Managed cloud infrastructure on AWS and GCP for scalable web applications',
        'Applied GitOps practices for infrastructure as code using Terraform'
      ],
      color: 'from-blue-500 to-teal-500'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My journey in the tech industry and the impact I've made along the way
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-16 w-0.5 h-full bg-gradient-to-b from-blue-500 to-teal-500"></div>
              
              {/* Timeline dot */}
              <div className={`absolute left-6 top-8 w-4 h-4 bg-gradient-to-r ${exp.color} rounded-full border-4 border-white dark:border-gray-800`}></div>

              <div className="ml-16 mb-12">
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {exp.title}
                      </h3>
                      <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
                        {exp.company}
                      </h4>
                    </div>
                    
                    <div className="flex flex-col md:items-end gap-2">
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                        <Calendar size={16} />
                        <span className="font-medium">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div>
                    <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wide">
                      Key Achievements
                    </h5>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-3">
                          <div className={`w-2 h-2 bg-gradient-to-r ${exp.color} rounded-full mt-2 flex-shrink-0`}></div>
                          <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;