const delay = ms => {
    return new Promise(r => setTimeout(() => r(), ms))
}
var orderInfo = new Object(); //создаем объект в который будем записывать данные 
let form = document.getElementById('app'); //получаем элемент с помощью которого мы будем менять форму
let nameInput = document.getElementsByName('name')[0];
console.log(orderInfo)

// privet = ()=>setTimeout(()=> console.log(typeof nameInput.value),2000)

async function sendData() {
    if (document.getElementsByName('name')[0].value == '' ||
        document.getElementsByName('date')[0].value == '' ||
        document.getElementsByName('destination')[0].value == '' ||
        document.getElementsByName('hotel_date')[0].value == '' ||
        document.getElementsByName('hotel_days')[0].value == '' ||
        document.getElementsByName('birth_date')[0].value == '' ||
        document.getElementsByName('pass_id')[0].value == '') {
        alert('Форма не заполнена');
        return;
    }
    await bookingTickets();
    await bookingHotel();
    await getVisa();
    console.log(orderInfo)
}

async function bookingTickets() {
    console.log('Заказ билета');
    await delay(3000);
    orderInfo.name = document.getElementsByName('name')[0].value;
    orderInfo.date = document.getElementsByName('date')[0].value;
    orderInfo.destination = document.getElementsByName('destination')[0].value;
    console.log('Заказ оформлен');
    await delay(3000);
}

async function bookingHotel() {
    console.log('Бронирование гостиницы');
    await delay(3000);
    orderInfo.hotel_date = document.getElementsByName('hotel_date')[0].value;
    orderInfo.hotel_days = document.getElementsByName('hotel_days')[0].value;
    console.log('Бронь произведена');
    await delay(3000);
}

async function getVisa() {
    console.log('Отправление заявки на визу');
    await delay(3000);
    orderInfo.birth_date = document.getElementsByName('birth_date')[0].value;
    orderInfo.pass_id = document.getElementsByName('pass_id')[0].value;
    console.log('Заявка на визу отправлена');
    await delay(3000);
}