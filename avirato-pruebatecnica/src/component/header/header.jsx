import './style.css';
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';

export default function Header() {
    return(
        <header>
            <Link to='/'><img className='logo' src={logo} alt="Logo de avirato" /></Link>
            <div>
                <ul className='listMenu'>
                    <li><Link to='/altas'>Altas</Link></li>
                    <li><Link to='/detalles'>Detalles</Link></li>
                </ul>
            </div>
        </header>
    )
}