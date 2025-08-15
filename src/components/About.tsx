import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-xl">
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              I'm a passionate <span className="text-blue-600 dark:text-blue-400 font-semibold">Machine Learning Engineer</span> and 
              <span className="text-teal-600 dark:text-teal-400 font-semibold"> Web Developer</span> with a deep love for 
              technology and innovation. My journey in tech has led me to specialize in creating intelligent systems that not only 
              solve complex problems but also provide intuitive user experiences.
            </p>
            
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              With expertise spanning from machine learning algorithms to modern web development frameworks, I bridge the gap between 
              data science and user interface design. I thrive on challenges that require both analytical thinking and creative 
              problem-solving, whether it's building predictive models or crafting responsive web applications.
            </p>

            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              Currently, I'm focused on leveraging cutting-edge technologies like <span className="text-orange-600 dark:text-orange-400 font-semibold">TensorFlow</span>, 
              <span className="text-purple-600 dark:text-purple-400 font-semibold"> PyTorch</span>, and modern web frameworks to build solutions 
              that make a real impact. I'm always eager to learn new technologies and collaborate on innovative projects that push the 
              boundaries of what's possible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;