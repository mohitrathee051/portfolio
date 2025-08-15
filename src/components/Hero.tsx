import React from "react";
import { Download, Mail, Github, Linkedin } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Profile Image Placeholder */}
          <div className="mb-8 flex justify-center">
            <div className="w-48 h-48 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full p-1 shadow-2xl">
              <img
                src="src\public\image.jpg"
                alt="Mohit Rathee"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          {/* Hero Content */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Mohit Rathee
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 animate-fade-in-delay-1">
            Machine Learning Engineer | Web Developer | Devops Engineer
          </p>

          <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in-delay-2">
            Passionate about building intelligent systems and creating seamless
            user experiences. Bridging the gap between AI and user-friendly
            interfaces.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-delay-3">
              <a
                href="/resume.pdf"
                download="Mohit_Rathee_Resume.pdf"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold gap-2 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                <Download size={20} />
                Download Resume
              </a>

              <button
              onClick={scrollToContact}
              className="bg-transparent border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-all duration-200 transform hover:scale-105"
            >
              <Mail size={20} />
              Contact Me
            </button>  
            

            
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 animate-fade-in-delay-4">
            <a
              href="https://github.com/mohitrathee051"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 transform hover:scale-110"
            >
              <Github size={28} />
            </a>
            <a
              href="https://linkedin.com/in/mohitrathee051"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 transform hover:scale-110"
            >
              <Linkedin size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
