import React from 'react';

const AboutWaterfall = ({ items = [] }) => {
  if (!items || items.length === 0) return null;

  return (
    <div className="about-waterfall">
      {items.map((it, i) => (
        <figure className="waterfall-item" key={i}>
          <div className="waterfall-image-wrap">
            <img src={it.image} alt={it.title} />
          </div>
          <figcaption className="waterfall-caption">{it.title}</figcaption>
        </figure>
      ))}
    </div>
  );
};

export default AboutWaterfall;
