// frontend/src/app/components/ProjectsSection.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Code2, Database, Globe, Plug, ExternalLink } from "lucide-react";

const ProjectsSection = () => {
  const [isMounted] = useState(true);

  // Stats data
  const stats = [
    { value: "20+", label: "Projects" },
    { value: "3+", label: "Years Exp." },
    { value: "15+", label: "Technologies" }
  ];

  // Project categories with icons
  const projectTypes = [
    {
      title: "Web Applications",
      description: "Full-stack solutions with React, Node.js, and modern frameworks",
      icon: Globe
    },
    {
      title: "Desktop Apps",
      description: "Windows software with C# and intuitive interfaces",
      icon: Code2
    },
    {
      title: "Database Solutions",
      description: "SQL and NoSQL architecture, optimization, and modeling",
      icon: Database
    },
    {
      title: "API Development",
      description: "RESTful APIs, microservices, and integrations",
      icon: Plug
    }
  ];

  // Technical expertise
  const expertise = [
    "MERN stack applications",
    "C# desktop applications",
    "SQL Server & MongoDB",
    "RESTful API design",
    "Real-time features (Socket.IO)",
    "Performance optimization"
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1] as const
      }
    }
  };

  return (
    <section 
      id="projects"
      className="relative min-h-screen w-full flex flex-col overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        
        {/* Animated gradient orbs - smaller on mobile */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-3xl"
        ></motion.div>

        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute top-1/3 right-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl"
        ></motion.div>

        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 12, repeat: Infinity, delay: 4 }}
          className="absolute bottom-1/4 left-1/2 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full mix-blend-multiply filter blur-3xl"
        ></motion.div>
      </div>

      {/* Content container */}
      <div className="relative z-10 flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex items-center">
        <div className="w-full py-12 sm:py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16">
            
            {/* Left Column - Header & Stats */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isMounted ? "visible" : "hidden"}
                className="space-y-6 sm:space-y-8"
              >
                <motion.h1 
                  variants={itemVariants}
                  className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight"
                >
                  Building{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                    Solutions
                  </span>
                </motion.h1>
                
                <motion.p 
                  variants={itemVariants}
                  className="text-sm xs:text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed"
                >
                  Innovative solutions across multiple platforms with modern technologies and best practices
                </motion.p>

                {/* Stats - Compact on mobile */}
                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  animate={isMounted ? "visible" : "hidden"}
                  className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
                >
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="text-center p-3 sm:p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                      <div className="text-[10px] xs:text-xs sm:text-sm text-gray-600 font-medium">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* View All Projects Button */}
                <motion.div
                  variants={itemVariants}
                  className="pt-2"
                >
                  <motion.a
                    href="/projects"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base w-full sm:w-auto"
                  >
                    View All Projects
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Column - Project Cards & Expertise */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              
              {/* Project Types Grid - Single column on mobile */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate={isMounted ? "visible" : "hidden"}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
              >
                {projectTypes.map((project, index) => {
                  const IconComponent = project.icon;
                  return (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ y: -8, scale: 1.02 }}
                      className="p-4 sm:p-5 md:p-6 rounded-xl backdrop-blur-sm border border-gray-200 bg-white/70 shadow-lg hover:shadow-xl hover:shadow-blue-500/20 hover:border-blue-500/50 transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                      </div>
                      <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-gray-900">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed text-gray-600">
                        {project.description}
                      </p>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Technical Expertise - Compact on mobile */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate={isMounted ? "visible" : "hidden"}
                className="p-4 sm:p-5 md:p-6 rounded-xl backdrop-blur-sm border border-gray-200 bg-white/70 shadow-lg"
              >
                <motion.h3 
                  variants={itemVariants}
                  className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 text-gray-900"
                >
                  Technical Expertise
                </motion.h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  {expertise.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="flex items-start gap-2 sm:gap-3"
                    >
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex-shrink-0"></span>
                      <span className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;