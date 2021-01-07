"use strict";
function greeter(person) {
    return 'Hello, ' + person;
}
var user = 'TypeScript';
document.getElementById('text').innerHTML = greeter(user);
var myName = 'hello world';
var myAge = 19;
console.log(myName, myAge);
function test(params) {
    return params;
}
console.log(test('this is test str'));
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var apple = new Person();
apple.name = '小苹果';
apple.age = 16;
console.log(apple);
