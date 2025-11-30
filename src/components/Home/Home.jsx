import { Container, Row, Col } from "react-bootstrap";
import HomeAbout from "./HomeAbout";
import Type from "./Type";


const Home = () => {
    return (
        <section>
            <Container fluid className="home-section" id="home">
                {/* Círculos de gradiente decorativos */}
                <div className="gradient-circle-1"></div>
                <div className="gradient-circle-2"></div>
                <div className="gradient-circle-3"></div>
                <div className="gradient-circle-4"></div>

                <Container className="home-content">
                    <Row className="align-items-center">
                        <Col md={7} className="home-header">
                            <h1 style={{ paddingBottom: 15 }} className="heading">
                                Hola!{" "}
                                <span className="wave" role="img" aria-labelledby="wave">
                                    👋🏻
                                </span>
                            </h1>

                            <h1 className="heading-name">
                                SOY
                                <strong className="main-name"> PAZ SANTANGELO</strong>
                            </h1>

                            <div style={{ padding: 40, textAlign: "left" }}>
                                <Type />
                            </div>
                        </Col>

                        <Col md={5} style={{ position: "relative", paddingBottom: 20 }}>
                            <div className="photo-blob"></div>
                            <img
                                src="https://res.cloudinary.com/dnw0mx8qr/image/upload/v1754854970/foto-perfil_ket3pd.png"
                                alt="home pic"
                                className="img-fluid profile-photo"
                                style={{ maxHeight: "480px" }}
                            />
                        </Col>
                    </Row>
                </Container>
            </Container>
            <HomeAbout />
        </section>
    )
}

export default Home