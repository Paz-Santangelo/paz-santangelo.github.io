import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import {
    SiPostman,
    SiDocker,
    SiGit,
    SiGithub,
    SiIntellijidea,
    SiApachemaven,
    SiHibernate,
    SiNpm
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import tippy, { followCursor } from "tippy.js";
import "tippy.js/dist/tippy.css";

const Toolstack = () => {
    useEffect(() => {
        // Configurar tooltips para cada herramienta
        tippy(".tech-icons", {
            followCursor: true,
            arrow: false,
            theme: "custom",
            plugins: [followCursor],
        });
    }, []);

    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons" data-tippy-content="VS Code">
                <VscCode />
            </Col>
            <Col xs={4} md={2} className="tech-icons" data-tippy-content="IntelliJ IDEA">
                <SiIntellijidea />
            </Col>
            <Col xs={4} md={2} className="tech-icons" data-tippy-content="Docker">
                <SiDocker />
            </Col>
            <Col xs={4} md={2} className="tech-icons" data-tippy-content="Postman">
                <SiPostman />
            </Col>
            <Col xs={4} md={2} className="tech-icons" data-tippy-content="Git">
                <SiGit />
            </Col>
            <Col xs={4} md={2} className="tech-icons" data-tippy-content="GitHub">
                <SiGithub />
            </Col>
            <Col xs={4} md={2} className="tech-icons" data-tippy-content="Maven">
                <SiApachemaven />
            </Col>
            <Col xs={4} md={2} className="tech-icons" data-tippy-content="Hibernate">
                <SiHibernate />
            </Col>
            <Col xs={4} md={2} className="tech-icons" data-tippy-content="NPM">
                <SiNpm />
            </Col>
        </Row>
    );
}

export default Toolstack