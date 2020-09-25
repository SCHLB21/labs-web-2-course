var days = prompt('Введите количество прошедших дней');
if(days%1==0 && days>=0 && days<=100){
    console.log('осталось '+(100-days)+' дней')
}else{
    console.log('Введите корректные данные!')
}
