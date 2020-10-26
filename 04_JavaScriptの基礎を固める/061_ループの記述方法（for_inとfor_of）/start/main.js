// const arry = [1, 2, 3, 4, 5, 6];

// for (let i = 0; i < arry.length; i++) {
//     console.log(i);
// }

const arry = [1,2,3,4,5,6];

for(let v of arry) {
    console.log(v);
}

//iやjやkは添字の意味合いが強いのでofを使う時はそれ以外の変数名を使う方が良い

for(let i  in  arry) {
    console.log(i,arry[i]);
}