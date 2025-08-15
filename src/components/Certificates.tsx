import React from 'react';
import { Award, Cloud, Github, Code, Database } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      description: 'Foundational understanding of AWS Cloud concepts, services, and terminology',
      icon: <Cloud size={24} />,
      color: 'from-orange-500 to-red-500',
      skills: ['Cloud Computing', 'AWS Services', 'Security', 'Pricing']
    },
    {
      title: 'Solutions Architect Associate',
      issuer: 'Udemy',
      description: 'Advanced AWS architecture design and implementation skills for scalable systems',
      icon: <Cloud size={24} />,
      color: 'from-orange-600 to-red-600',
      skills: ['AWS Architecture', 'Scalability', 'Security', 'Cost Optimization']
    },
    {
      title: 'GitHub Certified Foundations',
      issuer: 'GitHub',
      description: 'Comprehensive knowledge of Git version control and GitHub collaboration features',
      icon: <Github size={24} />,
      color: 'from-gray-700 to-gray-900',
      skills: ['Version Control', 'Git', 'Collaboration', 'DevOps']
    },
    {
      title: 'GitLab CI Fundamentals',
      issuer: 'GitLab',
      description: 'Continuous Integration and Deployment using GitLab CI/CD pipelines',
      icon: <Code size={24} />,
      color: 'from-orange-500 to-purple-500',
      skills: ['CI/CD', 'GitLab', 'Automation', 'DevOps']
    },
    {
      title: 'Introduction to Kubernetes (LFS158)',
      issuer: 'Linux Foundation',
      description: 'Container orchestration and management using Kubernetes platform',
      icon: <Database size={24} />,
      color: 'from-blue-600 to-indigo-600',
      skills: ['Kubernetes', 'Containers', 'Orchestration', 'Microservices']
    },
    {
      title: 'Introduction to Jenkins (LFS167)',
      issuer: 'Linux Foundation',
      description: 'Automation server for building, testing, and deploying applications',
      icon: <Code size={24} />,
      color: 'from-blue-500 to-teal-500',
      skills: ['Jenkins', 'CI/CD', 'Automation', 'Build Pipelines']
    },
    {
      title: 'Introduction to GitOps (LFS169)',
      issuer: 'Linux Foundation',
      description: 'GitOps methodology for infrastructure and application deployment',
      icon: <Award size={24} />,
      color: 'from-green-500 to-blue-500',
      skills: ['GitOps', 'Infrastructure', 'Deployment', 'Git Workflows']
    },
    {
      title: 'DevOps and Site Reliability Engineering (LFS162)',
      issuer: 'Linux Foundation',
      description: 'DevOps practices and Site Reliability Engineering principles',
      icon: <Award size={24} />,
      color: 'from-purple-500 to-pink-500',
      skills: ['DevOps', 'SRE', 'Monitoring', 'Reliability']
    },
    {
      title: 'Introduction to Linux (LFS101)',
      issuer: 'Linux Foundation',
      description: 'Comprehensive Linux system administration and command line skills',
      icon: <Code size={24} />,
      color: 'from-gray-600 to-gray-800',
      skills: ['Linux', 'System Admin', 'Command Line', 'Shell Scripting']
    },
    {
      title: 'Google Cloud Skills Boost',
      issuer: 'Google Cloud',
      description: 'Hands-on experience with Google Cloud Platform services and solutions',
      icon: <Cloud size={24} />,
      color: 'from-blue-500 to-green-500',
      skills: ['Google Cloud', 'GCP Services', 'Cloud Architecture', 'Data Analytics']
    },
    {
      title: 'Python for Machine Learning',
      issuer: 'Industry Certification',
      description: 'Advanced Python programming skills focused on machine learning and data science',
      icon: <Code size={24} />,
      color: 'from-blue-500 to-green-500',
      skills: ['Python', 'Machine Learning', 'Data Analysis', 'Algorithms']
    },
    {
      title: 'Data Science Specialization',
      issuer: 'Professional Certification',
      description: 'Comprehensive data science methodology and practical application skills',
      icon: <Database size={24} />,
      color: 'from-purple-500 to-indigo-500',
      skills: ['Data Science', 'Statistics', 'Visualization', 'Analytics']
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professional certifications that validate my expertise and commitment to continuous learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className={`h-2 bg-gradient-to-r ${cert.color}`}></div>
              
              <div className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${cert.color} rounded-xl flex items-center justify-center text-white flex-shrink-0`}>
                    {cert.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">
                      {cert.issuer}
                    </p>
                    <div className="flex items-center gap-2 mb-4">
                      <Award size={16} className="text-gray-500" />
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        Certified Professional
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {cert.description}
                </p>

                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">
                    Skills Validated
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className={`px-3 py-1 bg-gradient-to-r ${cert.color} text-white text-sm rounded-full font-medium`}>
                        {skill}
                      </span>
                    ))}
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

export default Certificates;