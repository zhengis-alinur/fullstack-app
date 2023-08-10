import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import SignupForm from "../components/SignupForm";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../app/redux/hooks";
import { selectSuccessLogin } from "../app/selectors";

const Signup = () => {
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
            <h1>Signup Page</h1>
            <SignupForm />
        </Container>
    );
};

export default Signup;
