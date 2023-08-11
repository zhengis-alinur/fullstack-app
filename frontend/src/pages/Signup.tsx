import React from "react";
import { Container } from "react-bootstrap";
import SignupForm from "../components/SignupForm";
import NavBar from "../components/NavBar";

const Signup = () => {
    return (
        <>
            <NavBar />
            <Container
                className="d-flex flex-column justify-content-start align-items-center g-10"
                style={{ minHeight: "100vh" }}
            >
                <h1 className="m-5">Signup Page</h1>
                <SignupForm />
            </Container>
        </>
    );
};

export default Signup;
