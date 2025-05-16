import React from 'react';
import {motion} from "framer-motion";
import clsx from "clsx";

const borderGradient = {
    background:
      "linear-gradient(90deg, rgba(109,91,255,0.5) 0%, rgba(0,198,251,0.5) 100%)",
    boxShadow: "0 0 8px 2px rgba(109,91,255,0.3)",
  };
  
  const verticalGradient = {
    background:
      "linear-gradient(180deg, rgba(109,91,255,0.5) 0%, rgba(0,198,251,0.5) 100%)",
    boxShadow: "0 0 8px 2px rgba(109,91,255,0.3)",
  };
  

interface CardProps {
    title: string,
    description: string,
    overlays?: string[],
    icon?: React.ReactNode,
    size?: {width: number, height: number},
    className?: string,
    children?: React.ReactNode;
    textHoverPosition?: "top-left" | "top-right" | "top-center" | "bottom-left" | "bottom-right" | "bottom-center" | "center";
    defaultOverlay?: string;
    hoverOverlay?: string;
    defaultOverlays?: Overlay[];
    hoverOverlays?: Overlay[];
}

type Overlay = {
  src: string;
  // Predefined position (optional)
  position?: "top-left" | "top-right" | "top-center" | "bottom-left" | "bottom-right" | "bottom-center" | "center";
  // Custom positioning (optional)
  x?: number | string; // e.g., 20, "50%", "-10px"
  y?: number | string;
  width?: number | string; // e.g., 80, "50%"
  height?: number | string;
  opacity?: number; // 0 to 1
  rotate?: number; // degrees
  zIndex?: number;
  style?: React.CSSProperties; // for any extra custom styles
  className?: string; // for custom classes
  blendMode?: React.CSSProperties["mixBlendMode"];
};

// Offset for text movement (adjust as needed)
const offset = 40;

// Map textHoverPosition to x/y offsets
const textPositionOffsets: Record<
  NonNullable<CardProps["textHoverPosition"]>,
  { x: number; y: number }
> = {
  "top-left": { x: -offset, y: -offset },
  "top-right": { x: offset, y: -offset },
  "top-center": { x: 0, y: -offset },
  "bottom-left": { x: -offset, y: offset },
  "bottom-right": { x: offset, y: offset },
  "bottom-center": { x: 0, y: offset },
  center: { x: 0, y: 0 },
};

const overlayPositionStyles: Record<
  NonNullable<Overlay["position"]>,
  string
> = {
  "top-left": "top-0 left-0",
  "top-right": "top-0 right-0",
  "top-center": "top-0 left-1/2 -translate-x-1/2",
  "bottom-left": "bottom-0 left-0",
  "bottom-right": "bottom-0 right-0",
  "bottom-center": "bottom-0 left-1/2 -translate-x-1/2",
  center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
};

export const Card: React.FC<CardProps> = ({
  title,
  description,
  icon,
  size = { width: 350, height: 220 },
  className,
  children,
  textHoverPosition = "center",
  defaultOverlay,
  hoverOverlay,
  defaultOverlays = [],
  hoverOverlays = [],
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const overlaysToShow = isHovered ? hoverOverlays || [] : defaultOverlays || [];

  const backgroundImage =
    isHovered
      ? (hoverOverlay
          ? `url(${hoverOverlay})`
          : "linear-gradient(135deg,#19188B,#000000)")
      : (defaultOverlay
          ? `url(${defaultOverlay})`
          : "linear-gradient(135deg,#19188B,#000000)");

  // Get the target offset for the current hover position
  const targetOffset = isHovered
    ? textPositionOffsets[textHoverPosition]
    : textPositionOffsets["center"];

  return (
    <div
      className="relative"
      style={{
        width: size.width,
        height: size.height,
        display: "inline-block",
        
      }}
    >
      {/* Overlay images */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        {overlaysToShow.map((overlay, idx) => {
          // Build style object
          const style: React.CSSProperties = {
            position: "absolute",
            width: overlay.width ?? "80px",
            height: overlay.height ?? "80px",
            opacity: overlay.opacity ?? 1,
            zIndex: overlay.zIndex ?? idx,
            transform: "",
            mixBlendMode: overlay.blendMode,
            ...overlay.style,
          };

          // Positioning
          if (overlay.x !== undefined) style.left = overlay.x;
          if (overlay.y !== undefined) style.top = overlay.y;
          if (overlay.rotate) style.transform += ` rotate(${overlay.rotate}deg)`;

          return (
            <img
              key={idx}
              src={overlay.src}
              alt=""
              className={clsx(
                "absolute object-cover",
                overlay.position && !overlay.x && !overlay.y
                  ? overlayPositionStyles[overlay.position]
                  : "",
                overlay.className
              )}
              style={style}
            />
          );
        })}
      </div>
       {/* Top Left - Horizontal */}
       <div
        className="absolute top-0 left-0 w-1/2 h-[2px] pointer-events-none z-10 rounded-tl-xl"
        style={borderGradient}
      />
      {/* Top Left - Vertical */}
      <div
        className="absolute top-0 left-0 h-1/2 w-[2px] pointer-events-none z-10 rounded-tl-xl"
        style={verticalGradient}
      />

      {/* Bottom Right - Horizontal */}
      <div
        className="absolute bottom-0 right-0 w-1/2 h-[2px] pointer-events-none z-10 rounded-br-xl"
        style={borderGradient}
      />
      {/* Bottom Right - Vertical */}
      <div
        className="absolute bottom-0 right-0 h-1/2 w-[2px] pointer-events-none z-10 rounded-br-xl"
        style={verticalGradient}
      />
      <motion.div
        className={clsx(
          "relative rounded-xl overflow-hidden flex flex-col transition-all duration-300 bg-[#19188B]",
          className
        )}
        style={{
          width: "100%",
          height: "100%",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={{
          backgroundImage,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="absolute inset-0 flex w-full h-full p-20"
          animate={{
            justifyContent: "center",
            alignItems: "center",
          }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          style={{ display: "flex" }}
        >
          <motion.div
            className="text-center"
            layout
            initial={false}
            animate={{
              x: targetOffset.x,
              y: targetOffset.y,
              opacity: 1,
            }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
          >
            {icon && <div className="mb-4">{icon}</div>}
            <h3 className="text-white text-2xl font-bold mb-2">{title}</h3>
            <p className="text-white/80 text-base">{description}</p>
          </motion.div>
        </motion.div>
        {children}
      </motion.div>
    </div>
  );
};


