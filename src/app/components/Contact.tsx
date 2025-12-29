/* eslint-disable react/no-unescaped-entities */
// frontend/src/app/components/Contact.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Instagram, ExternalLink } from "lucide-react";

const Contact = () => {
  const [isMounted] = useState(true);

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      value: "swe.ebrahim@gmail.com",
      link: "mailto:swe.ebrahim@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      value: "+971 56 797 7697",
      link: "tel:+971567977697"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Location",
      value: "Dubai, UAE",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      title: "LinkedIn",
      value: "linkedin.com/in/ebrahim-almahbosh",
      link: "https://www.linkedin.com/in/ebrahim-almahbosh"
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      title: "Instagram",
      value: "@ebrahim_techstudio",
      link: "https://www.instagram.com/ebrahim_techstudio"
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
      id="contact"
      className="relative min-h-screen w-full flex flex-col overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"
    >
      {/* Background elements */}
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
              Get In <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
            <p className="mt-6 text-base sm:text-lg max-w-2xl mx-auto text-gray-700">
              Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Information */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isMounted ? "visible" : "hidden"}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Let's Talk About Your Project
                </h2>
                <p className="text-base sm:text-lg text-gray-700">
                  I am open to discussing new opportunities, freelance work, or potential collaborations. 
                  Whether you have a question or just want to connect, feel free to reach out!
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-4 p-5 rounded-xl backdrop-blur-sm border border-gray-200 bg-white/70 text-gray-900 shadow-lg hover:shadow-xl hover:shadow-blue-500/20 hover:border-blue-500/50 transition-all duration-300"
                  >
                    <div className="p-3 rounded-lg bg-blue-100 text-blue-600">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">
                        {info.title}
                      </h3>
                      {info.link ? (
                        <a 
                          href={info.link} 
                          className="hover:underline flex items-center gap-1 text-gray-700"
                        >
                          {info.value}
                          {info.link.startsWith('http') && <ExternalLink className="w-4 h-4 inline" />}
                        </a>
                      ) : (
                        <p className="text-gray-700">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Social Media Links */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isMounted ? "visible" : "hidden"}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Connect With Me
                </h2>
                <p className="text-base sm:text-lg text-gray-700">
                  Follow me on social media to stay updated with my latest projects, 
                  thoughts, and professional journey.
                </p>
              </div>

              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={itemVariants}
                    whileHover={{ x: 5, scale: 1.02 }}
                    className="flex items-center gap-4 p-5 rounded-xl backdrop-blur-sm border border-gray-200 bg-white/70 text-gray-900 shadow-lg hover:shadow-xl hover:shadow-blue-500/20 hover:border-blue-500/50 transition-all duration-300"
                  >
                    <div className="p-3 rounded-lg bg-blue-100 text-blue-600">
                      {social.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">
                        {social.title}
                      </h3>
                      <p className="flex items-center gap-1 text-gray-700">
                        {social.value}
                        <ExternalLink className="w-4 h-4 inline" />
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
              
              <motion.div 
                variants={itemVariants}
                className="mt-8 p-5 rounded-xl backdrop-blur-sm border border-gray-200 bg-white/70"
              >
                <h3 className="font-bold text-gray-900 mb-2">
                  Preferred Contact Method
                </h3>
                <p className="text-gray-700">
                  I respond fastest to emails. For professional inquiries, I recommend reaching out via email.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;