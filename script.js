var surname = prompt('Greetings pls type in your name');

var apples = 5;
var pears = 10;

var piecesofFruit = apples + pears;

var add = function( a, b){
  return a + b;
}
var result = add(1, 2);

var jedi = {
  name: "Yoda",
  age: 899,
  talk: function () { alert("another... Sky... walk..."); }
}

var dog = {};
dog.bark = function () { alert("Woof!"); };

var emptyArray = [];
var shoppingList = ['Milk','Bread','Beans'];
//alert(shoppingList[0]);

shoppingList.push(' a new car'); //Car added
shoppingList.pop(); //back to start

var helloFrom = function (personName) {
  return "Hello from " + personName;
}

var people = ['Simon','Andi','Kevin'];

people.push('Peter');
people.pop();

for(var i=0;i < people.length; i++){
  var greetings = helloFrom(people[i]);
  alert(greetings);
}
