import { createPortal } from "react-dom";

// children : <ModalPortal> 내부에 있는 JSX
function ModalPortal({ children }) {
  const el = document.getElementById("modal-root"); // index.html에 있는 #modal-root 찾기
  return el ? createPortal(children, el) : null; // 해당 DOM 요소에 children 렌더링
}

export default ModalPortal;
