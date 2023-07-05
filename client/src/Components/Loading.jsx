import { Spinner } from "react-bootstrap";
import "./Components.css";

function Loading({ loading, children }) {
    if (loading) {
        return (
            <div className="containerLoading">
                <Spinner animation="grow" role="status">
                    <span className="visually-hidden">Cargando...</span>
                </Spinner>
            </div>
        )
    }else{
        return(
        <>
        {children}
        </>)
    }
};

export default Loading;