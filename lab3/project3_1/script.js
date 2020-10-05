checkPal();

function checkPal() {
    palindrome = prompt('Введите фразу или слово');
    palindrome = palindrome.split('').filter(item => item != ' ').map(arg => { return arg.toLowerCase() });
    R_palindrome = palindrome.concat().reverse()
    if (palindrome.join('') == R_palindrome.join('')) {
        alert('Это палиндром');
    } else {
        alert('Это не палиндром')
    }
}