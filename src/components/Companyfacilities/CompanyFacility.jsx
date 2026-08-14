const CompanyFacility = ({ title, description }) => {
  return (
    <section className="facility facilities-gsap">
      <div>
        <h3 className="facility-title">{title}</h3>
        <div className="facility-title-line"></div>
      </div>
      <p className="facility-description">{description}</p>
    </section>
  );
};
export default CompanyFacility;
