import "./LoadingChart.css";

function LoadingChart({ onClick, isVisible, isLoading }) {
  if (!isVisible) return null; // 커서 없으면 버튼 숨김

  return (
    <div className="loadMore-container">
      <button className="loadMore-btn" onClick={onClick} disabled={isLoading}>
        {isLoading ? "불러오는 중..." : "더보기"}
      </button>
    </div>
  );
}

export default LoadingChart;
