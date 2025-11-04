import { useEffect, useRef, useState } from 'react';

const AboutCarousel = ({ items = [], interval = 4000 }) => {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    startTimer();
    return () => stopTimer();
  }, [index]);

  function startTimer() {
    stopTimer();
    timerRef.current = setTimeout(() => {
      setIndex((i) => (i + 1) % Math.max(1, items.length));
    }, interval);
  }

  function stopTimer() {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }

  function goTo(i) {
    setIndex(((i % items.length) + items.length) % items.length);
  }

  if (!items || items.length === 0) return null;

  return (
    <div
      className="about-carousel"
      onMouseEnter={() => stopTimer()}
      onMouseLeave={() => startTimer()}
      ref={containerRef}
    >
      <div className="carousel-window">
        {items.map((it, i) => (
          <figure
            className={`carousel-slide ${i === index ? 'active' : ''}`}
            key={i}
            aria-hidden={i === index ? 'false' : 'true'}
            style={{ transform: `translateX(${100 * (i - index)}%)` }}
          >
            <img src={it.image} alt={it.title} />
            <figcaption className="carousel-caption">{it.title}</figcaption>
          </figure>
        ))}
      </div>

      <button className="carousel-nav prev" onClick={() => goTo(index - 1)} aria-label="Previous">
        ‹
      </button>
      <button className="carousel-nav next" onClick={() => goTo(index + 1)} aria-label="Next">
        ›
      </button>

      <div className="carousel-dots">
        {items.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === index ? 'active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Show ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutCarousel;
