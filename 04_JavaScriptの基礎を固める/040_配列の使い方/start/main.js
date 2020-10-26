const array = [1, 2, 3, 4, 5, 6];

array.unshift('new item'); //先頭に追加
array.push('new item');//末尾に追加
array.shift();    //先頭の要素を削除
const val = array.pop(); //末尾の要素を削除
console.log(val);
console.log(array.length);