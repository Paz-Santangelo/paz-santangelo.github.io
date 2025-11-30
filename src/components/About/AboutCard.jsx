import Card from "react-bootstrap/Card";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";

const AboutCard = () => {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            ¡Hola! Soy <span className="purple">Paz Santangelo</span>,
            Desarrolladora Backend especializada en{" "}
            <strong>Java, Spring Boot y Spring Cloud</strong>. Tengo experiencia
            construyendo <strong>APIs REST</strong> robustas, integrando bases
            de datos como <strong>MySQL</strong> y <strong>PostgreSQL</strong>,
            y también poseo conocimientos en <strong>Frontend</strong> con
            React, Bootstrap y Material UI.
            <br />
            <br />
            Me apasiona diseñar soluciones escalables y eficientes, aplicando
            buenas prácticas, patrones de diseño y metodologías ágiles como{" "}
            <strong>Scrum</strong>.
            <br />
            <br />
            Fuera del código, soy una persona curiosa, organizada y siempre
            orientada al aprendizaje continuo. Disfruto enfrentar nuevos retos
            que me permitan crecer profesional y personalmente.
          </p>

          <ul>
            <li className="about-activity">
              <HiOutlineChevronDoubleRight /> Aprender nuevas tecnologías y
              buenas prácticas
            </li>
            <li className="about-activity">
              <HiOutlineChevronDoubleRight /> Desarrollar proyectos personales
              para mi portfolio
            </li>
            <li className="about-activity">
              <HiOutlineChevronDoubleRight /> Explicar y ayudar a otros cuando
              lo necesitan
            </li>
            <li className="about-activity">
              <HiOutlineChevronDoubleRight /> Trabajar en equipo para alcanzar
              un objetivo en común
            </li>
          </ul>

          <div className="quote-container">
            <p className="quote-text">
              "El código no solo resuelve problemas, también crea
              oportunidades."
            </p>
            <footer className="blockquote-footer">Paz</footer>
          </div>
        </blockquote>
      </Card.Body>
    </Card>
  );
};

export default AboutCard;
