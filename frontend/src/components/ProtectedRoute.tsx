import React from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../app/redux/hooks";
import { selectIsAuthenticated } from "../app/selectors";

interface ProtectedRouteProps {
    element: React.ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
    const isAuthenticated = useAppSelector(selectIsAuthenticated);
    if (isAuthenticated) {
        return element;
    } else {
        return <Navigate to={"/login"} />;
    }
};

export default ProtectedRoute;
