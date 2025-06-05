import SupportCardComponent4 from "../../component_combine/4_support_card/4_support_card.component";
import StatusBarComponent9 from "../9_status_bar/9_status_bar.component";
import CreditIcon from "../../assets/icon/Credit.svg";
import "./boost_idols_list.css";

const BoostIdolsList = ({ items }) => {
  return (
    <div className="BoostArea">
      {items.map((item) => {
        // 후원 진행률 계산
        const donationRatio =
          item.targetDonation > 0
            ? (item.receivedDonations / item.targetDonation) * 100
            : 0;

        // 마감일까지 남은 일수 계산
        const remainingDays = Math.max(
          Math.ceil(
            (new Date(item.deadline) - new Date()) / (1000 * 60 * 60 * 24)
          ),
          0
        );

        return (
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
            <p className="location-text">{item.subtitle}</p>
            <p className="title-text">{item.title}</p>

            {/*기부금액 + 남은 일수*/}
            <div className="donation-meta-row">
              <p className="donation-text">
                <img src={CreditIcon} />
                {item.receivedDonations.toLocaleString()}
              </p>
              <p className="deadline-text">{remainingDays}일 남음</p>
            </div>

            {/* 상태바 아래 배치 */}
            <StatusBarComponent9
              className="donation-progress-bar"
              width="266px"
              height="1px"
              leftColor="#f96b69"
              rightColor="#E0E0E0"
              leftPercentage={donationRatio}
              borderRadius="4px"
            />
          </div>
        );
      })}
    </div>
  );
};

export default BoostIdolsList;
