const ExperienceCard = ({
  jobTitle,
  company,
  description,
  startDate,
  endDate,
}) => {
  return (
    <div className="experience-card-custom">
      <h3>{jobTitle}</h3>
      <h4>{company}</h4>
      <p className="experience-dates">
        {startDate} - {endDate || "Actualidad"}
      </p>
      <p className="experience-description">{description}</p>
    </div>
  );
};

export default ExperienceCard;
