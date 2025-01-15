"use client";
import { gsap } from "gsap";

export const CursorGlobal = () => {
    const handleMouseMove = (e: MouseEvent) => {
        gsap.to(".cursor", {
            x: e.clientX,
            y: e.clientY,
            duration: 0.1,
          });
        
        gsap.to(".cursor2", {
          x: e.clientX,
          y: e.clientY,
          duration: 0.1,
        });
    };
    if (typeof window !== "undefined") {
        document.addEventListener("mousemove", handleMouseMove);
    }
    return (
        <>
            <div className="cursor"></div>
            <div className="cursor2"></div>
        </>
    );
}