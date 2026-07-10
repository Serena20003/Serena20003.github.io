import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { workBySlug } from './workData';
import {
  buildLegacyCaseStudyDocument,
  parseCaseStudyDocument,
  renderMarkdownBlocks,
} from './caseStudyMarkdown';

const WorkDetail = () => {
  const { slug } = useParams();
  const work = workBySlug[slug];
  const [documentState, setDocumentState] = useState({
    status: 'idle',
    document: null,
  });

  useEffect(() => {
    if (!work || !slug) {
      setDocumentState({ status: 'missing', document: null });
      return undefined;
    }

    let ignore = false;

    const loadCaseStudy = async () => {
      setDocumentState({ status: 'loading', document: null });

      try {
        const response = await fetch(
          `${process.env.PUBLIC_URL || ''}/case-studies/${slug}.md`
        );

        if (!response.ok) {
          throw new Error(`Unable to load case study for ${slug}`);
        }

        const source = await response.text();
        const document = parseCaseStudyDocument(source);

        if (!ignore) {
          setDocumentState({ status: 'ready', document });
        }
      } catch (error) {
        const legacyDocument = buildLegacyCaseStudyDocument(work);

        if (!ignore) {
          setDocumentState({
            status: legacyDocument ? 'fallback' : 'missing',
            document: legacyDocument,
          });
        }
      }
    };

    loadCaseStudy();

    return () => {
      ignore = true;
    };
  }, [slug, work]);

  if (!work) {
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

  const metadata = documentState.document?.metadata || {};
  const title = metadata.title || work.name;
  const summary = metadata.summary || work.summary;
  const impact = metadata.impact || work.impact;
  const tags = Array.isArray(metadata.tags) && metadata.tags.length > 0 ? metadata.tags : work.tags;
  const links =
    Array.isArray(metadata.links) && metadata.links.length > 0 ? metadata.links : work.links;
  const heroImage = metadata.heroImage;
  const heroImageAlt = metadata.heroImageAlt || title;
  const hasBody =
    documentState.document && Array.isArray(documentState.document.blocks) && documentState.document.blocks.length > 0;

  return (
    <main className="detail-page">
      <div className="detail-shell">
        <div className="section-kicker">
          {work.kind === 'project' ? 'Project case study' : 'Experience case study'}
        </div>
        <h1 className="detail-title">
          {documentState.status === 'loading' ? 'Loading case study...' : title}
        </h1>
        {summary ? <p className="detail-subtitle">{summary}</p> : null}
        <div className="detail-meta">
          <span>{metadata.date || work.date}</span>
          {documentState.status === 'fallback' ? (
            <span>Legacy case study content</span>
          ) : null}
        </div>
        {impact ? <div className="detail-impact">{impact}</div> : null}

        {tags && tags.length > 0 ? (
          <div className="detail-tags">
            {tags.map((tag) => (
              <div className="tag" key={tag}>
                {tag}
              </div>
            ))}
          </div>
        ) : null}

        {heroImage ? (
          <div className="detail-hero">
            <img
              src={heroImage}
              alt={heroImageAlt}
              loading="eager"
              decoding="async"
            />
          </div>
        ) : null}

        {documentState.status === 'loading' ? (
          <div className="detail-card">
            <p className="body">Loading markdown content…</p>
          </div>
        ) : hasBody ? (
          <article className="case-study-body">
            {renderMarkdownBlocks(documentState.document.blocks)}
          </article>
        ) : (
          <div className="detail-card">
            <h2>Case study coming soon</h2>
            <p className="body">
              This role is listed on the site, but the long-form writeup has not
              been published yet.
            </p>
          </div>
        )}

        {links && links.length > 0 && (
          <div className="detail-links">
            {links.map((link) => (
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

        <div className="detail-links">
          <Link className="read_more" to="/">
            Back to home →
          </Link>
        </div>
      </div>
    </main>
  );
};

export default WorkDetail;
