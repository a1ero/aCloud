import React from 'react';
import Logo from "../image/logo.png"
import { Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../reducers/userReducer';

function Header (){ 
    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()

    return (
        <Navbar sticky="top" bg="dark" variant="dark">
            <Container>
                <Nav.Link as={Link} to="/">
                    <Navbar.Brand>
                        <img 
                            src={Logo}
                            height="40"
                            className="d-inline-block alight-top"
                            alt="Logo"
                        />
                    </Navbar.Brand>
                </Nav.Link>
                <Container/>
                    {!isAuth && <Nav className="me-auto navbar__login">
                        <Nav.Link as={Link} to="/login">Sign&nbsp;in</Nav.Link>
                    </Nav>}
                    {isAuth && <Nav.Link className="me-auto navbar__login" style={{color: 'white'}} onClick={() => dispatch(logout())}>Log&nbsp;out
                    </Nav.Link>}
            </Container>
        </Navbar>
    );
};

export default Header;
