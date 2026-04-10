export default function CategorySection({ title, image, link }) {
  return (
    <section className="category-section">
      <div className="category-image-overlay">
        <img src={image} alt={title} className="category-image" />

        <div className="category-content-overlay">
          <h2>{title}</h2>
          {link && (
            <a href={link} className="category-button-overlay">
              Explore →
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
