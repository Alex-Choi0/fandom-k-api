import { useEffect, useRef, useState } from "react";
import CheckedImage11 from "../../component_combine/11_checked_image/11_checked_image.component.jsx";
import SwipeCarousel from "../41_swipeCarousel/swipeCarousel.jsx";
import "./selectableIdolList.css";

const SelectableIdolList = ({ idolList, selectedIds, onToggle, cardWidth }) => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [imageSize, setImageSize] = useState("128px");
  // 초기값으로 idolList 전체를 1페이지 chunk로 넣기 (초기 렌더링 시 빈 리스트 문제 해결)
  const [chunkedIdolList, setChunkedIdolList] = useState(
    idolList.length > 0 ? [idolList] : []
  );
  const gridRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setViewportWidth(width);
      setImageSize(width <= 375 ? "98px" : "128px");
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const calcChunk = () => {
      if (!gridRef.current) return;

      const containerWidth = gridRef.current.clientWidth;

      const cardSize = imageSize === "98px" ? 98 : 128;
      const gap = 25;
      const cardWithGap = cardSize + gap;

      const columnsPerRow = Math.round(containerWidth / cardWithGap);
      const itemsPerPage = columnsPerRow * 2;

      if (!itemsPerPage || itemsPerPage < 1) return;

      const chunks = [];
      const total = idolList.length;
      let i = 0;

      while (i < total) {
        if (i + itemsPerPage >= total) {
          chunks.push(idolList.slice(i));
          break;
        }
        chunks.push(idolList.slice(i, i + itemsPerPage));
        i += itemsPerPage;
      }
      setChunkedIdolList(chunks);
    };

    // 아이돌 리스트가 바뀌거나 이미지 사이즈가 바뀔 때마다 재계산
    if (idolList.length > 0) {
      // 처음에는 초기값 세팅되어 있어서 바로 실행해도 괜찮음
      requestAnimationFrame(() => setTimeout(calcChunk, 0));

      window.addEventListener("resize", calcChunk);
      return () => window.removeEventListener("resize", calcChunk);
    }
  }, [idolList, imageSize]);

  useEffect(() => {
    // chunkedIdolList가 변경되면 강제로 resize 이벤트 발생시켜 scroll 체크 유도
    window.dispatchEvent(new Event("resize"));
  }, [chunkedIdolList]);

  const leftBtnStyle =
    viewportWidth <= 745
      ? { left: "-56px", top: "50%" }
      : { left: "-61px", top: "50%" };

  const rightBtnStyle =
    viewportWidth <= 745
      ? { right: "-56px", top: "50%" }
      : { right: "-61px", top: "50%" };

  return (
    <div className="SelectableIdolList-wrapper">
      <SwipeCarousel
        buttonVisibleAt={376}
        scrollStep={cardWidth}
        leftButtonProps={{
          width: 29,
          height: 135,
          backgroundColor: "rgba(27, 27, 27, 0.8)",
          style: leftBtnStyle,
        }}
        rightButtonProps={{
          width: 29,
          height: 135,
          backgroundColor: "rgba(27, 27, 27, 0.8)",
          style: rightBtnStyle,
        }}
      >
        {(scrollRef) => (
          <div className="scroll-container" ref={scrollRef}>
            {/* 최초 idolList만 있을 때: ref 측정용 그리드 */}
            {idolList.length > 0 && chunkedIdolList.length === 0 && (
              <div className="SelectableIdolList" ref={gridRef}>
                {idolList.slice(0, 1).map((idol) => (
                  <div key={idol.id} className="SelectableIdolList-card">
                    <CheckedImage11
                      src={idol.profilePicture}
                      alt={idol.name}
                      width={imageSize}
                      height={imageSize}
                      status={selectedIds.includes(idol.id)}
                      onClick={() => onToggle(idol.id)}
                    />
                    <div className="idollist-info">
                      <div className="idollist-name">
                        {idol.name.split(" ").pop()}
                      </div>
                      <div className="idollist-group">{idol.group}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* chunkedIdolList가 계산된 이후에 페이지 단위로 렌더 */}
            {chunkedIdolList.map((page, index) => (
              <div
                className="SelectableIdolList"
                key={index}
                ref={index === 0 ? gridRef : null} // 첫 번째 chunk에서만 측정용 ref
              >
                {page.map((idol) => (
                  <div
                    key={`${idol.id}-${index}`}
                    className="SelectableIdolList-card"
                  >
                    <CheckedImage11
                      src={idol.profilePicture}
                      alt={idol.name}
                      width={imageSize}
                      height={imageSize}
                      status={selectedIds.includes(idol.id)}
                      onClick={() => onToggle(idol.id)}
                    />
                    <div className="idollist-info">
                      <div className="idollist-name">
                        {idol.name.split(" ").pop()}
                      </div>
                      <div className="idollist-group">{idol.group}</div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </SwipeCarousel>
    </div>
  );
};

export default SelectableIdolList;
