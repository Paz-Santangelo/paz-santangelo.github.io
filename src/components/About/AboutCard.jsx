import Card from "react-bootstrap/Card";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";

const AboutCard = () => {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            ¡Hola! Soy <b className="purple">Paz Santangelo</b>, Desarrolladora
            Backend especializada en <b className="purple">Java</b>,{" "}
            <b className="purple">Spring Boot</b> y{" "}
            <b className="purple">Spring Cloud</b>. Tengo experiencia
            construyendo <b className="purple">APIs REST</b> robustas, integrando bases
            de datos como <b className="purple">MySQL</b> y <b className="purple">PostgreSQL</b>,
            y también poseo conocimientos en <b className="purple">Frontend</b> con
            React, Bootstrap y Material UI.
            <br />
            <br />
            Me apasiona diseñar soluciones escalables y eficientes, aplicando
            buenas prácticas, patrones de diseño y metodologías ágiles como{" "}
            <b className="purple">Scrum</b>.
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
