import '../styles/App.css';
import { motion } from "framer-motion"
import { useState } from 'react';

const StateSlider = () => {
  const [animate, setAnimate] = useState(false);

  return (
      <motion.div
      className="box"
      // animate={{x: animate ? -100 : 100}}
      animate={{rotate: animate ? 360 : 0}}
      onClick={()=>{setAnimate(!animate)}}
      />
      );
    }

    export default StateSlider;
