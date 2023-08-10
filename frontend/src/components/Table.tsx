import React, { useState } from "react";
import { Container, Table } from "react-bootstrap";
import { User } from "../app/types";
import Toolbar from "./Toolbar";
import { deleteUsers, blockUsers, unblockUsers } from "../app/redux/thunk";
import { useAppDispatch } from "../app/redux/hooks";

type Props = {
    users: User[];
};

const View = ({ users }: Props) => {
    const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set());
    const dispatch = useAppDispatch();

    const handleDelete = () => {
        dispatch(deleteUsers(Array.from(selectedRows)));
    };

    const handleBlock = () => {
        dispatch(blockUsers(Array.from(selectedRows)));
    };

    const handleUnblock = () => {
        dispatch(unblockUsers(Array.from(selectedRows)));
    };

    const handleRowSelection = (id: string) => {
        const updatedSelectedRows = new Set(selectedRows);
        if (updatedSelectedRows.has(id)) {
            updatedSelectedRows.delete(id);
        } else {
            updatedSelectedRows.add(id);
        }
        setSelectedRows(updatedSelectedRows);
    };

    const handleSelectAll = () => {
        if (selectedRows.size === users.length) {
            setSelectedRows(new Set());
        } else {
            setSelectedRows(new Set(users.map(({ _id }) => _id)));
        }
    };
    return (
        <Container className="d-flex flex-column justify-content-center align-items-center">
            <Toolbar
                onDelete={handleDelete}
                onBlock={handleBlock}
                onUnblock={handleUnblock}
            />
            <Table responsive striped bordered>
                <thead>
                    <tr>
                        <th>
                            <input
                                type="checkbox"
                                checked={selectedRows.size === users.length}
                                onChange={handleSelectAll}
                            />
                        </th>
                        <th>#</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Created at</th>
                        <th>Last login at</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(
                        (
                            {
                                _id,
                                username,
                                email,
                                lastLogin,
                                createdAt,
                                status,
                            },
                            index
                        ) => (
                            <tr key={_id}>
                                <td>
                                    <input
                                        type="checkbox"
                                        checked={selectedRows.has(_id)}
                                        onChange={() => handleRowSelection(_id)}
                                    />
                                </td>
                                <td>{index}</td>
                                <td>{username}</td>
                                <td>{email}</td>
                                <td>{new Date(createdAt).toLocaleString()}</td>
                                <td>
                                    {lastLogin
                                        ? new Date(lastLogin).toLocaleString()
                                        : "--:--"}
                                </td>
                                <td>{status ? "active" : "blocked"}</td>
                            </tr>
                        )
                    )}
                </tbody>
            </Table>
        </Container>
    );
};

export default View;
