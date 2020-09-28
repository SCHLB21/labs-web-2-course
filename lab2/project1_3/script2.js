var inputLetters = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я',
'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'];

var outputLetters = ['A', 'B', 'V', 'G', 'D', 'E', 'Yo', 'Zh', 'Z', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'F', 'X', 'Cz', 'Ch', 'Sh', 'Shh', '``', 'Y`', '`', 'E`', 'Yu', 'Ya',
'a', 'b', 'v', 'g', 'd', 'e', 'yo', 'zh', 'z', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'f', 'x', 'cz', 'ch', 'sh', 'shh', '``', 'y`', '`', 'e`', 'yu', 'ya'];

translate();

function translate(){
    let text = prompt('Введите текст');
    if(text!=''&&text!=null){
        text = text.split('');
        for(let i in text){
            for(let j in inputLetters){
                if(text[i]==inputLetters[j]){
                    text[i]=outputLetters[j];
                }
            }
        }
        text = text.join('');
        console.log(text)
    }else{
        translate();
    } 
}