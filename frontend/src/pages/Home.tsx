import React from "react";
import { useAppDispatch, useAppSelector } from "../app/redux/hooks";
import { fetchUsers } from "../app/redux/thunk";

function Home() {
    const users = useAppSelector((state) => state.users.users);
    const dispatch = useAppDispatch();

    const handleClick = () => {
        dispatch(fetchUsers());
    };

    return (
        <div className="App">
            <h1>Hello world</h1>
            <button
                onClick={() => {
                    handleClick();
                }}
            >
                Load
            </button>
            <div>
                {users.map((user) => (
                    <h1>{user.username}</h1>
                ))}
            </div>
        </div>
    );
}

export default Home;
