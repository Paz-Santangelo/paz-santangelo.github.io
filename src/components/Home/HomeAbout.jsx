import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const HomeAbout = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.3em" }}>
              TE CUENTO UN POCO <span className="purple">SOBRE MÍ</span>
            </h1>
            <p className="home-about-body">
              Proveniente del mundo de la salud, descubrí en la programación una
              nueva forma de cuidar y construir: esta vez, a través del código.
              <br />
              <br />
              Soy{" "}
              <b className="purple">
                desarrolladora backend especializada en Java y Spring Boot
              </b>
              , con sólida formación académica, una ética de trabajo impecable,
              y un fuerte compromiso con la calidad.
              <br />
              <br />
              Me apasiona crear APIs limpias, eficientes y bien documentadas,
              trabajar en equipo y aportar valor desde la escucha, la empatía y
              el orden.
              <i> Combino pensamiento lógico con sensibilidad humana</i>, lo que
              me convierte en una pieza valiosa para cualquier equipo técnico.
              <br />
              <br />
              Actualmente estoy profundizando en{" "}
              <b className="purple">microservicios con Spring Cloud</b>,
              estudiando <b className="purple">Spring Security</b> y, además,
              tengo conocimientos complementarios en{" "}
              <b className="purple">React.js, Redux, Material UI y Bootstrap</b>, que
              me permiten entender el frontend desde el backend.
              <br />
              <br />
              Si buscás una profesional comprometida, en constante aprendizaje y
              con visión de equipo, estoy lista para sumarme a tu próximo
              desafío.
            </p>
          </Col>
          <Col md={4} className="img-home-main">
            <img
              src="https://res.cloudinary.com/dnw0mx8qr/image/upload/v1754855310/home-main_uvkrcj.svg"
              className="img-fluid"
              alt="imagen de Home"
            />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ENCUÉNTRAME EN</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Paz-Santangelo"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/paz-santangelo/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
            <p>
              Siéntete libre de<span className="purple"> conectarte </span>
              conmigo
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default HomeAbout;
