import React, { useEffect, useState } from "react";
import { Form, Button, Stack } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../app/redux/hooks";
import { authenticate } from "../app/redux/thunk";
import { useNavigate } from "react-router-dom";
import { selectSuccessLogin } from "../app/selectors";

const LoginForm: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const successLogin = useAppSelector(selectSuccessLogin);

    useEffect(() => {
        if (successLogin) navigate("/");
    });

    const [formState, setFormState] = useState<{
        email: string;
        password: string;
    }>({ email: "", password: "" });

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target.id;
        setFormState({ ...formState, [target]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(
            authenticate({
                email: formState.email,
                password: formState.password,
            })
        );
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Stack className="" gap={3}>
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
                    Log In
                </Button>
                <Button
                    variant="secondary"
                    type="button"
                    onClick={() => navigate("/signup")}
                >
                    Sign up
                </Button>
            </Stack>
        </Form>
    );
};

export default LoginForm;
