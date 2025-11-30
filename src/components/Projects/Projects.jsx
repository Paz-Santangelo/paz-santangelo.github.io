import { Row, Col, Container } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Rochas Hotel - Sistema de Reservas",
      description: "Aplicación web para gestión de reservas en hoteles.",
      imageSrc:
        "https://res.cloudinary.com/dnw0mx8qr/image/upload/v1764170634/Captura-RochasHotel_syvpmo.jpg",
      links: {
        frontend:
          "https://github.com/Paz-Santangelo/Frontend-MiniApp-RochasHotel",
        backend:
          "https://github.com/Paz-Santangelo/Backend-MiniApp-RochasHotel",
      },
    },
    {
      id: 2,
      title: "DescubríCBA - App de Turismo",
      description:
        "Plataforma para explorar destinos turísticos y actividades.",
      imageSrc:
        "https://res.cloudinary.com/dnw0mx8qr/image/upload/v1764175745/DescubriCBA_z1sqxv.png",
      links: {
        frontend: "https://github.com/Paz-Santangelo/Frontend-DescubriCBA",
        backend: "https://github.com/Paz-Santangelo/Backend-DescubriCBA",
      },
    },
  ];

  return (
    <Container fluid className="project-section">
      <h1 className="project-heading">
        Mis <strong className="purple">Proyectos</strong>
      </h1>
      <Row className="justify-content-center g-4 px-3 p-4">
        {projects.map((proj) => (
          <Col xs={12} md={6} key={proj.id}>
            <ProjectCard
              img={proj.imageSrc}
              title={proj.title}
              description={proj.description}
              links={proj.links}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
