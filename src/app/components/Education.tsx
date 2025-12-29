// frontend/src/app/components/Education.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Award, Calendar } from "lucide-react";
import Image from "next/image";
import { StaticImageData } from "next/image";

// Import certificate images
import bachelorDegreeImg from "../assets/BachelorDegree.jpeg";
import albayanCertificateImg from "../assets/Certificate_ALBAYAN_Training Course in Engineering Software.jpeg";
import internationalAcademyCertificateImg from "../assets/Certificate_InternationlAcademy_Training Course in Engineering Software.jpeg";
import ntccCertificateImg from "../assets/Certificate_NTC_Training Course in Engineering Software.jpeg";
import level4DiplomaImg from "../assets/Level4_Diploma.jpeg";
import level5DiplomaImg from "../assets/Level5_Diploma.jpeg";

// Define certificate type
interface Certificate {
  id: number;
  title: string;
  description: string;
  date: string;
  image: StaticImageData;
}

const Education = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [isMounted, setIsMounted] = useState(true); // 直接初始化，避免在 effect 中设置

  // Effect to handle body overflow when modal is open
  useEffect(() => {
    if (selectedCertificate) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedCertificate]);

  // Education and certificates data
  const certificates: Certificate[] = [
    {
      id: 1,
      title: "Bachelor of Engineering Degree",
      description: "Bachelor of Engineering with Second Class Honours, First Division in Software Engineering from the University of Greater Manchester.",
      date: "October 2025",
      image: bachelorDegreeImg
    },
    {
      id: 2,
      title: "Software Engineering Training Certificate",
      description: "Training Course in Engineering Software with Excellent grade from Albayan Institute Education Support Services.",
      date: "May - August 2024",
      image: albayanCertificateImg
    },
    {
      id: 3,
      title: "Software Engineering Training Certificate",
      description: "Training Course in Engineering Software from International Academy for Leadership and Management LTD.",
      date: "May 2024",
      image: internationalAcademyCertificateImg
    },
    {
      id: 4,
      title: "Software Engineering Training Certificate",
      description: "Training Course in Engineering Software with Excellent grade from National Training Center (NTC), accredited by multiple educational authorities.",
      date: "May - August 2024",
      image: ntccCertificateImg
    },
    {
      id: 5,
      title: "Level 4 Diploma in Computing",
      description: "Level 4 Diploma in Computing from NCC Education with 59% Pass mark. Delivered by Institute of Engineering, Technology & Innovation FZ-LLC, UAE.",
      date: "July 2023",
      image: level4DiplomaImg
    },
    {
      id: 6,
      title: "Level 5 Diploma in Computing",
      description: "Level 5 Diploma in Computing from NCC Education with 77% Distinction mark. Delivered by Impact Business Traits and Efficiency Training Institute, UAE.",
      date: "July 2024",
      image: level5DiplomaImg
    }
  ];

  const openModal = (certificate: Certificate) => {
    setSelectedCertificate(certificate);
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };

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

  return (
    <section 
      id="education"
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"
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
          className="absolute top-1/4 left-1/4 w-24 h-24 xs:w-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-3xl"
        ></motion.div>

        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute top-1/3 right-1/4 w-24 h-24 xs:w-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl"
        ></motion.div>

        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 12, repeat: Infinity, delay: 4 }}
          className="absolute bottom-1/4 left-1/2 w-24 h-24 xs:w-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full mix-blend-multiply filter blur-3xl"
        ></motion.div>
      </div>

      {/* Content container - centered vertically */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex items-center justify-center">
        <div className="w-full py-8 sm:py-12 md:py-16">
          
          {/* Header - Compact */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isMounted ? "visible" : "hidden"}
            className="text-center mb-6 sm:mb-8"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-600 rounded-full text-xs font-semibold backdrop-blur-sm border-2 border-blue-200 shadow-sm mb-3 sm:mb-4"
            >
              <Award className="w-3.5 h-3.5" />
              Academic Journey
            </motion.div>
            
            <motion.h2 
              variants={itemVariants}
              className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-gray-900"
            >
              Education &{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Certificates
              </span>
            </motion.h2>
            
            <motion.div 
              variants={itemVariants}
              className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"
            ></motion.div>
          </motion.div>

          {/* Certificates Grid - Compact */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isMounted ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
          >
            {certificates.map((certificate) => (
              <motion.div
                key={certificate.id}
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="group rounded-lg shadow-md border overflow-hidden cursor-pointer transition-all duration-300 bg-white/80 backdrop-blur-sm border-gray-200 hover:bg-white hover:shadow-lg hover:shadow-blue-500/20 hover:border-blue-500/50"
                onClick={() => openModal(certificate)}
              >
                {/* Certificate Image - Compact */}
                <div className="relative h-24 xs:h-28 sm:h-32 md:h-36 w-full overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                  <div className="absolute inset-0 flex items-center justify-center p-1 sm:p-2">
                    <div className="relative w-full h-full">
                      <Image 
                        src={certificate.image} 
                        alt={certificate.title}
                        fill
                        className="object-contain transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  </div>
                  
                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Certificate Info - Compact */}
                <div className="p-3 sm:p-4">
                  <h3 className="text-xs xs:text-sm font-bold leading-tight text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {certificate.title}
                  </h3>
                  
                  <div className="flex items-center gap-1 mb-2 text-blue-600">
                    <Calendar className="w-3 h-3 flex-shrink-0" />
                    <span className="text-[10px] xs:text-xs font-medium">
                      {certificate.date}
                    </span>
                  </div>
                  
                  <p className="text-[9px] xs:text-[10px] sm:text-xs text-gray-600 leading-relaxed line-clamp-2 mb-2">
                    {certificate.description}
                  </p>
                  
                  {/* View badge */}
                  <div className="inline-flex items-center gap-1 text-blue-600 text-[10px] font-semibold group-hover:gap-1.5 transition-all">
                    <span>View</span>
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Full-screen Modal - Image Only */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[100] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeModal}
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              onClick={closeModal}
              className="fixed top-4 right-4 z-[110] p-2.5 rounded-xl bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all duration-300 shadow-2xl border border-white/20 hover:scale-110"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </motion.button>

            {/* Certificate Image - Full Screen */}
            <motion.div
              className="relative w-full h-full"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image 
                src={selectedCertificate.image} 
                alt={selectedCertificate.title}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Education;