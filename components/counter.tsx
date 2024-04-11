"use client"

import { animate } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface CounterProps {
  from: number;
  to: number;
}

const Counter: React.FC<CounterProps> = ({ from, to }) => {
  const nodeRef = useRef<HTMLParagraphElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(node);

    return () => {
      observer.unobserve(node);
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const node = nodeRef.current;
    if (!node) return;

    const controls = animate(from, to, {
      duration: 1.5,
      onUpdate(value) {
        node.textContent = Math.round(value).toString();
      },
    });

    return () => controls.stop();
  }, [from, to, isInView]);

  return (
    <span ref={nodeRef} />
  );
};

export default Counter;