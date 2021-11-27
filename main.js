const loginIn = document.getElementById('login-in'),
      loginUp = document.getElementById('login-up'),
      signUp = document.getElementById('sign-up'),
      signIn = document.getElementById('sign-in')
      
  
    signUp.addEventListener('click' , () => {

        //Revover las clases si existen
        loginIn.classList.remove('block');
        loginUp.classList.remove('none');

        //Agregar las clases
        loginIn.classList.toggle('none');
        loginUp.classList.toggle('block');
    });

    signIn.addEventListener('click' , () => {

        //Revover las clases si existen
        loginIn.classList.remove('none');
        loginUp.classList.remove('block');

        //Agregar las clases
        loginIn.classList.toggle('block');
        loginUp.classList.toggle('none');
    })
