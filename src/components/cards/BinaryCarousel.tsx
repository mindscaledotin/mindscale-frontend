import React, { useEffect, useRef } from "react";

type Props = {
  direction?: "up" | "down";
  height?: number;
  speed?: number;
  repeatCount?: number;
};

const BinaryCarousel: React.FC<Props> = ({
  direction = "up",
  height = 300,
  speed = 10000,
  repeatCount = 10,
}) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const binaryString = "10011010101";
  const binaryLines = Array.from({ length: repeatCount }, () =>
    binaryString.split("")
  ).flat();

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const section = track.querySelector(".binary-section") as HTMLElement;
    if (!section) return;

    const sectionHeight = section.clientHeight;
    const clone = section.cloneNode(true) as HTMLElement;
    clone.classList.add("binary-section-clone");

    if (direction === "up") {
      track.appendChild(clone);
    } else {
      track.insertBefore(clone, track.firstChild); // 👈 important fix
    }

    const animation = track.animate(
      direction === "up"
        ? [
            { transform: "translateY(0)" },
            { transform: `translateY(-${sectionHeight}px)` },
          ]
        : [
            { transform: `translateY(-${sectionHeight}px)` },
            { transform: "translateY(0)" },
          ],
      {
        duration: speed,
        iterations: Infinity,
        easing: "linear",
      }
    );

    return () => animation.cancel();
  }, [direction, speed]);

  return (
    <div
      className="overflow-hidden w-6 font-lato"
      style={{ height, fontSize:14 }}
    >
      <div ref={trackRef} className="flex flex-col items-center">
        <div className="binary-section flex flex-col items-center">
          {binaryLines.map((bit, idx) => (
            <div key={idx} className="" style={{color:"#35FFFF"}}>
              {bit}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BinaryCarousel;
