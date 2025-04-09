import React from "react";
import { motion } from "framer-motion";
import { FaCar } from "react-icons/fa"; // Car icon from react-icons

const Quicklift = () => {
  return (
    <div className="h-screen flex justify-center items-center flex-col relative">
      {/* Text Animation with Maroon and Black Transition */}
      <h1 className="text-6xl font-bold flex items-center">
        <motion.span
          className="text-red-800"
          initial={{ opacity: 0, rotate: -10 }}
          animate={{
            opacity: 1,
            y: [0, -30, 0, -15, 0], // Advanced bounce with more steps
            rotate: [0, 10, -10, 5, 0], // Rotate back and forth for added dynamic effect
            scale: [1, 1.2, 1, 1.1, 1], // Scaling effect during bounce
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "anticipate",
          }}
        >
          Q
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 0],
            transition: {
              duration: 2.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            },
          }}
          className="text-black"
        >
          uick{" "}
        </motion.span>
        <motion.span
          className="text-red-800"
          initial={{ opacity: 0, rotate: 10 }}
          animate={{
            opacity: 1,
            y: [0, -30, 0, -15, 0], // Advanced bounce with more steps
            rotate: [0, -10, 10, -5, 0], // Rotate back and forth for added dynamic effect
            scale: [1, 1.2, 1, 1.1, 1], // Scaling effect during bounce
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "anticipate",
          }}
        >
          {" "}L
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 0],
            transition: {
              duration: 2.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            },
          }}
          className="text-black"
        >
          ift
        </motion.span>
      </h1>

  

      {/* Car Animation - Centered */}
      <motion.div
        className="absolute bottom-10 flex items-center"
        animate={{ x: ["100%", "-100%"] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      >
        <FaCar size={40} className="text-gray-800" />
      </motion.div>
    </div>
  );
};

export default Quicklift;
