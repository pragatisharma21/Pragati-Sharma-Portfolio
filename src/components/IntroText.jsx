import { motion } from "framer-motion";

const IntroText = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.5,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="absolute top-[40%] left-[10%] text-left">
      <motion.div
        className="flex items-end gap-10 mb-5"
        initial="hidden"
        animate="visible"
        variants={textVariants}
        custom={0}
      >
        <motion.p
          className="font-bold md:text-8xl text-4xl  text-blue-400 glow-blue"
          custom={0}
          variants={textVariants}
        >
          Hello
        </motion.p>
        <motion.p
          className="font-bold md:text-5xl text-3xl text-white glow-blue"
          custom={1}
          variants={textVariants}
        >
          I am
        </motion.p>
      </motion.div>

      {/* Line 2 */}
      <div className="flex gap-2 glow-white text-3xl md:text-8xl">
        <motion.p
          className="font-bold  text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500"
          initial="hidden"
          animate="visible"
          custom={2}
          variants={textVariants}
        >
          Pragati
        </motion.p>
        <motion.p
          className="font-bold  text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500"
          initial="hidden"
          animate="visible"
          custom={3}
          variants={textVariants}
        >
          Sharma
        </motion.p>
        
      </div>
      <motion.p
          className="font-bold text-2xl mt-5 capitalize text-white miniTitle"
          initial="hidden"
          animate="visible"
          custom={4}
          variants={textVariants}
        >
          aspiring web developer
        </motion.p>
    </div>
  );
};

export default IntroText;
