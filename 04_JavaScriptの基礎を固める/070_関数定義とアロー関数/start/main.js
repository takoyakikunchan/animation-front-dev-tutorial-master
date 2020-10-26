
function hell(name ='tom'){
console.log('hello' + name);
}

hell();  // -> tom 引数はデフォルトを取れる


const hello = (name, age) => `${name} ${age}`;



const arry = [1,2,3,4,5,6];


//[従来]
arry.forEach(function(value){ console.log(value)});
//[アロー関数]
arry.forEach(value => console.log(value));
