function newUsuario(name: string, ci: string, email: string): { name: string, ci:string, email: string } {
    return {
        name: name,
        ci: ci,
        email: email
    };
}

const Usuario = newUsuario(`Aime`, `13229219`, `aimeala.f@gmail.com`);
console.log(Usuario);