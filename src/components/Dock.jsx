"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "motion/react";
import {
  Children,
  cloneElement,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";

import "./Dock.css";

function DockItem({
  children,
  className = "",
  onClick,
  mouseX,
  spring,
  distance,
  magnification,
  baseItemSize,
}) {
  const ref = useRef(null);
  const isHovered = useMotionValue(0);

  const mouseDistance = useTransform(mouseX, (val) => {
    const rect = ref.current?.getBoundingClientRect() ?? {
      x: 0,
      width: baseItemSize,
    };
    return val - rect.x - baseItemSize / 2;
  });

  const targetSize = useTransform(
    mouseDistance,
    [-distance, 0, distance],
    [baseItemSize, magnification, baseItemSize]
  );
  const size = useSpring(targetSize, spring);

  return (
    <motion.div
      ref={ref}
      style={{
        width: size,
        height: size,
      }}
      className={`dock-item ${className}`}
      onClick={onClick}
      onMouseEnter={() => isHovered.set(1)}
      onMouseLeave={() => isHovered.set(0)}
    >
      {children}
    </motion.div>
  );
}

function DockLabel({ children, className = "", ...rest }) {
  return (
    <motion.div
      className={`dock-label ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 30,
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

function DockIcon({ children, className = "" }) {
  return <div className={`dock-icon ${className}`}>{children}</div>;
}

export default function Dock({
  items,
  className = "",
  spring = { mass: 0.1, stiffness: 150, damping: 12 },
  magnification = 70,
  distance = 200,
  panelHeight = 68,
  dockHeight = 256,
  baseItemSize = 50,
}) {
  const mouseX = useMotionValue(Infinity);
  const isHovered = useMotionValue(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const maxHeight = useMemo(
    () => Math.max(dockHeight, magnification + magnification / 2 + 4),
    [magnification, dockHeight]
  );
  const heightRow = useTransform(isHovered, [0, 1], [panelHeight, maxHeight]);
  const height = useSpring(heightRow, spring);

  return (
    <div 
      className="dock-container"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {/* Hover trigger area */}
      <div className="dock-hover-trigger" />
      
      {/* Dock Panel */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ x: 80, opacity: 0, scale: 0.9 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            exit={{ x: 80, opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            style={{ height, scrollbarWidth: "none" }}
            className="dock-outer"
          >
            <motion.div
              onMouseMove={({ pageY }) => {
                isHovered.set(1);
                mouseX.set(pageY);
              }}
              onMouseLeave={() => {
                isHovered.set(0);
                mouseX.set(Infinity);
                setHoveredItem(null);
              }}
              className={`dock-panel ${className}`}
              role="toolbar"
              aria-label="Application dock"
            >
              {items.map((item, index) => (
                <DockItem
                  key={index}
                  onClick={item.onClick}
                  className={item.className}
                  mouseX={mouseX}
                  spring={spring}
                  distance={distance}
                  magnification={magnification}
                  baseItemSize={baseItemSize}
                >
                  <div
                    onMouseEnter={() => setHoveredItem(index)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <DockIcon>{item.icon}</DockIcon>
                    <AnimatePresence>
                      {hoveredItem === index && (
                        <DockLabel>{item.label}</DockLabel>
                      )}
                    </AnimatePresence>
                  </div>
                </DockItem>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
