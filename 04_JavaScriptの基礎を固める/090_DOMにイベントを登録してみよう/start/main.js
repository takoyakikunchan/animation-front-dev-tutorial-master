const btn = document.querySelector('#btn');
const h1 = document.querySelector('h1');
function hello() {
    alert('hello');
    // this.style.color = 'red';  要素を関数内で取得する場合はthisに置き換えられる
}
function changeColor() {
    h1.style.color = 'red';
}
function changeBgColor() {
    h1.style.backgroundColor = 'green';
}



btn.addEventListener('click', changeColor);
btn.addEventListener('click', changeBgColor);
btn.removeEventListener('click', changeBgColor);

btn.addEventListener('mouseenter', changeColor); //‘mouseenter'は要素の中にマウスがhoverし入った時