import React, { useEffect, useRef } from "react";

type Props = {
  direction?: "up" | "down";
  delay?: number; // in ms
  columnCount?: number; // number of binary lines
};

const generateBinaryLines = (count: number) =>
  Array.from({ length: count }, () =>
    Math.floor(Math.random() * 2).toString() // Generates a single random binary digit
  );

export default function BinaryColumn({
  direction = "up",
  delay = 300,
  columnCount = 12,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (containerRef.current) {
        const container = containerRef.current;
        if (direction === "up") {
          const firstChild = container.children[0];
          container.appendChild(firstChild);
        } else {
          const lastChild = container.children[container.children.length - 1];
          container.insertBefore(lastChild, container.children[0]);
        }
      }
    }, delay);

    return () => clearInterval(interval);
  }, [direction, delay]);

  return (
    <div className="h-64 w-8 overflow-hidden text-cyan-400 font-mono text-sm">
      <div
        ref={containerRef}
        className="flex flex-col items-center transition-all duration-500 ease-in-out"
        aria-live="polite" // Accessibility improvement
      >
        {generateBinaryLines(columnCount).map((line, idx) => (
          <div key={idx} className="font-bold" style={{color:"#35FEFE", opacity:0.5}}>
            {line}
          </div>
        ))}
      </div>
    </div>
  );
}
