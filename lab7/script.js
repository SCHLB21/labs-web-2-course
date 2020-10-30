const items = [
    { key: 1, caption: '<i class="fab fa-sticker-mule"></i>' },
    { key: 2, caption: 'Поле № 2' },
    { key: 3, caption: 'Поле № 3' },
    { key: 4, caption: 'Поле № 4' },
    { key: 5, caption: 'Поле № 5' },
    { key: 6, caption: 'Поле № 6' },
    { key: 7, caption: 'Поле № 7' },
    { key: 8, caption: 'Поле № 8' },
    { key: 9, caption: 'Поле № 9' },
    { key: 10, caption: 'Поле № 10' },
    { key: 11, caption: 'Поле № 11' },
    { key: 12, caption: 'Поле № 12' },
    { key: 13, caption: 'Поле № 13' },
    { key: 14, caption: 'Поле № 14' },
    { key: 15, caption: 'Поле № 15' }
    ];
    
let field;
let message;
let moleCount = 0; // Счётчик пойманых кротов 
let movesNumber = 20; // Количество ходов
let movesCount = 1; // Номер хода 
function start(){
    field = this.document.getElementById('field');
    message = this.document.getElementById('message');
    message.innerHTML = `<p>Кротов поймано: ${moleCount}</p>`;
    initContent(field);
    moves = setInterval(() => initContent(field), 1000);
}

function initContent(elm) {
    elm.innerHTML="";
    if(movesCount>20){
        clearInterval(moves);
        elm.innerHTML="<p>Игра окончена</p>";
        return
    }
    moleKey = randomInteger(1, items.length);
    for (let item of items) {
        let elmItem = document.createElement('div');
        elmItem.setAttribute('id', `i${item.key}`);
        elmItem.setAttribute('class', `item`);
        if(item.key==moleKey){
            elmItem.innerHTML = `<p><i class="fab fa-sticker-mule"></i></p>`;
        }else{
            elmItem.innerHTML = `<p></p>`;
        }
        
        elmItem.addEventListener('click', setMessage.bind(null, item, moleKey));
        elm.append(elmItem);
    }
    movesCount++;
}

function setMessage(item, mole) {
    if(item.key==mole) moleCount++;
    message.innerHTML = `<p>Кротов поймано: ${moleCount}</p>`;
    if(item.key==mole){
        clearInterval(moves);
        initContent(field);
        moves = setInterval(() => initContent(field), 1000);
    }else{
        clearInterval(moves);
        initContent(field);
        moves = setInterval(() => initContent(field), 1000);
    }
}

// Рандом
function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }
  