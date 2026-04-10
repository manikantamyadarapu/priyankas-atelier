"use client";

export default function PolicyPage({ title, sections }) {
  return (
    <div className="policy-container">
      <div className="policy-wrapper">

        <h1 className="policy-title">{title}</h1>

        {sections.map((section, index) => (
          <div key={index} className="policy-section">
            <h2 className="policy-heading">{section.heading}</h2>
            <p className="policy-text">{section.content}</p>
          </div>
        ))}

      </div>
    </div>
  );
}