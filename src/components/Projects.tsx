import React from 'react';
import { ExternalLink, Github, TrendingUp, Shield, Users } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Credit Risk Modelling',
      description: 'Advanced machine learning model to assess credit risk and predict loan defaults using ensemble methods and feature engineering techniques.',
      icon: <Shield size={28} />,
      techStack: ['Python', 'Scikit-Learn', 'Pandas', 'Matplotlib'],
      features: [
        'Ensemble learning algorithms',
        'Feature engineering & selection',
        'Risk probability scoring',
        'Model interpretability'
      ],
      gradient: 'from-red-500 to-pink-500',
      demoUrl: 'https://github.com/mohitrathee051/credit-risk-modelling',
      githubUrl: 'https://github.com/mohitrathee051/credit-risk-modelling'
    },
    {
      title: 'Stock Price Prediction',
      description: 'Time series forecasting model using LSTM neural networks to predict stock price movements with technical indicators.',
      icon: <TrendingUp size={28} />,
      techStack: ['Python', 'TensorFlow', 'Keras', 'Yahoo Finance API'],
      features: [
        'LSTM neural networks',
        'Technical indicators integration',
        'Real-time data processing',
        'Interactive visualization'
      ],
      gradient: 'from-green-500 to-emerald-500',
      demoUrl: 'https://stock-price-prediction-eight.vercel.app/',
      githubUrl: 'https://github.com/mohitrathee051/Stock-price-prediction'
    },
    {
      title: 'Customer Churn Prediction',
      description: 'Predictive analytics model to identify customers likely to churn, helping businesses implement targeted retention strategies.',
      icon: <Users size={28} />,
      techStack: ['Python', 'PyTorch', 'Seaborn', 'Tableau'],
      features: [
        'Customer behavior analysis',
        'Churn probability scoring',
        'Retention strategy insights',
        'Interactive dashboards'
      ],
      gradient: 'from-blue-500 to-cyan-500',
      demoUrl: 'https://github.com/mohitrathee051/Customer-Churn-Prediction',
      githubUrl: 'https://github.com/mohitrathee051/Customer-Churn-Prediction'
    },
    {
      title: 'Btown Cafe',
      description: 'Full-stack cafe application with reservation system and attractive UI. Features responsive design and seamless user experience.',
      icon: <Users size={28} />,
      techStack: ['React.js', 'Node.js', 'HTML', 'CSS', 'JavaScript'],
      features: [
        'Online reservation system',
        'Responsive design',
        'Interactive menu display',
        'Customer management'
      ],
      gradient: 'from-amber-500 to-orange-500',
      demoUrl: 'https://btowncafe.netlify.app/',
      githubUrl: 'https://github.com/mohitrathee051/Btown'
    },
    {
      title: 'MS Global Services',
      description: 'Professional full-stack business application with sleek UI and responsive design for global service management.',
      icon: <ExternalLink size={28} />,
      techStack: ['React.js', 'Node.js', 'CSS3', 'JavaScript'],
      features: [
        'Business service management',
        'Responsive web design',
        'Professional UI/UX',
        'Client portal integration'
      ],
      gradient: 'from-indigo-500 to-purple-500',
      demoUrl: 'https://final-global.vercel.app/',
      githubUrl: 'https://github.com/mohitrathee051/Final-Global'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore my key projects that demonstrate expertise in machine learning, data science, and software development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              
              <div className="p-8">
                <div className={`w-14 h-14 bg-gradient-to-r ${project.gradient} rounded-xl flex items-center justify-center text-white mb-6`}>
                  {project.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                        <div className={`w-1.5 h-1.5 bg-gradient-to-r ${project.gradient} rounded-full`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span key={techIndex} className={`px-3 py-1 bg-gradient-to-r ${project.gradient} text-white text-sm rounded-full font-medium`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" 
                     className={`flex-1 bg-gradient-to-r ${project.gradient} text-white py-3 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity duration-200`}>
                    <Github size={18} />
                    Code
                  </a>
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" 
                     className="flex-1 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 py-3 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:border-gray-400 dark:hover:border-gray-500 transition-colors duration-200">
                    <ExternalLink size={18} />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;