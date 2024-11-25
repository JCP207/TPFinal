
class Usuario {
    constructor(username, password, email) {
        this.username = username;
        this.password = password;
        this.email = email;
    }
}


let usuarios = [];


document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;

   
    const nuevoUsuario = new Usuario(username, password, email);

    
    const usuarioExistente = usuarios.find(user => user.email === email);

    if (usuarioExistente) {
        
        if (usuarioExistente.password === password) {
            alert('Inicio de sesión exitoso!');
        } else {
            alert('Contraseña incorrecta.');
        }
    } else {
        
        usuarios.push(nuevoUsuario);
        alert('Registro exitoso!');
    }

    
    
    document.getElementById('loginForm').reset();
});
