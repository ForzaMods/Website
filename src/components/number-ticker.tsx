"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Format } from '@ark-ui/react';
import { Text } from "./ui/text";

export default function NumberTicker({ from, to, durationInMs }: { from: number; to: number; durationInMs: number }) {
  const number = useMotionValue(from);
  const displayedNumber = useTransform(number, (value) => Math.floor(value));
  const [currentNumber, setCurrentNumber] = useState<number>(from);

  function easeOutCubic(t: number) {
    return 1 - Math.pow(1 - t, 3);
  }  

  useEffect(() => {
    number.set(from);
    const startTime = performance.now();

    const animateNumber = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / durationInMs, 1);
      const easedProgress = easeOutCubic(progress);
      const currentNumber = from + (to - from) * easedProgress;
      number.set(currentNumber);
      setCurrentNumber(Math.floor(currentNumber));

      if (progress < 1) {
        requestAnimationFrame(animateNumber);
      }
    };

    requestAnimationFrame(animateNumber);

    return () => {
      number.stop();
    };
  }, [from, to, durationInMs, number]);

  return (
    <div>
      <motion.span
        style={{ opacity: displayedNumber }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <Text size="3xl" fontWeight="bold">
          <Format.Number roundingPriority="lessPrecision" value={currentNumber} />
        </Text>
      </motion.span>
    </div>
  );
}
