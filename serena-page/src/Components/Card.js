import { Link } from 'react-router-dom';

const Card = ({ data }) => {
  const pathToImage = data.image_path ? `/card_images${data.image_path}` : '';
  const initials = data.name
    .split(' ')
    .filter((part) => part[0] && part[0] === part[0].toUpperCase())
    .slice(0, 2)
    .map((part) => part[0])
    .join('');

  const primaryLink = data.slug
    ? { label: 'View case study', href: `/work/${data.slug}`, internal: true }
    : data.links && data.links.length > 0
      ? { ...data.links[0], internal: false }
      : null;

  return (
    <div className="myCard" role="article" aria-label={data.name}>
      <div className="imageWrapper">
        {pathToImage ? (
          <img
            src={pathToImage}
            alt={data.name}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="imageFallback" aria-hidden>
            {initials}
          </div>
        )}
      </div>
      <div className="card-content">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
          <div>
            <div className="title">{data.name}</div>
            <div className="meta-row">
              <div className="myCard_text">{data.date}</div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 8 }}>
          <div className="myCard_text">{data.summary}</div>
        </div>

        {data.impact && <div className="impact-pill">{data.impact}</div>}

        <div style={{ marginTop: 8, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {Array.isArray(data.tags) &&
            data.tags.map((tag) => (
              <div className="tag" key={tag}>
                {tag}
              </div>
            ))}
        </div>

        {primaryLink && (
          <div style={{ marginTop: 8 }}>
            {primaryLink.internal ? (
              <Link className="read_more" to={primaryLink.href}>
                {primaryLink.label} →
              </Link>
            ) : (
              <a
                className="read_more"
                href={primaryLink.url || primaryLink.href}
                target="_blank"
                rel="noreferrer"
              >
                {primaryLink.label} →
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
