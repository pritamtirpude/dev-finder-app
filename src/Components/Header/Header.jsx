import { iconMoon, iconSun } from "../../assets";
import useColorMode from "../../hooks/useColorMode";
import { motion, AnimatePresence } from "framer-motion";
import { iconAnimation } from "../../../animation";
import { useState } from "react";

const Header = () => {
  const [colorMode, setColorMode] = useColorMode();
  const [isSwitched, setIsSwitched] = useState(false);

  return (
    <div className="py-3 flex justify-between items-center">
      <div className="overflow-hidden">
        <motion.h1
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.75,
            type: "spring",
          }}
          className="text-3xl font-bold text-[#4b6a9b] dark:text-white"
        >
          devfinder
        </motion.h1>
      </div>
      <div
        className="flex gap-5 items-center cursor-pointer"
        onClick={() => {
          setColorMode(colorMode === "light" ? "dark" : "light");
          setIsSwitched((prevState) => !prevState);
        }}
      >
        <motion.h2
          layout
          className="text-[0.8rem] uppercase tracking-[0.2rem] font-bold text-[#4b6a9b] dark:text-white"
        >
          {colorMode === "light" ? "Dark" : "Light"}
        </motion.h2>
        <motion.div layout className="overflow-hidden">
          <AnimatePresence key={isSwitched ? "sun" : "moon"}>
            <motion.img
              variants={iconAnimation}
              initial="hidden"
              animate="show"
              key={isSwitched ? "sun" : "moon"}
              exit="exit"
              src={colorMode === "light" ? iconMoon : iconSun}
              alt={isSwitched ? "Sun" : "Moon"}
            />
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
