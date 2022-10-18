const Section = ({ title, children }) => {
  return (
    // <div className="container">
    // </div>
    <section>
      {title && <h2 className="sectionTitle">{title}</h2>}
      {children}
    </section>
  );
};

export default Section;
