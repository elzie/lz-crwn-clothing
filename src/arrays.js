// Array methods

// .map()
// increase each value by 1.
// map() returns a new array.
// inside we pass a function that gets called on each element in the array in chronological order.
// what the function returns, will be the value in the new array - in the place that element was in the original array.
const myArray = [1, 2, 3, 4, 5]

myArray.map(el => el + 1)
'returns new array': [2, 3, 4, 5, 6]
myArray is still [1, 2, 3, 4, 5]

myArray.map(() => 'b')
'returns new array': ['b', 'b', 'b', 'b', 'b', ]
myArray is still [1, 2, 3, 4, 5]


// .filter()
// filter is similar to map, in the sense that it also takes a function that gets itterated over each element in our array.
// filters out the elements in our array based off of the function we pass in.
// also gives back a new array instead of modifying myArray.
const myArray = [1, 3, 5, 7, 9]
myArray.filter(el => el > 4)
// filter out anything less than 5 (greater than 4) 
'returns new array': [5, 7, 9]

myArray.filter(el => true)
'returns new array': [1, 3, 5, 7, 9]

myArray.filter(el => false)
'returns new array': []


// .includes()
// first argument checks if the element passed exists within the array.
myArray.includes(3)
'returns': true

myArray.includes(9)
'returns': false

// second argument is the index from which we want to start searching.
myArray.includes(2, 3)
'returns': false

myArray.includes(2, 1)
'returns': true

const newArray = [{id: 1}, {id: 2}, {id: 3}];
newArray.includes({id: 2});
'returns': false;

//////////////////////
const obj1 = { id: 1 }
const obj2 = { id: 1 }

obj1 === obj2
'returns': false;
// because we do not compare if the values are the same.
// we compare if the objects are both pointing to the same place in memory.
const obj3 = obj2;
obj3 === obj2;
'returns': true;
// because both points to the same place in memory.

const o1 = { id:1 };
const o2 = { id:2 };
const o3 = { id:3 };

const newestArray = [o1, o2, o3];
newestArray.includes(o1);
'returns': true;
// elements in the array are not 'new' objects, but all point to the same place in memory.
// includes() checks if the reference passed in, is equal to the elements inside by their memory-reference.


// .reduce()
// reduce() takes to arguments. 
const myArray = [1, 2, 3, 4, 5]
// First parameter is the accumulated value of calling this function on every element, before the one we are currently on.
myArray.reduce((accumulator, currentElement) => accumulator + currentElement, 0);
// Second parameter is the element itself. That we are itterating over.
// The second parameter (0) is the starting point in the array / the first accumulator value.
'returns': 15;

myArray.reduce((accumulator, currentElement) => accumulator + currentElement, 10);
// The second parameter (10) is the starting point / the first accumulator value.
'returns': 25;


// .find()
const myArray = [1, 3, 5, 7, 9]
// find first element that returns true, based on the conditional that we have.
myArray.find(el => el === 5);
'returns': 5

myArray.find(el => el > 4);
// find value greater than 4. but stops there, and only returns 5.
'returns': 5

const peopleArray = [{id: 1}, {id: 4}, {id: 7} ]
peopleArray.find(person => person.id === 4);
'returns': {id: 4}
