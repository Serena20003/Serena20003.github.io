import pdf from './Components/Assets/SerenaLi_resume_26_esri_uc.pdf';

const Contact = () => {
  const actions = [
    { label: 'Email', href: 'mailto:scli@usc.edu' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/-serena-li-/' },
    { label: 'Resume', href: pdf },
  ];

  return (
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
            I love exchanging perspectives with different people, that&apos;s how I grow!
          </p>
          <p className="body">
            Reach out if you&apos;d like to chat!
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

      <div className="section-kicker">Let&apos;s connect</div>
      <div className="title section-title">Contact</div>
      <div className="contact-shell">
        <div className="contact-panel">
          <p className="body">
            I love exchanging perspectives with different people, that&apos;s how I grow!
          </p>
          <p className="body">
            Reach out if you&apos;d like to chat!
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

