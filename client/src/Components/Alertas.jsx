import { Alert } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import "./Components.css"

function Alertas({variant, text, link, duration = 0}){
 const navigate = useNavigate();
 if( duration !== 0 && link ){
    setTimeout(()=>{
        navigate(link);
    }, duration);
 }
return <Alert variant={variant} size="sm" className="alertas">{text} </Alert>
};

export default Alertas;