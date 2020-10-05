checkPal();

function checkPal() {
    palindrome = prompt('Введите фразу или слово');
    palindrome = palindrome.split('');
    palindrome = palindrome.filter(item => item != ' ');
    palindrome = palindrome.map(arg => { return arg.toLowerCase() });
    R_palindrome = palindrome.concat().reverse()

    if (palindrome.join('') == R_palindrome.join('')) {
        alert('Это палиндром');
    } else {
        alert('Это не палиндром')
    }
}