import React from "react";
import { Container } from "react-bootstrap";
import SignupForm from "../components/SignupForm";

const Signup = () => {
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
