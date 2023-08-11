import React, { useEffect } from "react";
import LoginForm from "../components/LoginForm";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../app/redux/hooks";
import NavBar from "../components/NavBar";
import { selectIsAuthenticated, selectUser } from "../app/selectors";

const Login = () => {
    const navigate = useNavigate();
    const authenticated = useAppSelector(selectIsAuthenticated);
    const user = useAppSelector(selectUser);

    useEffect(() => {
        if (authenticated && user) navigate("/");
    });

    return (
        <>
            <NavBar />
            <Container
                className="d-flex flex-column justify-content-start align-items-center"
                style={{ minHeight: "100vh" }}
            >
                <h1 className="m-5">Login Page</h1>
                <LoginForm />
            </Container>
        </>
    );
};

export default Login;
