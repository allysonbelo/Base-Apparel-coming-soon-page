let campoEmail = document.querySelector("#email")
let btnEnviar = document.querySelector("#enviar")
let fomr = document.querySelector(".form")

//Botão enviar
btnEnviar.addEventListener("click", function(event){
    event.preventDefault()
    let email = campoEmail.value
    let emailValidado = validarEmail(email)
    
    if(email == "" || email == null){
        fomr.classList.add("invalido")
    }
    else{
        if(emailValidado == true){
            fomr.classList.add("valido")
            fomr.classList.remove("invalido")
            
        }else{
            fomr.classList.add("invalido")
            fomr.classList.remove("valido")
        }
    }

    
})

//Válidar formulário
function validarEmail(email){
    var re = /\S+@\S+\.\S+/;
    return re.test(email)
}