import { Link, useParams } from 'react-router-dom';
import { workBySlug } from './workData';

const sections = [
  { key: 'context', title: 'Context' },
  { key: 'owned', title: 'What I owned' },
  { key: 'constraints', title: 'Constraints' },
  { key: 'technicalApproach', title: 'Technical approach' },
  { key: 'outcome', title: 'Outcome' },
];

const WorkDetail = () => {
  const { slug } = useParams();
  const work = workBySlug[slug];

  if (!work || !work.caseStudy) {
    return (
      <main className="detail-page">
        <div className="detail-shell">
          <div className="section-kicker">Work not found</div>
          <h1 className="detail-title">This case study is not available yet.</h1>
          <Link className="read_more" to="/">
            Back to home →
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="detail-page">
      <div className="detail-shell">
        <div className="section-kicker">
          {work.kind === 'project' ? 'Project case study' : 'Experience case study'}
        </div>
        <h1 className="detail-title">{work.name}</h1>
        <p className="detail-subtitle">{work.summary}</p>
        <div className="detail-impact">{work.impact}</div>

        <div className="detail-tags">
          {work.tags.map((tag) => (
            <div className="tag" key={tag}>
              {tag}
            </div>
          ))}
        </div>

        <div className="detail-grid">
          {sections.map((section) => (
            <section className="detail-card" key={section.key}>
              <h2>{section.title}</h2>
              <p className="body">{work.caseStudy[section.key]}</p>
            </section>
          ))}
        </div>

        {work.links && work.links.length > 0 && (
          <div className="detail-links">
            {work.links.map((link) => (
              <a
                className="contact-action"
                href={link.url}
                key={link.label}
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default WorkDetail;
