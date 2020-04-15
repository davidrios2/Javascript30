const dogs = [{
    name: 'Snickers',
    age: 2
}, {
    name: 'hugo',
    age: 8
}];

function myFunction() {
    const p = document.querySelector('p');
    p.style.color = '##FF5733';
    p.style.fontSize = '40px';
}

console.log('hello');


console.log('Hello I am a %s string!', '');


console.log('%c I am some great text', 'font-size:30px; background:red; text-shadow: 10px 10px 0 rose')

console.warn('OH NO!!!');

console.error('Damn');

console.info('My name is...');

const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'That is wrong!');

console.log(p);
console.dir(p);

dogs.forEach(dog => {
    console.group(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(`${dog.name}`);
});

console.count('Wes');
console.count('Wes');
console.count('Steve');
console.count('Steve');
console.count('Wes');
console.count('Steve');
console.count('Wes');
console.count('Steve');
console.count('Steve');
console.count('Steve');
console.count('Steve');
console.count('Steve');

console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
    });

console.table(dogs);
