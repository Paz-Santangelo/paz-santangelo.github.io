import { useState } from "react";
import { Navbar as NavbarBS } from "react-bootstrap";
import { Nav as NavBS } from "react-bootstrap";
import { Container as ContainerBS } from "react-bootstrap";
import { Link } from "react-router-dom";

import {
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

const Navbar = () => {
    const [expand, updateExpanded] = useState(false);
    const [navColour, updateNavbar] = useState(false);

    function scrollHandler() {
        if (window.scrollY >= 20) {
            updateNavbar(true);
        } else {
            updateNavbar(false);
        }
    }

    window.addEventListener("scroll", scrollHandler);

    return (
        <NavbarBS
            expanded={expand}
            fixed="top"
            expand="md"
            variant="dark"
            className={navColour ? "sticky" : "navbar navbar-transparent"}
        >
            <ContainerBS>
                <NavbarBS.Toggle
                    aria-controls="responsive-navbar-nav"
                    onClick={() => {
                        updateExpanded(expand ? false : "expanded");
                    }}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </NavbarBS.Toggle>
                <NavbarBS.Collapse id="responsive-navbar-nav">
                    <NavBS className="ms-auto" defaultActiveKey="#home">
                        <NavBS.Item>
                            <NavBS.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
                            </NavBS.Link>
                        </NavBS.Item>

                        <NavBS.Item>
                            <NavBS.Link
                                as={Link}
                                to="/about"
                                onClick={() => updateExpanded(false)}
                            >
                                <AiOutlineUser style={{ marginBottom: "2px" }} /> Sobre mí
                            </NavBS.Link>
                        </NavBS.Item>

                        <NavBS.Item>
                            <NavBS.Link
                                as={Link}
                                to="/experience"
                                onClick={() => updateExpanded(false)}
                            >
                                <AiOutlineUser style={{ marginBottom: "2px" }} /> Experiencia
                            </NavBS.Link>
                        </NavBS.Item>

                        <NavBS.Item>
                            <NavBS.Link
                                as={Link}
                                to="/project"
                                onClick={() => updateExpanded(false)}
                            >
                                <AiOutlineFundProjectionScreen
                                    style={{ marginBottom: "2px" }}
                                />{" "}
                                Proyectos
                            </NavBS.Link>
                        </NavBS.Item>

                        <NavBS.Item>
                            <NavBS.Link
                                as={Link}
                                to="/resume"
                                onClick={() => updateExpanded(false)}
                            >
                                <CgFileDocument style={{ marginBottom: "2px" }} /> Mi CV
                            </NavBS.Link>
                        </NavBS.Item>
                    </NavBS>
                </NavbarBS.Collapse>
            </ContainerBS>
        </NavbarBS>
    );
}

export default Navbar