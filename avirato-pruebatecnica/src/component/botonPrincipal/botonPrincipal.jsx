import './style.css';

export default function BotonPrincipal({contenido, color, submit}){
    return(
        <button className={color} onClick={submit}>{contenido}</button>
    )
}