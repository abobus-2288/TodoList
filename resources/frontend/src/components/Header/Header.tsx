import React from 'react';

import ReactModal from 'react-modal';

import { Link } from 'react-router-dom';

// import Modal from "@/frontend/src/components/Auth/Modal/Modal";
import { Button, Container, Modal, Nav, Navbar } from 'react-bootstrap';

import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { setAccountLoginIsOpened, setAccountRegisterIsOpened } from "./../../app/actionCreators";
import Register from "@/frontend/src/components/Auth/Modal/Register/Register";
import Login from "@/frontend/src/components/Auth/Modal/Login/Login";


const Header = () => {
    ReactModal.setAppElement('#root');

    const dispatch: Dispatch<any> = useDispatch();
    const loginIsOpened: any = useSelector<any>(state => state.AccountState.LoginIsOpened);
    const registerIsOpened: any = useSelector<any>(state => state.AccountState.RegisterIsOpened);

    const onCloseLogin = () => {
        switch (loginIsOpened) {
            case true:
                dispatch(setAccountLoginIsOpened(false));
                break;
            case false:
                dispatch(setAccountLoginIsOpened(true));
                break;
        }
    }

    const onCloseRegister = () => {
        switch (registerIsOpened) {
            case true:
                dispatch(setAccountRegisterIsOpened(false));
                break;
            case false:
                dispatch(setAccountRegisterIsOpened(true));
                break;
        }
    }

    return (
        <>
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand as={Link} to="/">Todo list</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/todos">
                                Todos
                            </Nav.Link>
                            <Nav.Link onClick={onCloseLogin}>
                                Login
                            </Nav.Link>
                            <Nav.Link onClick={onCloseRegister}>
                                Register
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>

            </Navbar>

            <Modal show={loginIsOpened} onHide={onCloseLogin}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Login onClick={onCloseLogin}/>
            </Modal>

            <Modal height="fit-content" show={registerIsOpened} onHide={onCloseRegister}>
                <Modal.Header closeButton>
                    <Modal.Title>Register</Modal.Title>
                </Modal.Header>
                <Register onClick={onCloseRegister}/>
            </Modal>
        </>
    )
}

export default Header;
