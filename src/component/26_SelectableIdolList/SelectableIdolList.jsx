import "./SelectableIdolList.css";
import { FindIdols19 } from "../../utils/api/api";
import ImageComponent2 from "../../component/2_image/2_image.component"; // 체크 안 된 이미지 컴포넌트
import CheckedImage11 from "../../component_combine/11_checked_image/11_checked_image.component"; // 체크된 이미지 컴포넌트
import { useEffect, useState, useRef } from "react";
import btnLeft from "../../assets/icon/btn_page-left.png";
import btnRight from "../../assets/icon/btn_page-right.png";

const SelectableIdolList = ({ idolList, selectedIds, onToggle }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="SelectableIdolList-wrapper">
      {/* 좌측 화살표 (PC/태블릿에서만 보임) */}
      <button className="carousel-btn left" onClick={scrollLeft}>
        <img src={btnLeft} alt="왼쪽" />
      </button>

      <div className="SelectableIdolList" ref={scrollRef}>
        {idolList.map((idol) => (
          <div key={idol.id} className="SelectableIdolList-card">
            <CheckedImage11
              src={idol.profilePicture}
              alt={idol.name}
              width="128px"
              height="128px"
              status={selectedIds.includes(idol.id)}
              onClick={() => onToggle(idol.id)}
            />
            <div className="idollist-info">
              <div className="idollist-name">{idol.name}</div>
              <div className="idollist-group">{idol.group}</div>
            </div>
          </div>
        ))}
      </div>
      {/* 우측 화살표 */}
      <button className="carousel-btn right" onClick={scrollRight}>
        <img src={btnRight} alt="오른쪽" />
      </button>
    </div>
  );
};

export default SelectableIdolList;
