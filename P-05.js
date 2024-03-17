const emailList = [
    "javascript@gmail.com",
    "randomUser@hotmail.com", 
    "abc.com",
    "mydomain.com",
    "Python@hotmail.com",
    "test",
    "anotherEmail@kenkoo.com",
    "typescript@gmail.com",
    "mailOfPikachu@@@@@",
    "elta@kkk.co",
    "user123.....",
    "wrongEmail@gmail.com",
    "kattis.go",
    "java@gamil.com"
  ];

  function filtrarE(emails) {
    const EValidos = [];

    for(const email of emails) {
        if (email.includes(`@`) && email.endsWith(`.com`)) {
            EValidos.push(email);
        }
    }
    return EValidos;
  }

  const EValidos = filtrarE(emailList);
  console.log(`Emails validos:`, EValidos);