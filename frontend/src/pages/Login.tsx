import React, { useEffect } from "react";
import LoginForm from "../components/LoginForm";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../app/redux/hooks";
import { selectSuccessLogin } from "../app/selectors";

const Login = () => {
    const successLogin = useAppSelector(selectSuccessLogin);
    const navigate = useNavigate();

    useEffect(() => {
        if (successLogin) navigate("/");
    });

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
