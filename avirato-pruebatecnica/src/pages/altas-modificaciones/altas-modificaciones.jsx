import BotonPrincipal from '../../component/botonPrincipal/botonPrincipal';
import './style.css';
import { useHistory, useParams } from 'react-router-dom';
import { registerUser } from '../../utils/utils';
import { updateUserById } from '../../utils/utils';

export default function AltasModificaciones({ title, button }) {

    const {id} = useParams();   // acá obtengo el id del usuario 
    const history = useHistory();  

    const sendForm = (d) => {
        d.preventDefault();
        title ==='Altas' ? registerUser(d.target.name.value, d.target.tel.value, d.target.email.value, d.target.date.value): updateUserById(d.target.name.value, d.target.tel.value, d.target.email.value, d.target.date.value, id);
        history.push('/mensajeAltaModificacion')
        
    }

    return (
        <section className='altas_container'>
            <div className='titleAltas'>
                <h1>{title}</h1>
                <p>Introduzca los datos del usuario</p>
            </div>
            <form className='form_container' onSubmit={sendForm}>
                <input type="text" placeholder='Nombre' name='name'/>
                <input type="text" placeholder='Teléfono' name='tel' />
                <input type="text" placeholder='Correo' name='email'/>
                <input type="date" placeholder='Fecha de Nacimiento' name='date'/>
                <BotonPrincipal type='submit' contenido={button} color='blue'></BotonPrincipal>
            </form>
        </section>
    )
}