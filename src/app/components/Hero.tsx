// frontend/src/app/components/Hero.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  MapPin,
  ArrowDown,
  Download,
} from "lucide-react";

// Import the hero image
import heroImg from "../assets/Hero-img.jpeg";

const Hero = () => {
  const [isMounted] = useState(true);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  const floatVariants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  };

  return (
    <section className="relative h-screen w-full flex flex-col overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

        {/* Animated gradient orbs */}
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

      {/* Header integrated in hero */}
      <header className="relative z-30 w-full py-4 sm:py-5 md:py-6 px-4 sm:px-6 md:px-8 lg:px-12 flex justify-between items-center">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={isMounted ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
        >
          ETechStudio
        </motion.div>

        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={isMounted ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center space-x-2 sm:space-x-4"
        >
          {/* Social Icons */}
          <div className="flex space-x-2 sm:space-x-3">
            <a
              href="https://github.com/SWE-Ebrahim"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 sm:p-2 rounded-full hover:bg-white/50 backdrop-blur-sm transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 hover:text-blue-600" />
            </a>
            <a
              href="https://linkedin.com/in/ebrahim-almahbosh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 sm:p-2 rounded-full hover:bg-white/50 backdrop-blur-sm transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 hover:text-blue-600" />
            </a>
            <a
              href="https://www.instagram.com/ebrahim_techstudio/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 sm:p-2 rounded-full hover:bg-white/50 backdrop-blur-sm transition-all duration-300 hover:scale-110"
              aria-label="instagram"
            >
              <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 hover:text-blue-600" />
            </a>
            <a
              href="mailto:swe.ebrahim@gmail.com"
              className="p-1.5 sm:p-2 rounded-full hover:bg-white/50 backdrop-blur-sm transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 hover:text-blue-600" />
            </a>
          </div>

          <Link href="#contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg shadow-md hover:shadow-xl transition-all text-xs sm:text-sm"
            >
              <span className="hidden sm:inline">Get in Touch</span>
              <span className="sm:hidden">Contact</span>
            </motion.button>
          </Link>
        </motion.div>
      </header>

      {/* Main Content - Centered */}
      <div className="relative z-10 flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex items-center justify-center">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-10 lg:gap-16 w-full">
          {/* Profile Section */}
          <motion.div
            variants={floatVariants}
            initial="initial"
            animate={isMounted ? "animate" : "initial"}
            className="lg:w-1/2 flex justify-center"
          >
            <div className="relative">
              {/* Glowing ring effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>

              {/* Main image container */}
              <div className="relative w-40 h-40 xs:w-48 xs:h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden border-4 sm:border-[6px] border-white shadow-2xl ring-4 ring-blue-100/50">
                <Image
                  src={heroImg}
                  alt="Ebrahim Almahbosh - Full Stack Developer"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-700"
                  priority
                  sizes="(max-width: 475px) 160px, (max-width: 640px) 192px, (max-width: 768px) 224px, (max-width: 1024px) 256px, (max-width: 1280px) 288px, 320px"
                />
              </div>

              {/* Decorative elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear" as const,
                }}
                className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 md:-top-4 md:-right-4 lg:-top-6 lg:-right-6 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full opacity-20 blur-2xl"
              ></motion.div>

              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear" as const,
                }}
                className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 md:-bottom-4 md:-left-4 lg:-bottom-6 lg:-left-6 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-20 blur-2xl"
              ></motion.div>

              {/* Status badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isMounted ? { scale: 1 } : {}}
                transition={{ delay: 1, type: "spring", stiffness: 200 }}
                className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 md:bottom-3 md:right-3 bg-white rounded-full p-1.5 sm:p-2 md:p-2.5 shadow-xl border-2 sm:border-3 border-slate-50"
              >
                <div className="relative flex items-center justify-center">
                  <span className="absolute w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 bg-green-500 rounded-full animate-ping"></span>
                  <span className="relative w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 bg-green-500 rounded-full border-2 border-white"></span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isMounted ? "visible" : "hidden"}
            className="lg:w-1/2 text-center lg:text-left space-y-3 sm:space-y-4 md:space-y-5 max-w-3xl"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-600 rounded-full text-xs sm:text-sm font-semibold backdrop-blur-sm border-2 border-blue-200 shadow-sm hover:shadow-md transition-shadow">
                👋 Welcome to my portfolio
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight"
            >
              <span className="block text-gray-900 mb-1 sm:mb-2">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">
                  Ebrahim
                </span>
              </span>
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-700"
            >
              Full Stack Developer
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              I create beautiful, responsive websites and applications with
              modern technologies. Passionate about solving problems and
              building intuitive user experiences.
            </motion.p>

            {/* Download CV Button */}
            <motion.div
              variants={itemVariants}
              className="pt-2"
            >
              <motion.a
                href="/Ebrahim_Almahbosh_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Ebrahim_Almahbosh_Resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto min-w-[180px] px-5 py-2.5 sm:px-6 sm:py-3 md:px-7 md:py-3.5 bg-white text-gray-800 font-bold rounded-xl shadow-lg hover:shadow-2xl border-2 border-gray-300 hover:border-blue-500 hover:text-blue-600 transition-all backdrop-blur-sm text-sm sm:text-base"
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                Download CV
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;