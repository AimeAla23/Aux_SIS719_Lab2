function newUsuario(name, ci, email) {
    return {
        name: name,
        ci: ci,
        email: email
    };
}
var Usuario = newUsuario("Aime", "13229219", "aimeala.f@gmail.com");
console.log(Usuario);
