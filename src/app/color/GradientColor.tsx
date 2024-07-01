import { motion } from "framer-motion";
import React, { ReactNode } from "react";

const GradientColor = ({
  children,
  gradient,
}: {
  children: ReactNode;
  gradient: any;
}) => {
  return (
    <div className="relative">
      <motion.h1
        className={`text-4xl font-extrabold p-1 text-transparent bg-clip-text bg-gradient-to-r ${gradient}`}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        {children}
      </motion.h1>
      <motion.div
        className={`absolute inset-0 blur-3xl opacity-70 bg-gradient-to-r ${gradient}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      ></motion.div>
    </div>
  );
};

export default GradientColor;
