import React from 'react';

import { Link } from 'react-router-dom';

import { Navbar, Button, Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="light">
            <Navbar.Brand as={Link} to="/">Todo list</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav.Link as={Link} to="/todos">
                    Todos
                </Nav.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;
