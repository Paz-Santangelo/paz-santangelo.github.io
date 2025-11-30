import { useState } from "react";
import { Navbar as NavbarBS } from "react-bootstrap";
import { Nav as NavBS } from "react-bootstrap";
import { Container as ContainerBS } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

import {
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";
import { MdWorkOutline } from "react-icons/md";

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
                            <NavBS.Link as={NavLink} to="/" onClick={() => updateExpanded(false)} end>
                                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
                            </NavBS.Link>
                        </NavBS.Item>

                        <NavBS.Item>
                            <NavBS.Link
                                as={NavLink}
                                to="/about"
                                onClick={() => updateExpanded(false)}
                            >
                                <AiOutlineUser style={{ marginBottom: "2px" }} /> Sobre mí
                            </NavBS.Link>
                        </NavBS.Item>

                        <NavBS.Item>
                            <NavBS.Link
                                as={NavLink}
                                to="/experience"
                                onClick={() => updateExpanded(false)}
                            >
                                <MdWorkOutline style={{ marginBottom: "2px" }} /> Experiencia
                            </NavBS.Link>
                        </NavBS.Item>

                        <NavBS.Item>
                            <NavBS.Link
                                as={NavLink}
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
                                as={NavLink}
                                to="/resume"
                                onClick={() => updateExpanded(false)}
                            >
                                <CgFileDocument style={{ marginBottom: "2px" }} /> Mi CV
                            </NavBS.Link>
                        </NavBS.Item>

                        <NavBS.Item className="theme-toggle-nav-item theme-toggle-desktop">
                            <ThemeToggle />
                        </NavBS.Item>
                    </NavBS>
                </NavbarBS.Collapse>
            </ContainerBS>
        </NavbarBS>
    );
}

export default Navbar;