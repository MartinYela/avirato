export function login(email, password){
    fetch('https://examen.avirato.com/auth/login', {
        method:'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "email" : email,
            "password": password
        })
    })
    .then(r=> r.json())
    .then(d=> sessionStorage.setItem('access_token', d.access_token))
}

export function deleteUserById(id){
    fetch('https://examen.avirato.com/client/delete/' + id, {
        method: 'DELETE',
        headers:  {
            'Authorization': `Bearer ${sessionStorage.getItem('access_token')}`,
        } ,
    }).then(r=> console.log(r.status))

}
export function updateUserById(nombre, telefono, correo, fechaNacimiento, id){
    fetch('https://examen.avirato.com/client/put', {
        method: 'PUT',
        headers:  {
            'Authorization': `Bearer ${sessionStorage.getItem('access_token')}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "nombre" : nombre,
            "telefono" : parseInt(telefono),
            "correo": correo,
            "fechaNacimiento" : fechaNacimiento,
            "id" : parseInt(id)
        })
    }).then(r=> console.log(r.status))
}
export function registerUser(nombre, telefono, correo, fechaNacimiento){
    fetch('https://examen.avirato.com/client/post', {
        method:'POST',
        headers:  {
            'Authorization': `Bearer ${sessionStorage.getItem('access_token')}`,
            'Content-Type': 'application/json'
        } ,
        body: JSON.stringify({
            "nombre" : nombre,
            "telefono" : telefono,
            "correo": correo,
            "fechaNacimiento" : fechaNacimiento,
        })
    })
    .then(r => console.log(r.ok))
}