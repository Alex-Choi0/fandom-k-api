import "./SelectableIdolList.css";
import CheckedImage11 from "../../component_combine/11_checked_image/11_checked_image.component";
import SwipeCarousel from "../../component/41_SwipeCarousel/SwipeCarousel.jsx";
import { useState, useEffect } from "react";

const SelectableIdolList = ({ idolList, selectedIds, onToggle, cardWidth }) => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [chunkSize, setChunkSize] = useState(16);
  const [imageSize, setImageSize] = useState("128px");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setViewportWidth(width);

      if (width <= 375) {
        setChunkSize(6);
        setImageSize("98px");
      } else if (width <= 744) {
        setChunkSize(8);
        setImageSize("128px");
      } else {
        setChunkSize(16);
        setImageSize("128px");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const chunkedIdolList = [];
  for (let i = 0; i < idolList.length; i += chunkSize) {
    chunkedIdolList.push(idolList.slice(i, i + chunkSize));
  }

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const leftBtnStyle =
    viewportWidth <= 745
      ? { left: "-56px", top: "50%" } // 태블릿용
      : { left: "-61px", top: "50%" }; // 데스크탑용

  const rightBtnStyle =
    viewportWidth <= 745
      ? { right: "-56px", top: "50%" }
      : { right: "-61px", top: "50%" };

  return (
    <div className="SelectableIdolList-wrapper">
      <SwipeCarousel
        buttonVisibleAt={744}
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
            {chunkedIdolList.map((page, index) => (
              <div className="SelectableIdolList" key={index}>
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
