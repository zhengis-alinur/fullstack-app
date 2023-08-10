import React, { useEffect, useState } from "react";
import { Form, Button, Stack } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../app/redux/hooks";
import { authenticate, signup } from "../app/redux/thunk";
import { useNavigate } from "react-router-dom";

const SignupForm: React.FC = () => {
    const [formState, setFormState] = useState<{
        username: string;
        email: string;
        password: string;
    }>({ username: "", email: "", password: "" });

    const successLogin = useAppSelector((state) => state.auth.success);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (successLogin) navigate("/");
    });

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target.id;
        setFormState({ ...formState, [target]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(
            signup({
                username: formState.username,
                email: formState.email,
                password: formState.password,
            })
        );
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Stack className="" gap={3}>
                <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter username"
                        value={formState.username}
                        onChange={handleFormChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={formState.email}
                        onChange={handleFormChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={formState.password}
                        onChange={handleFormChange}
                        required
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Sign up
                </Button>
                <Button
                    variant="secondary"
                    type="button"
                    onClick={() => navigate("/login")}
                >
                    Login
                </Button>
            </Stack>
        </Form>
    );
};

export default SignupForm;
