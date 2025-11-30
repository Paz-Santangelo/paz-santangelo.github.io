import { Container, Row, Col } from "react-bootstrap";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";

const About = () => {
    return (
        <Container fluid className="about-section">
            <Container>
                <Row style={{ justifyContent: "center", padding: "10px" }}>
                    <Col
                        md={7}
                        style={{
                            justifyContent: "center",
                            paddingBottom: "50px",
                        }}
                    >
                        <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                            Déjame contarte<strong className="purple"> quién soy</strong>
                        </h1>
                        <Aboutcard />
                    </Col>
                    <Col
                        md={5}
                        style={{ paddingTop: "120px", paddingBottom: "50px" }}
                        className="about-img"
                    >
                        <img src="https://res.cloudinary.com/dnw0mx8qr/image/upload/v1754854969/about_xi29yi.png" alt="Sobre mí" className="img-fluid" />
                    </Col>
                </Row>
                <h1 className="project-heading">
                    Habilidades <strong className="purple">Técnicas </strong>
                </h1>

                <Techstack />

                <h1 className="project-heading">
                    <strong className="purple">Herramientas </strong> que uso
                </h1>
                <Toolstack />

                <Github />
            </Container>
        </Container>
    );
}

export default About