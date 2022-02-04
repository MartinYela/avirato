import { useEffect, useState } from 'react';
import CardDetails from '../../component/cardDetails/cardDetails';
import './style.css';

export default function Details() {

    const [listUsers, setListUSers] = useState([]);
    // En la línea de abajo he hecho un renderizado condicional para que si no hay token no de error, y salga un mensaje. No me dio tiempo a hacerlo mejor
    const hasToken = sessionStorage.getItem('access_token')===null?false:true;
    

    const search = (input) => {
        console.log(input.target.value)
        fetch('https://examen.avirato.com/client/get/search?search='+input.target.value, {
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('access_token')}`
            } 
        })
        .then(r => r.json())
        .then(d=> setListUSers(d))
    }

    useEffect(() => {
        fetch('https://examen.avirato.com/client/get', {
        headers: {
            'Authorization': `Bearer ${sessionStorage.getItem('access_token')}`
        } 
    })
    .then(r => r.json())
    .then(d=> setListUSers(d))
    },[])

    return (
        <div >
            {hasToken ?<div className='details_container'>
                <input type="text" placeholder='Buscar por nombre de usuario'
            className='search'
            onChange={search}
            />
            <div className='cards_container'>
                {listUsers?.map((usuario, i)=> <CardDetails usuario={usuario} key={i}></CardDetails>)}
            </div>
            </div>
            
            :<h1>Tienes que loguearte para entrar a está sección, por favor ve al <a href='/'>login</a></h1>}
        </div>

    )
}