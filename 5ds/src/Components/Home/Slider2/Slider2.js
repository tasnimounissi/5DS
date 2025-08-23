import React, { useEffect, useRef, useState, useCallback} from "react";
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
  // Create an extended array with enough copies for seamless scrolling
  const extendedImages = [...IMAGES, ...IMAGES, ...IMAGES, ...IMAGES];
  const [currentIndex, setCurrentIndex] = useState(IMAGES.length);
  const trackRef = useRef(null);
  const containerRef = useRef(null);
  const itemWidthRef = useRef(0); 
  const isSlidingRef = useRef(false);
  
  // Drag functionality variables
  const isDraggingRef = useRef(false);
  const startPosRef = useRef(0);
  const currentTranslateRef = useRef(0);
  const prevTranslateRef = useRef(0);
  const animationRef = useRef(null);

  // Calculate the width of each item including gap
  useEffect(() => {
    const updateStepWidth = () => {
      if (!containerRef.current) return;
      
      // Calculate 80% of viewport width
      const containerWidth = containerRef.current.offsetWidth;
      
      // Calculate item width: (container width - 2*gap) / 3
      // We subtract 2*gap because there are 2 gaps between 3 items
      const calculatedItemWidth = (containerWidth - (2 * GAP_PX)) / 3;
      itemWidthRef.current = calculatedItemWidth + GAP_PX; // width + gap
      
      // Set initial position
      currentTranslateRef.current = currentIndex * itemWidthRef.current;
      prevTranslateRef.current = currentIndex * itemWidthRef.current;
    };

    updateStepWidth();
    window.addEventListener("resize", updateStepWidth);
    return () => window.removeEventListener("resize", updateStepWidth);
  }, []);

  // Auto scroll - continuous in one direction
  useEffect(() => {
    if (isDraggingRef.current) return; // Don't auto-scroll while dragging
    
    const id = setInterval(() => {
      slideNext();
    }, STEP_EVERY_MS);
    
    return () => clearInterval(id);
  }, []);

  const slideNext = () => {
    if (isSlidingRef.current || isDraggingRef.current) return;
    isSlidingRef.current = true;

    setCurrentIndex((prev) => {
      const newIndex = prev + 1;
      
      // If we're approaching the end of the extended array, reset to middle seamlessly
      if (newIndex >= extendedImages.length - IMAGES.length) {
        // Schedule a jump back to the middle after the transition completes
        setTimeout(() => {
          setCurrentIndex(IMAGES.length * 2);
          currentTranslateRef.current = IMAGES.length * 2 * itemWidthRef.current;
          prevTranslateRef.current = IMAGES.length * 2 * itemWidthRef.current;
          
          if (trackRef.current) {
            trackRef.current.style.transition = 'none';
            trackRef.current.style.transform = `translateX(-${IMAGES.length * 2 * itemWidthRef.current}px)`;
            
            // Force reflow
            void trackRef.current.offsetHeight;
            
            // Restore transition
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
  };

  // Touch/Click events for dragging
  useEffect(() => {
    if (!trackRef.current || !itemWidthRef.current) return;
    
    const track = trackRef.current;
    
    // Mouse events
    const handleMouseDown = (e) => {
      e.preventDefault();
      startPosRef.current = e.clientX;
      isDraggingRef.current = true;
      
      // Cancel any ongoing animation
      cancelAnimationFrame(animationRef.current);
      
      track.style.cursor = 'grabbing';
      track.style.transition = 'none';
    };
    
    const handleMouseMove = (e) => {
      if (!isDraggingRef.current) return;
      
      const currentPosition = e.clientX;
      const diff = currentPosition - startPosRef.current;
      currentTranslateRef.current = prevTranslateRef.current + diff;
      
      // Update the position
      track.style.transform = `translateX(-${currentTranslateRef.current}px)`;
    };
    
    const handleMouseUp = () => {
      if (!isDraggingRef.current) return;
      isDraggingRef.current = false;
      
      track.style.cursor = 'grab';
      track.style.transition = `transform ${SLIDE_DURATION_MS}ms ease-in-out`;
      
      // Calculate how many items we've dragged
      const movedBy = currentTranslateRef.current - prevTranslateRef.current;
      const dragThreshold = itemWidthRef.current / 3; // 1/3 of an item to trigger slide
      
      // Determine if we should slide to next/previous item based on drag distance
      if (Math.abs(movedBy) > dragThreshold) {
        const direction = movedBy > 0 ? -1 : 1; // Negative for right drag, positive for left drag
        const newIndex = currentIndex + direction;
        
        // Handle seamless looping for drag
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
      } else {
        // Return to original position
        currentTranslateRef.current = currentIndex * itemWidthRef.current;
      }
      
      track.style.transform = `translateX(-${currentTranslateRef.current}px)`;
      prevTranslateRef.current = currentTranslateRef.current;
    };
    
    // Touch events for mobile
    const handleTouchStart = (e) => {
      startPosRef.current = e.touches[0].clientX;
      isDraggingRef.current = true;
      
      cancelAnimationFrame(animationRef.current);
      track.style.transition = 'none';
    };
    
    const handleTouchMove = (e) => {
      if (!isDraggingRef.current) return;
      
      const currentPosition = e.touches[0].clientX;
      const diff = currentPosition - startPosRef.current;
      currentTranslateRef.current = prevTranslateRef.current + diff;
      
      track.style.transform = `translateX(-${currentTranslateRef.current}px)`;
    };
    
    const handleTouchEnd = () => {
      isDraggingRef.current = false;
      track.style.transition = `transform ${SLIDE_DURATION_MS}ms ease-in-out`;
      
      const movedBy = currentTranslateRef.current - prevTranslateRef.current;
      const dragThreshold = itemWidthRef.current / 3;
      
      if (Math.abs(movedBy) > dragThreshold) {
        const direction = movedBy > 0 ? -1 : 1;
        const newIndex = currentIndex + direction;
        
        // Handle seamless looping for drag
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
      } else {
        currentTranslateRef.current = currentIndex * itemWidthRef.current;
      }
      
      track.style.transform = `translateX(-${currentTranslateRef.current}px)`;
      prevTranslateRef.current = currentTranslateRef.current;
    };
    
    // Add event listeners
    track.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    
    track.addEventListener('touchstart', handleTouchStart);
    track.addEventListener('touchmove', handleTouchMove);
    track.addEventListener('touchend', handleTouchEnd);
    
    // Cleanup
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