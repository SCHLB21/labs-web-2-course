inputString();
function inputString(){
    let str = prompt('Введите строку с разделителями ";"');
    if(str!='' && str!=null){
        arrStr = str.split(';');
        if(arrStr.length!=1){
            console.log(arrStr)
            for(let i in arrStr){
                if(arrStr[i]) document.write(arrStr[i]+'<br>')   
            }
        }else{
            inputString();
        }
    }else{
        inputString();
    }
}

