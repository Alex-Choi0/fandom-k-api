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
  buttonVisibleAt = 768, // 기본값: 768px 이상이면 버튼 보임 (모바일만 터치)
}) => {
  const scrollRef = useRef(null);
  const [showArrow, setShowArrow] = useState(false);

  // 윈도우 사이즈 기준으로 버튼 노출 여부 결정
  useEffect(() => {
    const handleResize = () => {
      setShowArrow(window.innerWidth >= buttonVisibleAt);
    };

    handleResize(); // 초기 렌더 시 한 번 실행
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [buttonVisibleAt]);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -scrollStep, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: scrollStep, behavior: "smooth" });
  };

  return (
    <div className="swipe-carousel-wrapper" style={wrapperStyle}>
      {showArrow && showButtons && (
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

      {showArrow && showButtons && (
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
