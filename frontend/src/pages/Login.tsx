import React from "react";
import LoginForm from "../components/LoginForm";
import { Container } from "react-bootstrap";

const Login = () => {
    return (
        <Container
            className="d-flex flex-column justify-content-center align-items-center g-10"
            style={{ minHeight: "100vh" }}
        >
            <h1>Login Page</h1>
            <LoginForm />
        </Container>
    );
};

export default Login;
