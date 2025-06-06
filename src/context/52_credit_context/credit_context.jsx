import { createContext, useContext, useEffect, useState } from "react";

const CreditContext = createContext(null); // context 생성, 전역 상태 공간 생성성

/* 커스텀 훅 */
export function useCreditContext() {
  return useContext(CreditContext);
}

export function CreditProvider({ children }) {
  const [credit, setCredit] = useState(0); // 크레딧 상태

  /* 크레딧 불러오기 */
  useEffect(() => {
    const saved = localStorage.getItem("credit");
    if (saved !== null) {
      setCredit(Number(saved));
    }
  }, []);

  /* 크레딧 변경 시 localStorage에 저장 */
  useEffect(() => {
    localStorage.setItem("credit", credit);
  }, [credit]);

  /* 크레딧 증가 */
  const addCredit = (amount) => {
    setCredit((prev) => prev + amount);
  };

  /* 크레딧 감소 */
  const useCredit = (amout) => {
    setCredit((prev) => Math.max(prev - amout, 0)); //음수일 때 0 처리
  };

  return (
    <CreditContext.Provider value={{ credit, addCredit, useCredit }}>
      {children}
    </CreditContext.Provider>
  );
}
