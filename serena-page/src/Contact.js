import pdf from './Components/Assets/Serena_Li_resume_26S.pdf';

const Contact = () => {
  const actions = [
    { label: 'Email', href: 'mailto:scli@usc.edu' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/-serena-li-/' },
    { label: 'Resume', href: pdf },
  ];

  return (
    <section className="site-section" id="Contact">
      <div className="section-kicker">Let&apos;s connect</div>
      <div className="title section-title">Contact</div>
      <div className="contact-shell">
        <div className="contact-panel">
          <p className="body">
            Currently seeking software engineering opportunities where I can
            keep growing in frontend, mobile, and product-facing work.
          </p>
          <p className="body">
            If you think there&apos;s a fit, I&apos;d love to talk.
          </p>
        </div>
        <div className="contact-actions">
          {actions.map((action) => (
            <a
              className="contact-action"
              href={action.href}
              key={action.label}
              target={action.href.startsWith('http') ? '_blank' : undefined}
              rel={action.href.startsWith('http') ? 'noreferrer' : undefined}
            >
              {action.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
