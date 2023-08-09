import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAppSelector } from "./redux/hooks";

interface ProtectedRouteProps {
    element: React.ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
    const isAuthenticated = useAppSelector(
        (state) => state.auth.isAuthenticated
    );
    if (isAuthenticated) {
        return <Route element={element} />;
    } else {
        return <Navigate to={"/login"} />;
    }
};

export default ProtectedRoute;
