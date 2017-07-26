
var names = ['Andrew', 'Julie', 'Jen'];
//
// names.forEach( (name) => {
//    console.log(name);
// });
//
// var person = {
//    name: 'Andrew',
//    greet: function() {
//       names.forEach( () => {
//          console.log('Hi' , this.name);
//       });
//    }
// }
//
// person.greet();
//


// challenge Area
function add(a, b) {
   return a + b;
}

// addStatement
var addStatement = (a,b) => {
   return a + b;
}


// addExpression
var addExpression = (a,b) => a + b;

console.log(add(1,3));
console.log(addStatement(1,3));
console.log(addExpression(1,3));
