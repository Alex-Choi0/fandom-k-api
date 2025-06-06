// src/pages/TestModalPage.jsx
import { useState } from "react";
import ModalFrame from "./ModalFrame.jsx"; // 경로 맞춰서 수정!

const TestModalPage = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [paddingSize, setPaddingSize] = useState("default"); // default | compact

  return (
    <div style={{ padding: "40px", color: "black", background: "#f4f4f4" }}>
      <h1>ModalFrame 테스트 페이지</h1>

      <div style={{ marginBottom: "16px" }}>
        <label>패딩 사이즈 선택: </label>
        <select
          value={paddingSize}
          onChange={(e) => setPaddingSize(e.target.value)}
        >
          <option value="default">default (넉넉한 여백)</option>
          <option value="compact">compact (타이트한 여백)</option>
        </select>
      </div>

      <button onClick={() => setIsOpen(true)}>모달 열기</button>

      {isOpen && (
        <ModalFrame
          title="테스트용 모달"
          titleStyle="default"
          paddingSize={paddingSize}
          onClose={() => setIsOpen(false)}
        >
          <p style={{ marginBottom: "16px" }}>여긴 children 영역이에요</p>
          {/* <button onClick={() => alert("버튼 눌림!")}>버튼 테스트</button> */}
        </ModalFrame>
      )}
    </div>
  );
};

export default TestModalPage;
