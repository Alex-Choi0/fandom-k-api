import { createContext, useContext, useState, useEffect } from "react";

const CreditContext = createContext(); //context 생성

function creditprovider({ children }) {
  const [credit, setCredit] = useState(0);

  useEffect(() => {
    const storedCredit = localStorage.getItem("credit");
    if (storedCredit) {
      setCredit(Number(storedCredit));
    }
  }, []);
}

export default creditprovider;
