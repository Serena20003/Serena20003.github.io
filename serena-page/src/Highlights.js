const highlights = [
  { value: '40%', label: 'retention lift at TourScout' },
  { value: '90%+', label: 'object-detection confidence at LADOT' },
  { value: '$50K', label: 'HackSC sponsorship secured' },
  { value: '300', label: 'hackathon participants supported' },
];

const Highlights = () => {
  return (
    <section className="highlights-strip" aria-label="Selected wins">
      {highlights.map((item) => (
        <div className="highlight-card" key={item.label}>
          <div className="highlight-value">{item.value}</div>
          <div className="highlight-label">{item.label}</div>
        </div>
      ))}
    </section>
  );
};

export default Highlights;
