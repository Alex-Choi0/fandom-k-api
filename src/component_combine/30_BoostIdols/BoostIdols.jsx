import "./BoostIdols.css";
import { useEffect, useState } from "react";
import { FindIdolsDonation21 } from "../../utils/api/api"; //API 함수
import BoostIdolsList from "../../component/28_BoostIdolsList/BoostIdolsList"; // 이미지+텍스트 카드 리스트
import SliderNavigation from "../../component/29_SliderNavigation/SliderNavigation"; // 좌/우 버튼

function BoostIdols() {
  const [idolList, setIdolList] = useState([]); // 후원 조공 리스트
  const [loading, setLoading] = useState(true); // 로딩 상태
  const [error, setError] = useState(null); //에러 상태

  //데이터 요청청
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await FindIdolsDonation21("뉴진스", null, 8, []);
        setIdolList(res?.list || []); //배열 or { list: [...] } / 결과 리스트 저장장
      } catch (err) {
        setError(err.message || String(err));
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p>불러오는 중...</p>; // 로딩 중 표시
  if (error) return <p>에러 발생: {error}</p>; //에러 발생 표시

  return (
    <div className="BoostIdols">
      <h2>후원을 기다리는 조공</h2>
      {!idolList.length && <p>등록된 조공이 없습니다.</p>}
      <div className="BoostSlider">
        {/* 왼쪽 버튼 */}
        <SliderNavigation direction="left" />
        {/* 아이돌 카드 리스트 */}
        <BoostIdolsList items={idolList} />
        {/* 왼쪽 버튼 */}
        <SliderNavigation direction="right" />
      </div>
    </div>
  );
}

export default BoostIdols;
