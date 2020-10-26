const person = {
  name: ['Code', 'Mafia'],
  age: 32,
  gender: 'male',
  interests: {
      sports: 'soccer',
      music: 'piano'
  },
  getFullName: function() {
      console.log(this.name[0] + this.name[1]) 
  }
};
//このthisはpersonを参照
const ageKey = 'age';
person[ageKey] = 12;  //変数をキーとして使用することもok
console.log(person.age);
person.getFullName();