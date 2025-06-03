import "./SelectableIdolList.css";
import CheckedImage11 from "../../component_combine/11_checked_image/11_checked_image.component";
import SwipeCarousel from "../../component/41_SwipeCarousel/SwipeCarousel.jsx";

const SelectableIdolList = ({ idolList, selectedIds, onToggle, cardWidth }) => {
  // 16개씩 쪼개기 (페이지 단위)
  const chunkedIdolList = [];
  for (let i = 0; i < idolList.length; i += 16) {
    chunkedIdolList.push(idolList.slice(i, i + 16));
  }

  return (
    <div className="SelectableIdolList-wrapper">
      <SwipeCarousel
        scrollStep={cardWidth}
        leftButtonProps={{
          width: 29,
          height: 135,
          backgroundColor: "rgba(27, 27, 27, 0.8)",
          style: {
            left: "-61px",
            top: "50%",
          },
        }}
        rightButtonProps={{
          width: 29,
          height: 135,
          backgroundColor: "rgba(27, 27, 27, 0.8)",
          style: {
            right: "-61px",
            top: "50%",
          },
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
            ))}
          </div>
        )}
      </SwipeCarousel>
    </div>
  );
};

export default SelectableIdolList;
