// src/pages/intro/IntroPage.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaComments, FaRocket } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';

const IntroPage = () => {
  const navigate = useNavigate();
  const handleStart = () => navigate('/login');
  const aboutRef = useRef(null);

  const handleScroll = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Typing effect setup
  const fullText = 'Welcome to ChatVerse 🚀';
  const [typedText, setTypedText] = useState('');
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-screen h-screen overflow-y-auto">
      <div className="relative min-h-screen bg-gradient-to-tr from-indigo-700 via-purple-700 to-pink-600 flex flex-col items-center justify-center overflow-hidden">
        {/* Animated Background Blobs */}
        <motion.div
          className="absolute w-[350px] h-[350px] bg-pink-400 rounded-full blur-3xl opacity-20 top-[-100px] left-[-100px]"
          animate={{ x: [0, 30, -30, 0], y: [0, -20, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-[300px] h-[300px] bg-indigo-400 rounded-full blur-3xl opacity-20 bottom-[-80px] right-[-80px]"
          animate={{ x: [0, -30, 30, 0], y: [0, 20, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-[250px] h-[250px] bg-purple-300 rounded-full blur-3xl opacity-20 top-[20%] right-[20%]"
          animate={{ x: [0, 15, -15, 0], y: [0, -15, 15, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center px-4 max-w-2xl z-10"
        >
          <div className="flex justify-center mb-6 text-5xl text-white drop-shadow-md">
            <FaComments className="mr-3" />
            <FaRocket />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-300 drop-shadow-lg h-16">
            {typedText}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-lg md:text-xl mb-8 text-white/90"
          >
            Real-time chat built with ❤️ using the MERN stack.<br />
            Connect, share, and chat — instantly.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: '#f3e8ff', color: '#7e22ce' }}
            whileTap={{ scale: 0.95 }}
            onClick={handleStart}
            className="bg-white text-purple-700 px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition duration-300"
          >
            Get Started
          </motion.button>

          <div className="mt-10 cursor-pointer" onClick={handleScroll}>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-white text-3xl"
            >
              <IoIosArrowDown />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* About Section */}
      <div ref={aboutRef} className="w-full bg-red-200 py-20 px-6 md:px-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl font-bold text-purple-700 mb-6"
        >
          About ChatVerse
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto"
        >
          ChatVerse is a modern real-time chat application built with the MERN stack and WebSockets. <br />
          Designed for seamless, fast, and secure communication with a beautiful interface.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-10 text-gray-600"
        >
          Built by <span className="font-semibold text-purple-600">Your Name</span> with ❤️ and creativity.
        </motion.div>
      </div>
    </div>
  );
};

export default IntroPage;
