/* eslint-disable react-hooks/set-state-in-effect */
// frontend/src/app/project/[id]/page.tsx
"use client";

import { useState, useEffect, use } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { StaticImageData } from "next/image";

// Import project images
import project1Image1 from "../../assets/PROJECTS/Project1/image1.png";
import project1Image2 from "../../assets/PROJECTS/Project1/image2.png";
import project1Image3 from "../../assets/PROJECTS/Project1/image3.png";
import project1Image4 from "../../assets/PROJECTS/Project1/image4.png";
import project1Image5 from "../../assets/PROJECTS/Project1/image5.png";
import project1Image6 from "../../assets/PROJECTS/Project1/image6.png";
import project1Image7 from "../../assets/PROJECTS/Project1/image7.png";

import project2Image1 from "../../assets/PROJECTS/Project2/image1.png";
import project2Image2 from "../../assets/PROJECTS/Project2/image2.png";
import project2Image3 from "../../assets/PROJECTS/Project2/image3.png";
import project2Image4 from "../../assets/PROJECTS/Project2/image4.png";
import project2Image5 from "../../assets/PROJECTS/Project2/image5.png";
import project2Image6 from "../../assets/PROJECTS/Project2/image6.png";
import project2Image7 from "../../assets/PROJECTS/Project2/image7.png";
import project2Image8 from "../../assets/PROJECTS/Project2/image8.png";
import project2Image9 from "../../assets/PROJECTS/Project2/image9.png";
import project2Image10 from "../../assets/PROJECTS/Project2/image10.png";

import project3Image1 from "../../assets/PROJECTS/Project3/image1.png";
import project3Image2 from "../../assets/PROJECTS/Project3/image2.png";
import project3Image3 from "../../assets/PROJECTS/Project3/image3.png";
import project3Image4 from "../../assets/PROJECTS/Project3/image4.png";
import project3Image5 from "../../assets/PROJECTS/Project3/image5.png";
import project3Image6 from "../../assets/PROJECTS/Project3/image6.png";
import project3Image7 from "../../assets/PROJECTS/Project3/image7.png";
import project3Image8 from "../../assets/PROJECTS/Project3/image8.png";
import project3Image9 from "../../assets/PROJECTS/Project3/image9.png";

import project4Image1 from "../../assets/PROJECTS/Project4/image1.png";
import project4Image2 from "../../assets/PROJECTS/Project4/image2.png";

import project5Image1 from "../../assets/PROJECTS/Project5/image1.png";
import project5Image2 from "../../assets/PROJECTS/Project5/image2.png";
import project5Image3 from "../../assets/PROJECTS/Project5/image3.png";

import project6Image1 from "../../assets/PROJECTS/Project6/image1.png";

import project7Image1 from "../../assets/PROJECTS/Project7/image1.png";
import project7Image2 from "../../assets/PROJECTS/Project7/image2.png";
import project7Image3 from "../../assets/PROJECTS/Project7/image3.png";
import project7Image4 from "../../assets/PROJECTS/Project7/image4.png";
import project7Image5 from "../../assets/PROJECTS/Project7/image5.png";

import project8Image1 from "../../assets/PROJECTS/Project8/image1.png";
import project8Image2 from "../../assets/PROJECTS/Project8/image2.png";
import project8Image3 from "../../assets/PROJECTS/Project8/image3.png";
import project8Image4 from "../../assets/PROJECTS/Project8/image4.png";
import project8Image5 from "../../assets/PROJECTS/Project8/image5.png";
import project8Image6 from "../../assets/PROJECTS/Project8/image6.png";
import project8Image7 from "../../assets/PROJECTS/Project8/image7.png";
import project8Image8 from "../../assets/PROJECTS/Project8/image8.png";
import project8Image9 from "../../assets/PROJECTS/Project8/image9.png";
import project8Image10 from "../../assets/PROJECTS/Project8/image10.png";
import project8Image11 from "../../assets/PROJECTS/Project8/image11.png";
import project8Image12 from "../../assets/PROJECTS/Project8/image12.png";
import project8Image13 from "../../assets/PROJECTS/Project8/image13.png";
import project8Image14 from "../../assets/PROJECTS/Project8/image14.png";
import project8Image15 from "../../assets/PROJECTS/Project8/image15.png";
import project8Image16 from "../../assets/PROJECTS/Project8/image16.png";

// Define project type
interface Project {
  id: number;
  title: string;
  type: string;
  tech: string;
  description: string;
  images: StaticImageData[];
  demoUrl?: string | null;
}

