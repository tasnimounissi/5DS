import React, { useEffect, useRef, useState, useCallback } from "react";
import "./Slider2.css";

const IMAGES = [
  require("../../assets/infotel.jpg"),
  require("../../assets/voicedegit.png"),
  require("../../assets/consulting.jpg"),
  require("../../assets/solutec.jpg"),
  require("../../assets/enedis.jpg"),
];

const STEP_EVERY_MS = 3000; // every 3 seconds
const SLIDE_DURATION_MS = 1200;
const GAP_PX = 40; // Gap between logos

export default function Slider2() {
  const extendedImages = [...IMAGES, ...IMAGES, ...IMAGES, ...IMAGES];
  const [currentIndex, setCurrentIndex] = useState(IMAGES.length);

  const trackRef = useRef(null);
  const containerRef = useRef(null);
  const itemWidthRef = useRef(0); 
  const isSlidingRef = useRef(false);

  const isDraggingRef = useRef(false);
  const startPosRef = useRef(0);
  const currentTranslateRef = useRef(0);
  const prevTranslateRef = useRef(0);
  const animationRef = useRef(null);

  // Calculate the width of each item including gap
  useEffect(() => {
    const updateStepWidth = () => {
      if (!containerRef.current) return;

      const containerWidth = containerRef.current.offsetWidth;
      const calculatedItemWidth = (containerWidth - (2 * GAP_PX)) / 3;
      itemWidthRef.current = calculatedItemWidth + GAP_PX;

      currentTranslateRef.current = currentIndex * itemWidthRef.current;
      prevTranslateRef.current = currentIndex * itemWidthRef.current;
    };

    updateStepWidth();
    window.addEventListener("resize", updateStepWidth);
    return () => window.removeEventListener("resize", updateStepWidth);
  }, [currentIndex]);

  // Stabilize slideNext with useCallback
  const slideNext = useCallback(() => {
    if (isSlidingRef.current || isDraggingRef.current) return;
    isSlidingRef.current = true;

    setCurrentIndex((prev) => {
      const newIndex = prev + 1;

      if (newIndex >= extendedImages.length - IMAGES.length) {
        setTimeout(() => {
          setCurrentIndex(IMAGES.length * 2);
          currentTranslateRef.current = IMAGES.length * 2 * itemWidthRef.current;
          prevTranslateRef.current = IMAGES.length * 2 * itemWidthRef.current;

          if (trackRef.current) {
            trackRef.current.style.transition = 'none';
            trackRef.current.style.transform = `translateX(-${IMAGES.length * 2 * itemWidthRef.current}px)`;
            void trackRef.current.offsetHeight;
            trackRef.current.style.transition = `transform ${SLIDE_DURATION_MS}ms ease-in-out`;
          }
        }, SLIDE_DURATION_MS);
      }

      return newIndex;
    });

    currentTranslateRef.current = (currentIndex + 1) * itemWidthRef.current;

    setTimeout(() => {
      isSlidingRef.current = false;
    }, SLIDE_DURATION_MS);
  }, [currentIndex, extendedImages.length]);

  // Auto scroll
  useEffect(() => {
    if (isDraggingRef.current) return;

    const id = setInterval(() => {
      slideNext();
    }, STEP_EVERY_MS);

    return () => clearInterval(id);
  }, [slideNext]);

  // Touch/Click events for dragging
  useEffect(() => {
    if (!trackRef.current || !itemWidthRef.current) return;

    const track = trackRef.current;

    const handleMouseDown = (e) => {
      e.preventDefault();
      startPosRef.current = e.clientX;
      isDraggingRef.current = true;

      cancelAnimationFrame(animationRef.current);
      track.style.cursor = 'grabbing';
      track.style.transition = 'none';
    };

    const handleMouseMove = (e) => {
      if (!isDraggingRef.current) return;
      const diff = e.clientX - startPosRef.current;
      currentTranslateRef.current = prevTranslateRef.current + diff;
      track.style.transform = `translateX(-${currentTranslateRef.current}px)`;
    };

    const handleMouseUp = () => {
      if (!isDraggingRef.current) return;
      isDraggingRef.current = false;

      track.style.cursor = 'grab';
      track.style.transition = `transform ${SLIDE_DURATION_MS}ms ease-in-out`;

      const movedBy = currentTranslateRef.current - prevTranslateRef.current;
      const dragThreshold = itemWidthRef.current / 3;
      const direction = movedBy > 0 ? -1 : 1;
      const newIndex = Math.abs(movedBy) > dragThreshold ? currentIndex + direction : currentIndex;

      if (newIndex >= extendedImages.length - IMAGES.length) {
        setCurrentIndex(IMAGES.length * 2);
        currentTranslateRef.current = IMAGES.length * 2 * itemWidthRef.current;
      } else if (newIndex <= 0) {
        setCurrentIndex(IMAGES.length);
        currentTranslateRef.current = IMAGES.length * itemWidthRef.current;
      } else {
        setCurrentIndex(newIndex);
        currentTranslateRef.current = newIndex * itemWidthRef.current;
      }

      track.style.transform = `translateX(-${currentTranslateRef.current}px)`;
      prevTranslateRef.current = currentTranslateRef.current;
    };

    const handleTouchStart = (e) => {
      startPosRef.current = e.touches[0].clientX;
      isDraggingRef.current = true;
      cancelAnimationFrame(animationRef.current);
      track.style.transition = 'none';
    };

    const handleTouchMove = (e) => {
      if (!isDraggingRef.current) return;
      const diff = e.touches[0].clientX - startPosRef.current;
      currentTranslateRef.current = prevTranslateRef.current + diff;
      track.style.transform = `translateX(-${currentTranslateRef.current}px)`;
    };

    const handleTouchEnd = () => {
      isDraggingRef.current = false;
      track.style.transition = `transform ${SLIDE_DURATION_MS}ms ease-in-out`;

      const movedBy = currentTranslateRef.current - prevTranslateRef.current;
      const dragThreshold = itemWidthRef.current / 3;
      const direction = movedBy > 0 ? -1 : 1;
      const newIndex = Math.abs(movedBy) > dragThreshold ? currentIndex + direction : currentIndex;

      if (newIndex >= extendedImages.length - IMAGES.length) {
        setCurrentIndex(IMAGES.length * 2);
        currentTranslateRef.current = IMAGES.length * 2 * itemWidthRef.current;
      } else if (newIndex <= 0) {
        setCurrentIndex(IMAGES.length);
        currentTranslateRef.current = IMAGES.length * itemWidthRef.current;
      } else {
        setCurrentIndex(newIndex);
        currentTranslateRef.current = newIndex * itemWidthRef.current;
      }

      track.style.transform = `translateX(-${currentTranslateRef.current}px)`;
      prevTranslateRef.current = currentTranslateRef.current;
    };

    track.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    track.addEventListener('touchstart', handleTouchStart);
    track.addEventListener('touchmove', handleTouchMove);
    track.addEventListener('touchend', handleTouchEnd);

    return () => {
      track.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);

      track.removeEventListener('touchstart', handleTouchStart);
      track.removeEventListener('touchmove', handleTouchMove);
      track.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentIndex, extendedImages.length]);

  // Update prevTranslate when currentIndex changes (not from dragging)
  useEffect(() => {
    if (!isDraggingRef.current) {
      prevTranslateRef.current = currentIndex * itemWidthRef.current;
      currentTranslateRef.current = currentIndex * itemWidthRef.current;
    }
  }, [currentIndex]);

  return (
    <div className="slider-container" ref={containerRef}>
      <div className="logo-slider">
        <div
          className="logo-track"
          ref={trackRef}
          style={{
            transform: `translateX(-${currentIndex * itemWidthRef.current}px)`,
            transition: `transform ${SLIDE_DURATION_MS}ms ease-in-out`,
            gap: `${GAP_PX}px`,
            cursor: 'grab'
          }}
        >
          {extendedImages.map((src, i) => (
            <div 
              className="logo-item" 
              key={i}
              style={{ width: `${itemWidthRef.current - GAP_PX}px` }}
            >
              <img src={src} alt={`logo-${i % IMAGES.length}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
