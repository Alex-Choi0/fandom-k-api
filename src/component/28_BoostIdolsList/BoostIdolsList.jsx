import SupportCardComponent4 from "../../component_combine/4_support_card/4_support_card.component";
import "./BoostIdolsList.css";

const BoostIdolsList = ({ items }) => {
  return (
    <div className="BoostArea">
      {items.map((item) => (
        <div className="BoostCard" key={item.id}>
          {/* 이미지 + 후원하기 버튼 */}
          <SupportCardComponent4
            setImage={{
              src: item.idol?.profilePicture,
              alt: item.idol?.name,
              width: "100%",
              height: "310px",
              objectFit: "cover",
              maskImage:
                "linear-gradient(to bottom, black 85%, transparent 100%)",
            }}
            setButton={{
              btnName: "후원하기",
              width: "240px",
              height: "45px",
              gradient: ["#F86F65", "#FE5493"],
              textColor: "#fff",
              fontSize: "16px",
              borderRadius: "6px",
            }}
          />
          {/* 이미지 아래 정보 */}
          <p className="location-text">강남역 광고</p> {/*임시*/}
          <p className="title-text">{item.title}</p>
          <div>
            <p className="donation-text">
              {item.receivedDonations.toLocaleString()} /{" "}
              {item.targetDonation.toLocaleString()}원
            </p>
            <p className="deadline-text">
              마감일: {item.deadline?.slice(0, 10)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BoostIdolsList;
