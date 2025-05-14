import React, { useEffect, useState } from "react";

const BinaryCarousel: React.FC<{ direction: "up" | "down"; numbers: string[] }> = ({ direction, numbers }) => {
  const [offset, setOffset] = useState(0);
  const totalItems = numbers.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => (prev + 1) % (totalItems)); // Increment offset
    }, 600); // Adjust the speed of the transition here (600ms for slower speed)

    return () => clearInterval(interval);
  }, [totalItems]);

  return (
    <div className="overflow-hidden h-20">
      <div
        className="flex flex-col"
        style={{
          transform: direction === "up" ? `translateY(-${offset * 100}%)` : `translateY(${offset * 100}%)`,
          transition: "transform 10s",
        }}
      >
        {/* Render the numbers twice for seamless scrolling */}
        {[...numbers, ...numbers].map((num, index) => (
          <div key={index} className="text-2xl font-bold">
            {num}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BinaryCarousel;
