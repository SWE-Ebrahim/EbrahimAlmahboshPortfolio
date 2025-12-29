// frontend/src/app/components/Footer.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Instagram, Github, ArrowUp, Code2 } from "lucide-react";

const Footer = () => {
  const [isMounted] = useState(true);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1] as const
      }
    }
  };

  // Smooth scroll function
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 border-t-2 border-blue-200/50">
      {/* Background elements - matching theme */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        
        {/* Animated gradient orbs - matching theme */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-3xl"
        ></motion.div>

        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute top-1/3 right-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl"
        ></motion.div>

        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 12, repeat: Infinity, delay: 4 }}
          className="absolute bottom-1/4 left-1/2 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full mix-blend-multiply filter blur-3xl"
        ></motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.95 }}
        className="absolute -top-6 right-4 sm:right-8 md:right-12 lg:right-16 p-3 sm:p-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-2xl hover:shadow-blue-500/50 transition-all z-20"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6" />
      </motion.button>

      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-16 sm:pt-20 pb-8 sm:pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16">
          
          {/* Brand and Description */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isMounted ? "visible" : "hidden"}
            className="lg:col-span-2 space-y-4 sm:space-y-6"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  ETechStudio
                </span>
              </h3>
              <p className="text-sm sm:text-base text-gray-600 font-medium">Full Stack Developer & Software Engineer</p>
            </motion.div>
            
            <motion.p variants={itemVariants} className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-md">
              Crafting innovative digital solutions with modern technologies. 
              Specializing in full-stack development, creating scalable applications, 
              and delivering exceptional user experiences.
            </motion.p>
            
            {/* Social Links */}
            <motion.div variants={itemVariants} className="space-y-3">
              <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Connect With Me</p>
              <div className="flex flex-wrap gap-3">
                <a 
                  href="https://github.com/SWE-Ebrahim" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group p-3 rounded-xl bg-white/70 backdrop-blur-sm border-2 border-gray-200 hover:bg-white hover:border-blue-400 hover:shadow-lg transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5 text-gray-700 group-hover:text-blue-600 transition-colors" />
                </a>
                <a 
                  href="https://linkedin.com/in/ebrahim-almahbosh" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group p-3 rounded-xl bg-white/70 backdrop-blur-sm border-2 border-gray-200 hover:bg-white hover:border-blue-400 hover:shadow-lg transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-gray-700 group-hover:text-blue-600 transition-colors" />
                </a>
                <a 
                  href="https://www.instagram.com/ebrahim_techstudio"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group p-3 rounded-xl bg-white/70 backdrop-blur-sm border-2 border-gray-200 hover:bg-white hover:border-blue-400 hover:shadow-lg transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-gray-700 group-hover:text-blue-600 transition-colors" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isMounted ? "visible" : "hidden"}
            className="space-y-4 sm:space-y-6"
          >
            <motion.h3 variants={itemVariants} className="text-lg sm:text-xl font-bold text-gray-900">
              Quick Links
            </motion.h3>
            <motion.ul variants={itemVariants} className="space-y-3">
              {[
                { name: "About", id: "about" },
                { name: "Projects", id: "projects" },
                { name: "Education", id: "education" },
                { name: "Contact", id: "contact" }
              ].map((link, index) => (
                <motion.li 
                  key={index} 
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  className="transition-all"
                >
                  <button 
                    onClick={() => scrollToSection(link.id)}
                    className="group text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-2 text-sm sm:text-base font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </button>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isMounted ? "visible" : "hidden"}
            className="space-y-4 sm:space-y-6"
          >
            <motion.h3 variants={itemVariants} className="text-lg sm:text-xl font-bold text-gray-900">
              Contact Info
            </motion.h3>
            <motion.ul variants={itemVariants} className="space-y-4">
              {[
                { 
                  icon: <Mail className="w-5 h-5" />, 
                  text: "swe.ebrahim@gmail.com", 
                  link: "mailto:swe.ebrahim@gmail.com" 
                },
                { 
                  icon: <Phone className="w-5 h-5" />, 
                  text: "+971 56 797 7697", 
                  link: "tel:+971567977697" 
                },
                { 
                  icon: <MapPin className="w-5 h-5" />, 
                  text: "Dubai, UAE", 
                  link: null 
                }
              ].map((contact, index) => (
                <motion.li 
                  key={index} 
                  variants={itemVariants}
                  className="flex items-start gap-3 group"
                >
                  <div className="p-2 rounded-lg bg-blue-100 text-blue-600 group-hover:bg-blue-200 transition-colors">
                    {contact.icon}
                  </div>
                  <div className="flex-1">
                    {contact.link ? (
                      <a 
                        href={contact.link} 
                        className="text-gray-700 hover:text-blue-600 transition-colors text-sm sm:text-base break-all font-medium"
                      >
                        {contact.text}
                      </a>
                    ) : (
                      <span className="text-gray-700 text-sm sm:text-base font-medium">
                        {contact.text}
                      </span>
                    )}
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>

        {/* Divider with decorative element */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t-2 border-gray-200"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 px-4">
              <Code2 className="w-6 h-6 text-blue-600" />
            </span>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <motion.p 
            variants={itemVariants}
            initial={{ opacity: 0 }}
            animate={isMounted ? { opacity: 1 } : {}}
            className="text-xs sm:text-sm text-gray-600 text-center sm:text-left font-medium"
          >
            © {new Date().getFullYear()} Ebrahim Almahbosh. All rights reserved.
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            initial={{ opacity: 0 }}
            animate={isMounted ? { opacity: 1 } : {}}
            className="flex items-center gap-2 text-xs sm:text-sm text-gray-600"
          >
            <span className="font-medium">Powered by</span>
            <span className="font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              React & Next.js
            </span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;