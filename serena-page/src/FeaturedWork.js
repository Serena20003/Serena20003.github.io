import Card from './Components/Card';
import { featuredWork } from './workData';

const FeaturedWork = () => {
  return (
    <section
      className="site-section featured-section"
      id="FeaturedWork"
      aria-labelledby="featured-work-heading"
    >
      <div className="section-kicker">Start here</div>
      <h2 className="title section-title" id="featured-work-heading">
        Featured Work
      </h2>
      <p className="section-intro body">
        Three case studies that best represent the kind of software work I want
        to keep doing: product-minded mobile development, full-stack MVP
        delivery, and measurable user or workflow impact.
      </p>
      <div className="myCardGallery featured-grid">
        {featuredWork.map((item) => (
          <Card key={item.slug || item.name} data={item} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedWork;
