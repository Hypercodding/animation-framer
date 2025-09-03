"use client";
import { motion } from "framer-motion";

export default function WeightCurve() {

    
  // Example curve path (you can adjust with SVG editor or custom points)
  const path = "M 70 10 C 153 15 254 122 351 126"; // cubic bezier curve

  return (
    <div className="flex justify-center items-center vh-100 rounded-xl">
      <svg width="400" height="200" viewBox="0 0 400 200" fill="none">
        <defs>
          {/* Gradient: zero at top, full in middle, zero at bottom */}
          <linearGradient id="dashGradient" x1="0" y1="0" x2="0" y2="200" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="50%" stopColor="white" stopOpacity="0.6" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          
          {/* Curve gradient: zero at start, full in center, zero at end */}
          <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="50%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Dashed Grid Lines */}
        {[50, 90, 130, 170, 210, 250, 290, 330, 370].map((x, i) => (
          <line
            key={i}
            x1={x}
            y1={0}
            x2={x}
            y2={200}
            stroke="url(#dashGradient)"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
        ))}


        {/* Path Animation */}
        <motion.path
          d={path}
          stroke="url(#curveGradient)"
          strokeWidth="3"
          fill="transparent"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />

        {/* Moving Dot */}
        <motion.circle
          r="6"
          fill="white"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        >
          <animateMotion
            dur="3s"
            repeatCount="indefinite"
            path={path}
          />
        </motion.circle>

        {/* Start Label */}
        <foreignObject x="40" y="20" width="60" height="40">
          <div className="bg-white text-purple-600 text-xs px-2 py-1 rounded-full shadow">
            250lbs
          </div>
        </foreignObject>

        {/* Goal Label */}
        <foreignObject x="320" y="140" width="70" height="50">
          <div className="flex flex-col items-center text-white text-xs">
            {/* <span className="">Goal weight</span> */}
            <div className="bg-white text-purple-600 px-2 py-1 rounded-full shadow">
              170lbs
            </div>
          </div>
        </foreignObject>

        <text x="340" y="90" fill="white" fontSize="12" textAnchor="middle">
            <tspan x="350" dy="0">Goal</tspan>
            <tspan x="350" dy="14">weight</tspan>
        </text>

        {/* Goal Star */}
        <text x="345" y="134" fill="white" fontSize="20">
          ★
        </text>
      </svg>
    </div>
  );
}
