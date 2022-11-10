import '../styles/App.css';
import { motion } from "framer-motion"

const Keyframes = () => {

  return (
    <motion.div
      className="box"
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"]
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1
      }}
    />
  );
}

/*
-CSS
div {
  animation: rotate-all 2s 0 infinite linear alternate;
}
.div1 {
  width: 80px;
  height: 80px;
  background-color: #669999;
  position: relative;
  margin: auto;
  animation: square-to-circle 2.5s .5s infinite cubic-bezier(1,.015,.295,1.225) alternate-reverse;
}
.div2 {
    width: 80px;
  height: 80px;
  background-color: #669999;
  position: relative;
  margin: auto;
  animation: square-to-circle2 2.5s .42s infinite cubic-bezier(1,.015,.295,1.225) alternate-reverse;
}
#one {
  top: 150px;
}
#two {
  top: 150px;
  right: 80px;
}
#three {
  top: 150px;
}
#four {
  bottom: 10px;
  left: 80px;
}
@keyframes square-to-circle {
  0%  {
    border-radius:0 0 0 0;
    background:;
    transform:rotate(45deg);
  }
  25%  {
    border-radius:50% 0 0 0;
    background:darksalmon;
    transform:rotate(135deg);
  }
  50%  {
    border-radius:50% 50% 0 0;
    background:indianred;
    transform:rotate(180deg);
  }
  75%  {
    border-radius:50% 50% 50% 0;
    background:lightcoral;
    transform:rotate(315deg);
  }
  100% {
    border-radius:50%;
    background:darksalmon;
    transform:rotate(404deg);
  }
}
@keyframes square-to-circle2 {
  0%  {
    border-radius:0 0 0 0;
    background:;
    transform:rotate(45deg);
  }
  25%  {
    border-radius:0 0 50% 0;
    background:darksalmon;
    transform:rotate(135deg);
  }
  50%  {
    border-radius:0 0 50% 50%;
    background:indianred;
    transform:rotate(180deg);
  }
  75%  {
    border-radius:50% 0 50% 50%;
    background:lightcoral;
    transform:rotate(315deg);
  }
  100% {
    border-radius:50%;
    background:darksalmon;
    transform:rotate(404deg);
  }
}
-HTML
<body>
    <div class="div1" id="one"></div>
    <div class="div1" id="two"></div>
    <div class="div2" id="three"></div>
    <div class="div2" id="four"></div>
  </body>
*/

export default Keyframes;
