var letters = new Map([
    ['А','A'],['Б', 'B'],['В', 'V'],['Г', 'G'],['Д', 'D'],['Е', 'E'],['Ё', 'Yo'],['Ж', 'Zh'],['З', 'Z'],['И', 'I'],['Й', 'J'],['К', 'K'],['Л', 'L'],['М', 'M'],['Н', 'N'],['О', 'O'],['П', 'P'],['Р', 'R'],['С', 'S'],['Т', 'T'],['У', 'U'],['Ф', 'F'],['Х', 'X'],['Ц', 'Cz'],['Ч', 'Ch'],['Ш', 'Sh'],['Щ', 'Shh'],['Ъ', '``'],['Ы', 'Y`'],['Ь', '`'],['Э', 'E`'],['Ю', 'Yu'],['Я', 'Ya'],['а','a'],['б', 'b'],['в', 'v'],['г', 'g'],['д', 'f'],['е', 'e'],['ё', 'yo'],['ж', 'zh'],['з', 'z'],['и', 'i'],['й', 'j'],['к', 'k'],['л', 'l'],['м', 'm'],['н', 'n'],['о', 'o'],['п', 'p'],['р', 'r'],['с', 's'],['т', 't'],['у', 'u'],['ф', 'f'],['х', 'x'],['ц', 'cz'],['ч', 'ch'],['ш', 'sh'],['щ', 'shh'],['ъ', '``'],['ы', 'y`'],['ь', '`'],['э', 'e`'],['ю', 'yu'],['я', 'ya'],
])

translate();

function translate(){
    let text = prompt('Введите текст');
    if(text!=''&&text!=null){
        text = text.split('');
        for(let i in text){
            if(letters.has(text[i])){
                text[i]= letters.get(text[i])
            }
        }
        text = text.join('');
        console.log(text)
    }else{
        translate();
    } 
}