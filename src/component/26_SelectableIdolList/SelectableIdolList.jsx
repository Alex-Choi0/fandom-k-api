import "./SelectableIdolList.css";
import { FindIdols19 } from "../../utils/api/api";
import ImageComponent2 from "../../component/2_image/2_image.component"; // 체크 안 된 이미지 컴포넌트
import CheckedImage11 from "../../component_combine/11_checked_image/11_checked_image.component"; // 체크된 이미지 컴포넌트
import { useEffect, useState } from "react";

const SelectableIdolList = ({ selectedIds, onToggle }) => {
  const [idolList, setIdolList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await FindIdols19("뉴진스", null, 100, null);
        console.log("아이돌 응답:", res);
        setIdolList(res.list);
      } catch (err) {
        console.error("아이돌 목록 불러오기 실패", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="SelectableIdolList">
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
          <div className="SelectableIdolList-info">
            <div className="SelectableIdolList-group">{idol.group}</div>
            <div className="SelectableIdolList-name">{idol.name}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SelectableIdolList;
