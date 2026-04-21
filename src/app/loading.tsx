export default function Loading() {
  return (
    <div className="loading-container">
      <div className="skeleton-title" />
      <div className="skeleton-box" style={{ width: "100%", height: "40px", marginBottom: "16px" }} />
      <div className="skeleton-box" style={{ width: "100%", height: "200px" }} />
    </div>
  );
}