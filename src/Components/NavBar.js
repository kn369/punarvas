import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useLocation } from "react-router-dom";

const NavBar = () => {
	const location = useLocation();

	return (
		<Navbar bg="dark" variant="dark" expand="lg" className="bg-dark">
			<Container>
				<Navbar.Brand href="/home">Punarvas</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="/home" active={location.pathname === "/home"}>
							Home
						</Nav.Link>
						<Nav.Link href="/about" active={location.pathname === "/about"}>
							About Us
						</Nav.Link>
						<Nav.Link
							href="/services"
							active={location.pathname === "/services"}
						>
							Services
						</Nav.Link>
						<Nav.Link href="/contact" active={location.pathname === "/contact"}>
							Contact
						</Nav.Link>
						<Nav.Link
							href="/volunteer"
							active={location.pathname === "/volunteer"}
						>
							Volunteer
						</Nav.Link>
						<Nav.Link
							href="/awareness"
							active={location.pathname === "/awareness"}
						>
							Awareness
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavBar;
