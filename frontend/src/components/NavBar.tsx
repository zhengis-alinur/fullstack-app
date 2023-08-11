import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../app/redux/hooks";
import { unauthenticate } from "../app/redux/thunk";
import { selectIsAuthenticated, selectUser } from "../app/selectors";
import { Navigate, useNavigate } from "react-router-dom";

const NavBar = () => {
    const isAuthenticated = useAppSelector(selectIsAuthenticated);
    const user = useAppSelector(selectUser);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand>
                    {isAuthenticated ? (
                        <p>
                            User:&nbsp;
                            <span className="fw-bold">{user?.username}</span>
                            &nbsp;
                            {user?.email}
                        </p>
                    ) : (
                        "Fullstack-app"
                    )}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse
                    id="responsive-navbar-nav"
                    className="position-relative"
                    style={{ width: "100vw" }}
                >
                    <Nav className="me-auto"></Nav>
                    {isAuthenticated ? (
                        <Nav>
                            <Nav.Link
                                eventKey={2}
                                onClick={() => navigate("/")}
                            >
                                Go as {user?.email}
                            </Nav.Link>
                            <Nav.Link
                                eventKey={2}
                                onClick={() => dispatch(unauthenticate())}
                            >
                                Logout
                            </Nav.Link>
                        </Nav>
                    ) : (
                        <Nav>
                            <Nav.Link onClick={() => navigate("/signup")}>
                                Sign up
                            </Nav.Link>
                            <Nav.Link
                                eventKey={2}
                                onClick={() => navigate("/login")}
                            >
                                Login
                            </Nav.Link>
                        </Nav>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
