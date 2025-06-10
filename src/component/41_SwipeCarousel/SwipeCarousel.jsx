import { useEffect, useRef, useState } from "react";
import ArrowButton from "../40_arrowButton/arrowButton";
import "./swipeCarousel.css";

const SwipeCarousel = ({
  children,
  scrollStep = 300,
  showButtons = true, // 왼쪽, 오른쪽 화살표 버튼 전체 노출 여부 (필요 시 사용)
  showLeftButton, // (autoHideButtons=false일 경우 사용) 왼쪽 화살표 버튼 노출 여부 (조건문으로 제어)
  showRightButton, // (autoHideButtons=false일 경우 사용) 오른쪽 화살표 버튼 노출 여부 (조건문으로 제어)
  autoHideButtons = true, // 스크롤 감지로 왼쪽, 오른쪽 화살표 버튼 각각 자동 노출 (미작동 시 false로 변경)
  wrapperStyle = {},
  leftButtonProps = {},
  rightButtonProps = {},
  buttonVisibleAt = 745, // pc에서만 화살표 버튼 노출 (745px 이상이어야 노출)
  iconWidth = 10, // 화살표 아이콘 svg width
  iconHeight = 20, // 화살표 아이콘 svg height
}) => {
  const scrollRef = useRef(null);
  const [showArrow, setShowArrow] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowArrow(window.innerWidth >= buttonVisibleAt);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [buttonVisibleAt]);

  // (autoHideButtons) 스크롤 감지로 왼쪽, 오른쪽 화살표 버튼 각각 자동 노출
  useEffect(() => {
    if (!autoHideButtons) return;

    const checkScroll = () => {
      const el = scrollRef.current;
      if (!el) return;

      setCanScrollLeft(el.scrollLeft > 0);
      setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
    };

    // 강제로 초기 체크 한 번 실행 (DOM 렌더 안정 후)
    const timer = setTimeout(checkScroll, 100);

    scrollRef.current?.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);

    return () => {
      clearTimeout(timer);
      scrollRef.current?.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [autoHideButtons]);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -scrollStep, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: scrollStep, behavior: "smooth" });
  };

  const shouldShowLeft =
    showButtons &&
    showArrow &&
    (autoHideButtons ? canScrollLeft : showLeftButton ?? true);
  const shouldShowRight =
    showButtons &&
    showArrow &&
    (autoHideButtons ? canScrollRight : showRightButton ?? true);

  return (
    <div className="swipe-carousel-wrapper" style={wrapperStyle}>
      {shouldShowLeft && (
        <ArrowButton
          direction="left"
          onClick={scrollLeft}
          iconWidth={iconWidth} // 화살표 아이콘 svg width
          iconHeight={iconHeight} // 화살표 아이콘 svg height
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

      {shouldShowRight && (
        <ArrowButton
          direction="right"
          onClick={scrollRight}
          iconWidth={iconWidth} // 화살표 아이콘 svg width
          iconHeight={iconHeight} // 화살표 아이콘 svg height
          {...rightButtonProps}
          className="carousel-btn right"
        />
      )}
    </div>
  );
};

export default SwipeCarousel;
