function greeter(person: string) {
  return 'Hello, ' + person;
}
let user = 'TypeScript';
document.getElementById('text')!.innerHTML = greeter(user);

const myName: string = 'hello world';
const myAge: number = 19;
console.log(myName, myAge);

function test(params: string) {
  return params;
}
console.log(test('this is test str'));

class Person {
  name?: string;
  age?: number;
}
const apple: Person = new Person();
apple.name = '小苹果';
apple.age = 16;
console.log(apple);