export default function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [project, setProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Project data with actual demo URLs
  useEffect(() => {
    const projects: Project[] = [
      {
        id: 1,
        title: "Bus Attendance System For School Student",
        type: "Web Application",
        tech: "MERN stack development",
        description: "A comprehensive web application that tracks student attendance on school buses using digital verification. The system helps schools and parents monitor student transportation, ensuring safety and punctuality with real-time updates and notifications.",
        images: [
          project1Image1, project1Image2, project1Image3, 
          project1Image4, project1Image5, project1Image6, project1Image7
        ],
        demoUrl: null
      },
      {
        id: 2,
        title: "Hotels Management System",
        type: "Web Application",
        tech: "MERN stack Development",
        description: "A complete hotel management solution that handles reservations, room assignments, billing, and customer management. The system streamlines hotel operations, improves guest experience, and provides analytics for better business decisions.",
        images: [
          project2Image1, project2Image2, project2Image3, project2Image4, 
          project2Image5, project2Image6, project2Image7, project2Image8, 
          project2Image9, project2Image10
        ],
        demoUrl: null
      },
      {
        id: 3,
        title: "Expenses and Incomes Tracking System",
        type: "Web Application",
        tech: "MERN Stack Development",
        description: "A financial management application that helps users track their income and expenses, categorize transactions, and visualize spending patterns. The system provides insights into financial habits and helps users budget more effectively.",
        images: [
          project3Image1, project3Image2, project3Image3, project3Image4, 
          project3Image5, project3Image6, project3Image7, project3Image8, project3Image9
        ],
        demoUrl: null
      },
      {
        id: 4,
        title: "Portfolio Website",
        type: "Website",
        tech: "Reactjs, Nextjs",
        description: "A modern, responsive portfolio website built with React and Next.js. Features include smooth animations, dark/light theme support, project showcases, and optimized performance. The design focuses on user experience and visual appeal.",
        images: [project4Image1, project4Image2],
        demoUrl: "https://hemo-portfolio.vercel.app/"
      },
      {
        id: 5,
        title: "Restaurant Showcase Website",
        type: "Website",
        tech: "Reactjs, vite",
        description: "A visually appealing restaurant showcase website that highlights menu items, location details, and the restaurant's story. Built with React and Vite for fast loading times and smooth navigation, with an elegant design that reflects the brand identity.",
        images: [project5Image1, project5Image2, project5Image3],
        demoUrl: "https://bella-cucina-two.vercel.app/"
      },
      {
        id: 6,
        title: "SaaS Landing Page",
        type: "Website",
        tech: "Reactjs, Nextjs",
        description: "A modern landing page for a SaaS product, featuring a clean design, responsive layout, and conversion-optimized sections. Includes features, pricing, testimonials, and a clear call-to-action designed to convert visitors into customers.",
        images: [project6Image1],
        demoUrl: "https://saa-s-landing-page-blush.vercel.app/"
      },
      {
        id: 7,
        title: "Authentication System",
        type: "Web Application",
        tech: "MERN Stack Development",
        description: "A secure authentication system with features like user registration, login, password reset, and role-based access control. Implements JWT tokens for secure session management and includes protection against common security vulnerabilities.",
        images: [project7Image1, project7Image2, project7Image3, project7Image4, project7Image5],
        demoUrl: null
      },
      {
        id: 8,
        title: "Business Services and Operations Office System",
        type: "Windows Desktop Application",
        tech: "C#, .NET Framework",
        description: "A comprehensive desktop application for managing business services and operations. The system handles client management, operations tracking, document management, and reporting. Designed specifically for office environments with a focus on efficiency and usability.",
        images: [
          project8Image1, project8Image2, project8Image3, project8Image4, 
          project8Image5, project8Image6, project8Image7, project8Image8, 
          project8Image9, project8Image10, project8Image11, project8Image12, 
          project8Image13, project8Image14, project8Image15, project8Image16
        ],
        demoUrl: null
      }
    ];

    const foundProject = projects.find(p => p.id === parseInt(id));
    setProject(foundProject || null);
  }, [id]);

  const nextImage = () => {
    if (project) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevImage = () => {
    if (project) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
      );
    }
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center py-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Project not found</h2>
          <p className="text-gray-700 mb-6">The requested project does not exist.</p>
          <Link 
            href="/projects" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" /> Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-3xl"
        ></motion.div>

        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute top-1/3 right-1/4 w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl"
        ></motion.div>

        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, delay: 4 }}
          className="absolute bottom-1/4 left-1/2 w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full mix-blend-multiply filter blur-3xl"
        ></motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-6">
          <Link 
            href="/projects" 
            className="inline-flex items-center gap-2 font-medium text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" /> Back to Projects
          </Link>
        </div>

        <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-200">
          <div className="p-6 md:p-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Image Gallery Section */}
              <div className="lg:w-2/3">
                <div className="relative group">
                  <div className="overflow-hidden rounded-lg border border-gray-200 w-full h-64 md:h-96 flex items-center justify-center bg-gray-50">
                    <Image 
                      src={project.images[currentImageIndex]} 
                      alt={`${project.title} - Image ${currentImageIndex + 1}`} 
                      width={800}
                      height={600}
                      className="w-full h-full object-contain"
                      priority
                    />
                  </div>
                  
                  {project.images.length > 1 && (
                    <>
                      <button 
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        aria-label="Previous image"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      
                      <button 
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        aria-label="Next image"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </>
                  )}
                  
                  {/* Dot indicators */}
                  {project.images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {project.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => goToImage(index)}
                          className={`w-3 h-3 rounded-full transition-all ${
                            index === currentImageIndex ? 'bg-white w-6' : 'bg-white/50'
                          }`}
                          aria-label={`Go to image ${index + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Thumbnail strip */}
                {project.images.length > 1 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.images.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => goToImage(index)}
                        className={`w-16 h-16 sm:w-20 sm:h-20 rounded-md overflow-hidden border-2 transition-all ${
                          index === currentImageIndex 
                            ? 'border-blue-500 ring-2 ring-blue-200' 
                            : 'border-gray-200 hover:border-blue-300'
                        }`}
                      >
                        <Image 
                          src={img} 
                          alt={`Thumbnail ${index + 1}`} 
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Project Details Section */}
              <div className="lg:w-1/3">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{project.title}</h1>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-sm font-medium bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                    {project.type}
                  </span>
                  {project.tech && (
                    <span className="text-sm font-medium bg-gray-100 text-gray-800 px-3 py-1 rounded-full">
                      {project.tech}
                    </span>
                  )}
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  {project.description}
                </p>
                
                {/* Only show Live Demo button if demoUrl exists */}
                {project.demoUrl && (
                  <div className="mt-6">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      View Live Demo
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}