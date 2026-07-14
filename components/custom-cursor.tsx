"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Check if hovering over clickable element
      const target = e.target as HTMLElement;
      setIsPointer(
        target?.tagName === "BUTTON" ||
        target?.tagName === "A" ||
        target?.classList.contains("cursor-pointer")
      );
    };

    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", checkMobile);
    };
  }, [isMobile]);

  // Don't render cursor on mobile
  if (isMobile) return null;

  return (
    <>
      {/* Main cursor circle */}
      <motion.div
        className="fixed w-5 h-5 rounded-full border-2 border-accent pointer-events-none z-50 mix-blend-screen"
        animate={{
          x: mousePosition.x - 10,
          y: mousePosition.y - 10,
          scale: isPointer ? 1.4 : 1,
        }}
        transition={{
          type: "tween",
          duration: 0.08,
          ease: "easeOut",
        }}
      />

      {/* Outer glow circle */}
      <motion.div
        className="fixed w-8 h-8 rounded-full border border-accent/40 pointer-events-none z-40 mix-blend-screen"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isPointer ? 1.6 : 1,
        }}
        transition={{
          type: "tween",
          duration: 0.15,
          ease: "easeOut",
        }}
      />

      {/* Glow effect */}
      <motion.div
        className="fixed w-12 h-12 rounded-full bg-accent/10 pointer-events-none z-30 blur-xl mix-blend-screen"
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
          scale: isPointer ? 1.8 : 1,
          opacity: isPointer ? 0.6 : 0.3,
        }}
        transition={{
          type: "tween",
          duration: 0.2,
          ease: "easeOut",
        }}
      />
    </>
  );
}
