// ✅ Server Component — Componente de carga (Suspense fallback) que renderiza skeleton loader
const SKELETON_COUNT = 3;

export default function Loading() {
  return (
    <div className="loading-container">
      
      <div className="skeleton-summary">
        <div className="skeleton-box" />
        <div className="skeleton-box" />
        <div className="skeleton-box" />
      </div>

      {Array.from({ length: SKELETON_COUNT }).map((_, i) => (
        <div key={i} className="skeleton-card">
          <div className="skeleton-title" />
          <div className="skeleton-badge" />
        </div>
      ))}
    </div>
  );
}