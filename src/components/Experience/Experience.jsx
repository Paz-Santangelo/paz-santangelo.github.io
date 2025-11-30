import { Col, Container, Row } from "react-bootstrap";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  const experience = [
    {
      id: 1,
      jobTitle: "Desarrolladora Full Stack",
      company: "G&L Group",
      description:
        "Desarrollo y mantenimiento de aplicaciones web utilizando React.js, Spring Boot y bases de datos SQL. Integración de APIs y optimización del rendimiento.",
      startDate: "Septiembre 2023",
      endDate: "Julio 2025",
    },
    {
      id: 2,
      jobTitle: "Desarrolladora Full Stack",
      company: "G&L Group",
      description:
        "Desarrollo y mantenimiento de aplicaciones web utilizando React.js, Spring Boot y bases de datos SQL. Integración de APIs y optimización del rendimiento.",
      startDate: "Septiembre 2023",
      endDate: "Julio 2025",
    },
  ];

  return (
    <Container fluid className="experience-section">
      <h1 className="project-heading">
        Mi <strong className="purple">Experiencia</strong>
      </h1>
      <Row className="justify-content-center g-4 px-3 p-4">
        {experience.map((exp) => (
          <Col xs={12} md={10} lg={7} key={exp.id}>
            <ExperienceCard {...exp} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Experience;
