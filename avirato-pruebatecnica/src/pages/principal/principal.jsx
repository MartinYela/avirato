import BotonPrincipal from '../../component/botonPrincipal/botonPrincipal';
import './style.css';
import { login } from '../../utils/utils.jsx';
import { useState } from 'react';

export default function Principal() {

    const [isRegister, setIsRegister] = useState(false);

    const login1 = (e) => {
        e.preventDefault();
        login(e.target.usuario.value, e.target.pass.value);
        
        setIsRegister(!isRegister)
    }

    return (
        <div>
            {isRegister ?
            <h1 className='islog'>Se ha logueado correctamente</h1>:
                <section className='container_principalPage'>
                    <div className='container_title'>
                        <h1>¡Bienvenido/a a su gestor de usuarios!</h1>
                        <p>Introduzca sus datos de acceso</p>
                    </div>
                    <form className='container_form' onSubmit={login1}>
                        <input type="text" placeholder='Usuario' name='usuario' required />
                        <input type="password" placeholder='Password' name='pass' required />
                        <BotonPrincipal contenido='Iniciar sesión' color='blue' type='submit'></BotonPrincipal>
                    </form>
                </section>
                }
        </div>

    )
}