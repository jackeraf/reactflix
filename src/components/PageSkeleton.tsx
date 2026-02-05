import React from "react";

export default function PageSkeleton() {
  return (
    <article className="detail-container page-skeleton" aria-hidden="true">
      <div className="skeleton-line skeleton-back" />
      <div className="detail-layout">
        <figure className="detail-img-col">
          <div className="skeleton-poster skeleton" />
        </figure>
        <section className="detail-info-col">
          <div className="skeleton-meta">
            <span className="skeleton skeleton-line-inline" />
            <span className="skeleton skeleton-line-inline" />
            <span className="skeleton skeleton-line-inline" />
          </div>
          <div className="skeleton skeleton-title" />
          <div className="skeleton skeleton-rating" />
          <div className="skeleton skeleton-line skeleton-desc" />
          <div className="skeleton skeleton-line skeleton-desc-short" />
          <div className="skeleton skeleton-btn" />
          <div className="skeleton-meta" style={{ marginTop: "4rem", paddingTop: "2rem", borderTop: "1px solid #1e293b" }}>
            <div className="skeleton skeleton-line" style={{ width: "40%" }} />
            <div className="skeleton skeleton-line" style={{ width: "40%" }} />
          </div>
        </section>
      </div>
    </article>
  );
}
