import "../styles/ThreeD.css";
import { useRef } from "react";
import { useAnimationFrame } from "framer-motion";

export default function ThreeD() {
  const ref = useRef(null);

  useAnimationFrame((t) => {
    const rotate = Math.sin(t / 10000) * 200;
    const y = (1 + Math.sin(t / 1000)) * -50;
    ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
  });

  return (
    <div className="container">
      <div className="cube" ref={ref}>
        <div className="side front" />
        <div className="side left" />
        <div className="side right" />
        <div className="side top" />
        <div className="side bottom" />
        <div className="side back" />
      </div>
    </div>
  );
}


/*
//CSS
* {
  margin: 0px;
  padding: 0px;
}

html, body {
  width: 100%;
  height: 100%;
}

.cube {
  -webkit-transform-style: preserve-3d;
  -webkit-animation: spin 3s infinite ease-out;
  position: relative;
  width: 100px;
  height: 100px;
  top: 50%;
  left: 50%;
  margin-left: -50px;
  margin-top: -50px;
}

.cube div {
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  box-shadow: inset 0px 0px 0px 1px rgba(10, 0, 0, 0.8);
  background: rgba(190, 0, 0, 0.6);
  display: block;
  position: absolute;
}

.cube div.top {
    -webkit-transform: rotateX(90deg);
  margin-top: -50px;
}

.cube div.right {
    -webkit-transform: rotateY(90deg);
  margin-left: 50px;
}

.cube div.bottom {
    -webkit-transform: rotateX(-90deg);
  margin-top: 50px;
}

.cube div.left {
    -webkit-transform: rotateY(-90deg);
  margin-left: -50px;
}

.cube div.front {
    -webkit-transform: translateZ(50px);
}

.cube div.back {
    -webkit-transform: translateZ(-50px) rotateX(180deg);
}

@-webkit-keyframes spin {
  0% {-webkit-transform: rotateX(-20deg) rotateY(20deg);}
  100% {-webkit-transform: rotateX(-20deg) rotateY(740deg);}
}
//HTML
<div class="cube">
  <div class="top">Top</div>
  <div class="right">Right</div>
  <div class="bottom">Bottom</div>
  <div class="left">Left</div>
  <div class="front">Front</div>
  <div class="back">Back</div>
</div>
*/