import './style.css';
import BotonPrincipal from '../botonPrincipal/botonPrincipal';
import { deleteUserById } from '../../utils/utils';
import { useHistory } from "react-router-dom";

export default function CardDetails(props){

    const history = useHistory();

    const deleteUser = () => {
        deleteUserById(props.usuario.id);
        history.push("/eliminar");
    }

    const updateUser = ()=> {
        history.push("/modificaciones/"+ props.usuario.id);
    }

    return(
        <div className='card_container'>
                <h1 className='border_bottom'>{props.usuario.nombre}</h1>
                <p>ID usuario: {props.usuario.id}</p>
                <p>Teléfono: {props.usuario.telefono}</p>
                <p>correo: {props.usuario.correo}</p>
                <p>Fecha de nacimiento: {props.usuario.fechaNacimiento}</p>
                <div>
                    <BotonPrincipal contenido='Modificar' color='blue' submit={updateUser}></BotonPrincipal>
                    <BotonPrincipal contenido='Eliminar' color='gray' submit={deleteUser}></BotonPrincipal>
                </div>
                
        </div>
    )
}