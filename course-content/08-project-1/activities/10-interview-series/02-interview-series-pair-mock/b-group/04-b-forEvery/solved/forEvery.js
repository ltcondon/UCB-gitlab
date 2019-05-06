var arr = ["kittens", "cats", "felines", "kitties"]

function callBack(params) {
	console.log("I think " + params + " are funny");
	// Q: What are you going to do? 
	// A: console.log the `params` argument concatenated with other string elements
	// Q: How are you going to do it? 
	// A: console.log() method that takes in a parameter
	// Q: Why are you going to do it? 
	// A: to console log a final message to demo the callback function
}

function forEvery(arr, cb) {
	// Q: What are you going to do? 
	// A: Create a function that takes two arguments - an array and a call back function
	// Q: How are you going to do it? 
	// A: with function declaration syntax and parameter listing
	// Q: Why are you going to do it? 
	// A: to have a function to execute on every element of the input array
	for (var i = 0; i < arr.length; i++) {
		cb(arr[i]);
		// Q: What are you going to do? 
		// A: Iterate through every element of the input array 
		// Q: How are you going to do it? 
		// A: with a for loop
		// Q: Why are you going to do it? 
		// A: to examine every element and execute the call back function for each - passing the arr[i] value as argument
	}
}

forEvery(arr, callBack)



myDataStorage = {
	arr: [1, 2, 3, 4, 5],
	// Q: What are you going to do? 
	// A: Create a key, `arr`, on an object, myDataStorage, with an associated value of an array with comma separated values
	// Q: How are you going to do it? 
	// A: with object key/value syntax
	// Q: Why are you going to do it? 
	// A: to have a place to store our data
	forEvery: function (cb) {
		cb(this.arr)
	}
	// Q: What are you going to do? 
	// A: create a key, `forEvery` on an object with an associated value of a function
	// Q: How are you going to do it? 
	// A: with key/value syntax
	// Q: Why are you going to do it? 
	// A: to be able to have a function/method on our object that performs work on every element of our array/data structure
}

myDataStorage.forEvery(function (arr) {
	// Q: What are you going to do? 
	// A: Execute the `forEvery` function on the `myDataStorage` object passing a function as argument
	// Q: How are you going to do it? 
	// A: using dot notation on our object
	// Q: Why are you going to do it? 
	// A: to demo what the forEach function does
	for (var i = 0; i < arr.length; i++) {
		// Q: What are you going to do? 
		// A: Iterate through every element of the input array 
		// Q: How are you going to do it? 
		// A: with a for loop
		// Q: Why are you going to do it? 
		// A: to examine every element 
		console.log(arr[i]);
		// Q: What are you going to do? 
		// A: console.log each element of the array
		// Q: How are you going to do it? 
		// A: console log method and arr bracket notation
		// Q: Why are you going to do it? 
		// A: to demo callback functions
	};

})