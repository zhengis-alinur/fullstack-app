import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/redux/hooks";
import { fetchUsers } from "../app/redux/thunk";
import { Container } from "react-bootstrap";
import Table from "../components/Table";
import { selectUsers } from "../app/selectors";

function Home() {
    const users = useAppSelector(selectUsers);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "100vh" }}
        >
            <Table users={users} />
        </Container>
    );
}

export default Home;
