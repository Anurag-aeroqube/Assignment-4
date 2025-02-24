import { useState } from "react";
import { motion } from "framer-motion";

export default function WelcomeButton() {
  const [showText, setShowText] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#3c64b1]/6 text-white">
      {!showText && (
        <motion.button
          className="px-6 py-3 text-lg font-bold bg-blue-500 rounded-2xl shadow-lg hover:bg-blue-600 transition-all"
          whileTap={{ scale: 0.9 }}
          onClick={() => setShowText(true)}
        >
          Click Me
        </motion.button>
      )}
      {showText && (
        <div className="mt-5 flex flex-col items-center">
          <motion.h1
            className="text-4xl font-extrabold font-Nunito-Sans   text-[#373f41]"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Welcome to Villacrest
          </motion.h1>
          <motion.p
            className="mt-2 text-2xl font-mulish font-semibold  text-red-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Page is under development
          </motion.p>
          <motion.img
            src="https://cdn-icons-png.flaticon.com/512/1506/1506764.png"
            alt="Under Construction"
            className="mt-3 w-20 h-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          />
        </div>
      )}
    </div>
  );
}
