import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/redux/hooks";
import { fetchUsers } from "../app/redux/thunk";
import { Container } from "react-bootstrap";
import Table from "../components/Table";
import { selectUsers } from "../app/selectors";
import NavBar from "../components/NavBar";

function Home() {
    const users = useAppSelector(selectUsers);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
        const interval = setInterval(() => {
            dispatch(fetchUsers());
        }, 5000);
        return () => clearInterval(interval);
    }, [dispatch]);

    return (
        <>
            <NavBar />
            <Container
                className="d-flex justify-content-center align-items-start"
                style={{ minHeight: "100vh" }}
            >
                <Table users={users} />
            </Container>
        </>
    );
}

export default Home;
