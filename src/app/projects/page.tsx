// frontend/src/app/projects/page.tsx
"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Code2, Monitor, Globe, ExternalLink, Search, Filter, ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { StaticImageData } from "next/image";

// Import project images
import project1Image1 from "../assets/PROJECTS/Project1/image1.png";
import project2Image1 from "../assets/PROJECTS/Project2/image1.png";
import project3Image1 from "../assets/PROJECTS/Project3/image1.png";
import project4Image1 from "../assets/PROJECTS/Project4/image1.png";
import project5Image1 from "../assets/PROJECTS/Project5/image1.png";
import project6Image1 from "../assets/PROJECTS/Project6/image1.png";
import project7Image1 from "../assets/PROJECTS/Project7/image1.png";
import project8Image1 from "../assets/PROJECTS/Project8/image1.png";

// Define project type
interface Project {
  id: number;
  title: string;
  type: string;
  tech: string;
  description: string;
  demoUrl?: string | null;
  images: StaticImageData[];
}

const AllProjects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");

  // Project data with actual demo links
  const projects: Project[] = [
    {
      id: 1,
      title: "Bus Attendance System For School Student",
      type: "Web Application",
      tech: "MERN stack development",
      description: "A comprehensive web application that tracks student attendance on school buses using digital verification. The system helps schools and parents monitor student transportation, ensuring safety and punctuality with real-time updates and notifications.",
      images: [project1Image1],
      demoUrl: null
    },
    {
      id: 2,
      title: "Hotels Management System",
      type: "Web Application",
      tech: "MERN stack Development",
      description: "A complete hotel management solution that handles reservations, room assignments, billing, and customer management. The system streamlines hotel operations, improves guest experience, and provides analytics for better business decisions.",
      images: [project2Image1],
      demoUrl: null
    },
    {
      id: 3,
      title: "Expenses and Incomes Tracking System",
      type: "Web Application",
      tech: "MERN Stack Development",
      description: "A financial management application that helps users track their income and expenses, categorize transactions, and visualize spending patterns. The system provides insights into financial habits and helps users budget more effectively.",
      images: [project3Image1],
      demoUrl: null
    },
    {
      id: 4,
      title: "Portfolio Website",
      type: "Website",
      tech: "Reactjs, Nextjs",
      description: "A modern, responsive portfolio website built with React and Next.js. Features include smooth animations, dark/light theme support, project showcases, and optimized performance. The design focuses on user experience and visual appeal.",
      images: [project4Image1],
      demoUrl: "https://hemo-portfolio.vercel.app/"
    },
    {
      id: 5,
      title: "Restaurant Showcase Website",
      type: "Website",
      tech: "Reactjs, vite",
      description: "A visually appealing restaurant showcase website that highlights menu items, location details, and the restaurant's story. Built with React and Vite for fast loading times and smooth navigation, with an elegant design that reflects the brand identity.",
      images: [project5Image1],
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
      images: [project7Image1],
      demoUrl: null
    },
    {
      id: 8,
      title: "Business Services and Operations Office System",
      type: "Windows Desktop Application",
      tech: "C#, .NET Framework",
      description: "A comprehensive desktop application for managing business services and operations. The system handles client management, operations tracking, document management, and reporting. Designed specifically for office environments with a focus on efficiency and usability.",
      images: [project8Image1],
      demoUrl: null
    }
  ];

  // Filter and search projects
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            project.tech.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesFilter = filterType === 'all' || 
                           (filterType === 'web' && project.type.includes('Web Application')) ||
                           (filterType === 'website' && project.type.includes('Website')) ||
                           (filterType === 'desktop' && project.type.includes('Desktop'));
      
      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, filterType]);

  // Get icon based on project type
  const getProjectIcon = (type: string) => {
    if (type.includes('Desktop')) return <Monitor className="w-5 h-5" />;
    if (type.includes('Web Application')) return <Code2 className="w-5 h-5" />;
    return <Globe className="w-5 h-5" />;
  };

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header with Logo and Back Button */}
      <header className="relative z-30 w-full py-4 sm:py-5 md:py-6 px-4 sm:px-6 md:px-8 lg:px-12 flex justify-between items-center bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
        >
          ETechStudio
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg shadow-md hover:shadow-xl transition-all text-sm sm:text-base group"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="hidden sm:inline">Back to Home</span>
            <span className="sm:hidden">Home</span>
          </Link>
        </motion.div>
      </header>

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

      {/* Main Content */}
      <section className="relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              My <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Projects</span>
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              A collection of my recent work and technical projects
            </p>
          </motion.div>

          {/* Search and Filter Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row gap-4 max-w-3xl mx-auto">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="text-gray-400 w-5 h-5" />
                </div>
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-white/70 backdrop-blur-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 shadow-sm"
                />
              </div>
              
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Filter className="text-gray-400 w-5 h-5" />
                </div>
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="pl-10 pr-8 py-3 rounded-xl border border-gray-200 bg-white/70 backdrop-blur-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none transition-all duration-300 w-full md:w-48 shadow-sm"
                >
                  <option value="all">All Types</option>
                  <option value="web">Web Apps</option>
                  <option value="website">Websites</option>
                  <option value="desktop">Desktop</option>
                </select>
              </div>
            </div>
            
            <div className="mt-4 text-center">
              <p className="text-gray-700">
                Showing <span className="font-semibold text-blue-600">{filteredProjects.length}</span> of <span className="font-semibold">{projects.length}</span> projects
              </p>
            </div>
          </motion.div>

          {/* Projects Grid */}
          {filteredProjects.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-16"
            >
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No projects found</h3>
              <p className="text-gray-700 max-w-md mx-auto">
                Try adjusting your search or filter to find what you are looking for.
              </p>
            </motion.div>
          ) : (
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div 
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -10 }}
                  className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col h-full group border border-gray-200"
                >
                  <div className="p-6 flex-grow">
                    <div className="flex justify-between items-start mb-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white">
                        {getProjectIcon(project.type)}
                      </div>
                    </div>
                    
                    <div className="flex justify-center mb-4">
                      <div className="overflow-hidden rounded-lg border border-gray-200 w-full h-32 flex items-center justify-center">
                        <Image 
                          src={project.images[0]} 
                          alt={project.title} 
                          width={300}
                          height={128}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded-full flex items-center">
                        {getProjectIcon(project.type)} <span className="ml-1">{project.type}</span>
                      </span>
                      {project.tech && (
                        <span className="text-xs font-medium bg-gray-100 text-gray-800 px-2.5 py-0.5 rounded-full">
                          {project.tech}
                        </span>
                      )}
                    </div>
                    
                    <p className="text-gray-700 text-sm line-clamp-3">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="px-6 pb-6">
                    <div className={`flex ${project.demoUrl ? 'justify-between' : 'justify-start'} items-center`}>
                      <Link 
                        href={`/project/${project.id}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium group"
                      >
                        View Details
                        <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                      
                      {project.demoUrl && (
                        <a 
                          href={project.demoUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-gray-700 hover:text-gray-900 text-sm font-medium group"
                        >
                          Live Demo
                          <ExternalLink className="ml-1 w-4 h-4 group-hover:translate-y-[-2px] transition-transform" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default AllProjects;