import CloseIcon from "../../assets/icon/btn_close.svg"
import "./modalFrame.css"

const ModalFrame = ({
  title,
  onClose,
  titleStyle = "default", // 타이틀 font-weight 차이 - 'default' : 600 | 'light' : 500
  paddingSize = "default", // 모달 내부 padding 차이 - 'default' : 투표하기 모달, 크레딧 부족 알림 모달 | 'compact' : 크레딧 충전 모달, 후원하기 모달
  children,
}) => {
  return (
    <div className="modal-overlay">
      <div className={`modal-container ${paddingSize}`}>
        <div className="modal-header">
          {title && <h2 className={`modal-title ${titleStyle}`}>{title}</h2>}
          <button className="modal-close" onClick={onClose} aria-label="닫기">
            <img src={CloseIcon} alt="닫기" />
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  )
}

export default ModalFrame
