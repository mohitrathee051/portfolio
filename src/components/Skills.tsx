import React from 'react';
import { Code, Database, Brain, Wrench, BarChart3 } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code size={24} />,
      skills: ['Python', 'JavaScript','SQL', 'C/C++'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Web Development',
      icon: <Code size={24} />,
      skills: ['React.js', 'Node.js', 'HTML/CSS', 'Express.js'],
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      title: 'Databases & Storage',
      icon: <Database size={24} />,
      skills: ['MySQL', 'PostgreSQL'],
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Machine Learning',
      icon: <Brain size={24} />,
      skills: ['Scikit-Learn', 'TensorFlow', 'PyTorch'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Cloud Platforms',
      icon: <Wrench size={24} />,
      skills: ['AWS', 'Google Cloud', 'Azure'],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'DevOps & Containerization',
      icon: <Wrench size={24} />,
      skills: ['Docker', 'Kubernetes'],
      color: 'from-orange-500 to-orange-600'
    },
    
    {
      title: 'Version Control & PM',
      icon: <Wrench size={24} />,
      skills: ['Git', 'GitHub', 'GitLab'],
      color: 'from-gray-500 to-gray-600'
    },
    {
      title: 'Data Visualization',
      icon: <BarChart3 size={24} />,
      skills: ['Tableau', 'Matplotlib', 'Seaborn', 'Excel'],
      color: 'from-teal-500 to-teal-600'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit of technologies and frameworks that I use to build innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center text-white mb-4`}>
                {category.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {category.title}
              </h3>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center gap-3">
                    <div className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full`}></div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;