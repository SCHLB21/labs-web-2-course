login();

function login(){
    userName = prompt('Введите имя пользователя')
    if(userName!='' && userName!=null){
        isNameTrue=confirm('Подтвердите правильность ввода')
        if(isNameTrue){
            alert('Привет '+userName)
        }else{
            login();
        }
    }else{
        login();
    }
}
