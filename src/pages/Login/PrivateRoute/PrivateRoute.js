import { Spinner } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth"

const PrivateRoute = ({ children }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return <div className="d-flex justify-content-center">
            <Spinner animation="border" size="sm" />
            <Spinner animation="border" />
            <Spinner animation="grow" size="sm" />
            <Spinner animation="grow" />
        </div>
    }
    return user?.email ? children : <Navigate to="/login" />;
}
export default PrivateRoute;