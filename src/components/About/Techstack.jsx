import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiJava,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import {
  SiPostgresql,
  SiSpringboot,
  SiMysql,
  SiRedux,
  SiBootstrap,
  SiMui,
} from "react-icons/si";
import tippy, { followCursor } from "tippy.js";
import "tippy.js/dist/tippy.css";

const Techstack = () => {
  useEffect(() => {
    // Configurar tooltips para cada tecnología
    tippy(".tech-icons", {
      followCursor: true,
      arrow: false,
      theme: "custom",
      plugins: [followCursor],
    });
  }, []);

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" data-tippy-content="Java">
        <DiJava />
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        data-tippy-content="Spring Boot"
      >
        <SiSpringboot />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tippy-content="MySQL">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tippy-content="PostgreSQL">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tippy-content="JavaScript">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tippy-content="HTML5">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tippy-content="CSS3">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tippy-content="React">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tippy-content="Redux">
        <SiRedux />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tippy-content="Bootstrap">
        <SiBootstrap />
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        data-tippy-content="Material UI"
      >
        <SiMui />
      </Col>
    </Row>
  );
};

export default Techstack;
