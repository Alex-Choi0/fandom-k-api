import { useEffect, useRef, useState } from "react"
import CheckedImage11 from "../../component_combine/11_checked_image/11_checked_image.component.jsx"
import SwipeCarousel from "../41_swipeCarousel/swipeCarousel.jsx"
import "./selectableIdolList.css"

const SelectableIdolList = ({ idolList, selectedIds, onToggle, cardWidth }) => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth)
  const [imageSize, setImageSize] = useState("128px")
  const [chunkedIdolList, setChunkedIdolList] = useState([])
  const gridRef = useRef(null)

  // 이미지 사이즈 반응형 설정
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      setViewportWidth(width)
      setImageSize(width <= 375 ? "98px" : "128px")
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // 실측 기반으로 chunk 분할 (스와이프될 페이지 단위)
  useEffect(() => {
    const calcChunk = () => {
      const containerWidth = gridRef.current.clientWidth

      const cardSize = imageSize === "98px" ? 98 : 128
      const gap = 25
      const cardWithGap = cardSize + gap

      const columnsPerRow = Math.round(containerWidth / cardWithGap)
      const itemsPerPage = columnsPerRow * 2

      if (!itemsPerPage || itemsPerPage < 1) return

      const chunks = []
      const total = idolList.length
      let i = 0

      while (i < total) {
        // 마지막 페이지 계산
        if (i + itemsPerPage >= total) {
          chunks.push(idolList.slice(i)) // 남은 거 전부
          break
        }

        chunks.push(idolList.slice(i, i + itemsPerPage))
        i += itemsPerPage
      }
      setChunkedIdolList(chunks)
    }

    // idolList가 빈 배열일 경우엔 계산 안 되도록 조건 추가
    if (idolList.length > 0) {
      requestAnimationFrame(() => setTimeout(calcChunk, 0))
      window.addEventListener("resize", calcChunk)
      return () => window.removeEventListener("resize", calcChunk)
    }
  }, [idolList, imageSize])

  const leftBtnStyle =
    viewportWidth <= 745
      ? { left: "-56px", top: "50%" }
      : { left: "-61px", top: "50%" }

  const rightBtnStyle =
    viewportWidth <= 745
      ? { right: "-56px", top: "50%" }
      : { right: "-61px", top: "50%" }

  return (
    <div className="SelectableIdolList-wrapper">
      <SwipeCarousel
        buttonVisibleAt={376}
        scrollStep={cardWidth}
        leftButtonProps={{
          width: 29,
          height: 135,
          backgroundColor: "rgba(27, 27, 27, 0.8)",
          style: leftBtnStyle,
        }}
        rightButtonProps={{
          width: 29,
          height: 135,
          backgroundColor: "rgba(27, 27, 27, 0.8)",
          style: rightBtnStyle,
        }}
      >
        {(scrollRef) => (
          <div className="scroll-container" ref={scrollRef}>
            {/* 최초 idolList만 있을 때: ref 측정용 그리드 */}
            {idolList.length > 0 && chunkedIdolList.length === 0 && (
              <div className="SelectableIdolList" ref={gridRef}>
                {idolList.slice(0, 1).map((idol) => (
                  <div key={idol.id} className="SelectableIdolList-card">
                    <CheckedImage11
                      src={idol.profilePicture}
                      alt={idol.name}
                      width={imageSize}
                      height={imageSize}
                      status={selectedIds.includes(idol.id)}
                      onClick={() => onToggle(idol.id)}
                    />
                    <div className="idollist-info">
                      <div className="idollist-name">
                        {idol.name.split(" ").pop()}
                      </div>
                      <div className="idollist-group">{idol.group}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* chunkedIdolList가 계산된 이후에 페이지 단위로 렌더 */}
            {chunkedIdolList.map((page, index) => (
              <div
                className="SelectableIdolList"
                key={index}
                ref={index === 0 ? gridRef : null} // 첫 번째 chunk에서만 측정용 ref
              >
                {page.map((idol) => (
                  <div
                    key={`${idol.id}-${index}`}
                    className="SelectableIdolList-card"
                  >
                    <CheckedImage11
                      src={idol.profilePicture}
                      alt={idol.name}
                      width={imageSize}
                      height={imageSize}
                      status={selectedIds.includes(idol.id)}
                      onClick={() => onToggle(idol.id)}
                    />
                    <div className="idollist-info">
                      <div className="idollist-name">
                        {idol.name.split(" ").pop()}
                      </div>
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
  )
}

export default SelectableIdolList
