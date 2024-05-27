const formRegister = document.querySelector("#formRegister");

const validarFormulario = (event) => {

    event.preventDefault();

    const firstname = document.querySelector("#firstname");
    const lastname = document.querySelector("#lastname");
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
   
    
    let validation = true;

    if(firstname.value.trim() ===""){
        document.querySelector("#error-firstname").textContent ="Debe completar el campo Nombre";
        firstname.classList.add("error");
        validation = false;
    }
    if(lastname.value.trim()===""){
        document.querySelector("#error-lastname").textContent="Debe completar el campo apellido";
        lastname.classList.add("error");
        validation= false;
    }
    if(email.value.trim()===""){
        document.querySelector("#error-email").textContent='Debe completar el campo Email';
        email.classList.add('error')
        validation=false;
    }
    if(password.value.trim()===""){
        document.querySelector("#error-password").textContent='Debe completar el campo contraseña';
        password.classList.add('error');
        validation=false;

    }else if(password.value.length < 6 || password.value.length > 12){
        document.querySelector("#error-password").textContent="La contraseña debe contener entre 6 y 12 caracteres";
        password.classList.add("error");
        validation=false;
    }

    if(validation)
        {formRegister.submit()}
     else
        {return false;}
   
}

formRegister.addEventListener("submit",validarFormulario)