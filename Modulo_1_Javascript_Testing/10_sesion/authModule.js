const AuthModule = (function(){
    //Simular Usuario 
    const userBD = {
        username : "admin",
        password : "1234" 
    }

    const uno = document.getElementById('accion_boton');
    let currentUser = null;

    return{
        login(username, password){
            if(username === userBD.username && password === userBD.password){
                currentUser = UserSingleton.getInstance(username);
                console.log(`Usuario Autenticado. ${currentUser.name}`)
                uno.innerHTML = 'Cerrar Sesión';
            }else{
                console.log("Credenciales incorectas");
                uno.innerHTML = 'Iniciar Sesión';
            }
        },
        logout(){
            if(currentUser){
                console.log(`Hasta luego, ${currentUser.name}`)
                currentUser = null;
                UserSingleton.clearIntance();
                uno.innerHTML = 'Iniciar Sesión';
            }else{
                console.log("No hay usuarioautenticado")
                uno.innerHTML = 'Iniciar Sesión';
            }
        }

    }
})();