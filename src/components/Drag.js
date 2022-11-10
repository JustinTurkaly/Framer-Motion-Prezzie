import * as React from "react";
import { useRef} from "react";
import { render } from "react-dom";
import { motion } from "framer-motion";

import '../styles/Drag.css';

const Drag = () => {
  const constraintsRef = useRef(null);

  return (
    <>
      <div className="example-container">
      <>
      <motion.div className="drag-area" ref={constraintsRef} />
      <motion.div drag dragConstraints={constraintsRef}/>
    </>
      </div>
    </>
  );
};

export default Drag;