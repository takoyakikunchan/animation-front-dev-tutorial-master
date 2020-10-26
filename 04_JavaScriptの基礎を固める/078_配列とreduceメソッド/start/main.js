const arry = [1,2,3,4,5];


arry.reduce(function(accu, curr) {
    console.log(accu, curr);
    // return accu * curr;
});

const str = 'animation';
const strArry = str.split('');

console.log(strArry);

const result = strArry.reduce((accu, curr) => {
  console.log(accu);
    return accu + '<' + curr + '>';　　//`${accu}<${curr}>`
}, "")

console.log(result);