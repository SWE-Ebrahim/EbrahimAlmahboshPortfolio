// frontend/src/app/components/About.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const About = () => {
  // 直接使用 useState 初始化，避免在 effect 中同步设置状态
  const [isMounted] = useState(true);

  // What I Am Offering data
  const offerings = [
    {
      title: "Full-Stack Development",
      description: "Complete web application development from frontend to backend",
      icon: "💻"
    },
    {
      title: "MERN Stack Expertise",
      description: "Specialized in MongoDB, Express, React, and Node.js",
      icon: "⚛️"
    },
    {
      title: "Responsive Design",
      description: "Mobile-first, responsive interfaces for all devices",
      icon: "📱"
    },
    {
      title: "API Development",
      description: "RESTful APIs and integration with third-party services",
      icon: "🔌"
    },
    {
      title: "Database Design",
      description: "Efficient database architecture and optimization",
      icon: "🗄️"
    },
    {
      title: "Problem Solving",
      description: "Analytical approach to complex technical challenges",
      icon: "🧩"
    }
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
      id="about"
      className="relative min-h-screen w-full flex flex-col overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"
    >
      {/* 完全复制 Hero 组件的背景元素 */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        
        {/* Animated gradient orbs - 完全复制 Hero 组件的样式 */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-3xl"
        ></motion.div>

        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute top-1/3 right-1/4 w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl"
        ></motion.div>

        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 12, repeat: Infinity, delay: 4 }}
          className="absolute bottom-1/4 left-1/2 w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full mix-blend-multiply filter blur-3xl"
        ></motion.div>
      </div>

      {/* Content container */}
      <div className="relative z-10 flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 flex items-center">
        <div className="w-full py-16 sm:py-20">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              About <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
          </motion.div>

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Text Content */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate={isMounted ? "visible" : "hidden"}
              className="w-full lg:w-1/2 space-y-6 sm:space-y-8"
            >
              <motion.div variants={itemVariants} className="space-y-4">
                <h3 className="text-2xl xs:text-3xl sm:text-4xl md:text-4xl font-bold tracking-tight text-gray-900">
                  Ebrahim Almahbosh
                </h3>
                
                <h4 className="text-lg sm:text-xl md:text-2xl font-light text-gray-700">
                  Software Engineer | Full Stack Developer
                </h4>
              </motion.div>
              
              <motion.p 
                variants={itemVariants}
                className="text-base sm:text-lg leading-relaxed text-gray-700"
              >
                Software Engineer with a solid foundation in full-stack web development and modern engineering practices. 
                Capable of designing, building, and optimizing secure, scalable applications using JavaScript, React, Node.js, Express, and MongoDB. 
                Provides reliable, performance-driven solutions that streamline workflows, enhance user experience, and help teams deliver products faster and with higher quality.
              </motion.p>
              
              <motion.div 
                variants={itemVariants}
                className="space-y-4 pt-4"
              >
                <h4 className="text-xl font-semibold text-gray-900">
                  What I Am Looking For
                </h4>
                <ul className="space-y-3">
                  {[
                    "Challenging projects that allow me to grow my technical skills",
                    "A collaborative environment where knowledge sharing is encouraged",
                    "Opportunity to work with modern technologies and best practices",
                    "Mentors who can guide my professional development"
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      animate={isMounted ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="mt-1.5 w-3 h-3 rounded-full bg-blue-600"></div>
                      <span className="text-gray-700">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
            
            {/* What I Am Offering Cards */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate={isMounted ? "visible" : "hidden"}
              className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {offerings.map((offering, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.03 }}
                  className="p-5 rounded-xl backdrop-blur-sm border border-gray-200 bg-white/70 text-gray-900 shadow-lg hover:shadow-xl hover:shadow-blue-500/30 hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <motion.span 
                      className="text-xl"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {offering.icon}
                    </motion.span>
                    <h3 className="font-bold text-lg">{offering.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600">{offering.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;