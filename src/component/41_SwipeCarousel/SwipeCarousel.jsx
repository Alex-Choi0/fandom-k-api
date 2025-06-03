import { useRef, useEffect, useState } from "react";
import ArrowButton from "../40_ArrowButton/ArrowButton";
import "./SwipeCarousel.css";

const SwipeCarousel = ({
  children,
  scrollStep = 300,
  showButtons = true,
  wrapperStyle = {},
  leftButtonProps = {},
  rightButtonProps = {},
}) => {
  const scrollRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -scrollStep, behavior: "smooth" });
  };
  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: scrollStep, behavior: "smooth" });
  };

  return (
    <div className="swipe-carousel-wrapper" style={wrapperStyle}>
      {!isMobile && showButtons && (
        <ArrowButton
          direction="left"
          onClick={scrollLeft}
          {...leftButtonProps}
          className="carousel-btn left"
        />
      )}

      {typeof children === "function" ? (
        children(scrollRef)
      ) : (
        <div className="swipe-carousel" ref={scrollRef}>
          {children}
        </div>
      )}

      {!isMobile && showButtons && (
        <ArrowButton
          direction="right"
          onClick={scrollRight}
          {...rightButtonProps}
          className="carousel-btn right"
        />
      )}
    </div>
  );
};

export default SwipeCarousel;
