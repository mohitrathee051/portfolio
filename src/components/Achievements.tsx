import React from 'react';
import { Award, Users, Trophy, Lightbulb } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: 'GDSC DCE Leadership',
      category: 'Leadership Role',
      description: 'Active member and contributor in Google Developer Student Clubs at Delhi College of Engineering',
      icon: <Users size={24} />,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Hackathon Awards',
      category: 'Competition Success',
      description: 'Winner and finalist in multiple hackathons, showcasing innovation and technical excellence',
      icon: <Trophy size={24} />,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Project Innovation',
      category: 'Technical Excellence',
      description: 'Developed cutting-edge ML projects that solve real-world problems in finance and business',
      icon: <Lightbulb size={24} />,
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Technical Recognition',
      category: 'Industry Acknowledgment',
      description: 'Recognized for contributions to machine learning and web development communities',
      icon: <Award size={24} />,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Organizations & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Recognition and contributions that highlight my commitment to excellence and community involvement
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-2xl flex items-center justify-center text-white mb-6`}>
                {achievement.icon}
              </div>

              <div className="mb-4">
                <span className={`inline-block px-3 py-1 bg-gradient-to-r ${achievement.color} text-white text-sm rounded-full font-medium mb-3`}>
                  {achievement.category}
                </span>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {achievement.title}
                </h3>
              </div>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;