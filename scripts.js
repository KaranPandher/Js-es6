// alert('hello world!')


// Lets see what some of our newer array methods are 
// .find() method 
var myArray = ['test', 2, 3, true, 5, null, 'abc', 38, 'Hello, World!'];
// Returns 5 an element from our array 
var myValue = myArray.find( function ( element ) {return element > 4;} );
console.log(myValue); // Returns 5

// For checking if an element exists in the array.
var isMyStringInside = myArray.find(function (element) {return element === 'Hello, World!';} );
//Helps us find something in specific element 
console.log(isMyStringInside); 
// We would get the matching element 

// Find is helpful for checking if an element exists in an array 
var isMyStringInside = myArray.find(function (element) {return element == 'Goodbye everyone :(';} ); 
// doesn't exist so doesnt return 

//var isMyStringInside = myArray.find( function (element) {return element.toLowerCase() === 'Hello, World!'.toLowerCase(); })
console.log(isMyStringInside); // We would get the matching element 

/**
 * Enteries
 */

 var pairing = myArray.entries();
 console.log(pairing);
 console.log(pairing.next().value);
 console.log(pairing.next().value);
 console.log(pairing.next().value);
 console.log(pairing.next().value);
 console.log(pairing.next().value);

 var fromArray = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
 console.log(fromArray); // Oh geeze thats a 26 element array now 
 /**
  * filter() method:
  * Returns array of all matches. 
  */

  var filtered = myArray.filter(function(element) {return element > 4;} );
  console.log(filtered); // ALL matches returned! 5 and 38! 

  /**
   * reduce() method:
   * We can add on to a value, returns only a single 
   */

   var reduceResult = myArray.reduce( function (accumulator, currentVal) {
       return accumulator = currentVal;
   }); 
   console.log(reduceResult); //Because we have strings in here, they are geting concatenated

   console.log( [1, 2, 3, 4].reduce( function (a,v) {return a + v; } ) );
   // Because we have numbers in here, they are being added (mathematically)


/**
 * Let and Const 
 */
   var x  = 3; // Standard variable declaration function scoped 
   let y = 7; // Let is block-scoped. 
   const z = 36; // const is block-scoped but re-assignment is not allowed. 

   // z= 16; not allowed! Cosnt must remain with its original assignment. 
   console.log(z);

   y=13; // allowed! var and let allow reassignment
   console.log(y)   

   for (var myVar =0; myVar < 10; myVar++){
       console.log('for loop iterations... ');
   }
   console.log('myVar = '+myVar);
   
   // let is block scopped .. it lives and dies in any blcock in the loop 

   for ( let myNewVar =0; myNewVar < 10; myNewVar++){
       console.log('for loop iteration....');
       console.log('myNewVar = '+myNewVar);
   }
   // console.log('myNewVar = '+myNewVar); // we cant access it outside of the block 

   // const cant be reassigned but it insides can be manioulated?? 

   const myObj = { 
       name: 'Henry',
       age: 18
   }

   myObj.name = 'Sandy'; 
   // Can we update PROPERTIES or array ELEMENTS inside of a const-declared variable?
   myObj.hobbies = [];
   myObj.hobbies.push('Mountain Clumbing');
   console.log(myObj);

   //myObj - {} // THIS WOULD STILL ERROR. Only insies for a const can be manipulated

   /**
    * Lets shake things up with : FUNCTIONS
    * New Syntax... 
    */

    function myFunction(a,b) {
        return Number(a) +Number(b);
    }

    console.log( myFunction(3,7) );
    
    // ES6 style:
    myFunction = (a,b) => Number(a) + Number(b); 
    
    console.log(myFunction(3,8) );

    //Bigger function (ES6)
    myOtherFunction = (a, b) => {
        const myAnswer = Number(a) + Number(b);
        return myAnswer; 
    }

    console.log( myOtherFunction(34,6) );

    /**
     * Function default parameter values. 
     */

     // We can set defaults, to prevent errors in case nothing gets passed in for a parameter! 
     addNums = (x =0, y =0) => x + y;
     console.log( addNums() ); // No arguments! But our default values kick in ! 
    

     

    /**
     * Rest Parameter
     */

    findHighNum = (...args) => { // ...args will capture any number of arguments that we pass! 
        console.log(args); // It can be called by the name we had inbetween our parenthesis. 
        return args;
    }

    // 
    addAllNums = (...nums) => nums.reduce( (a,v) => a + v);
    console.log( addAllNums(64, 6, 10) );

/**
 * Template Literals 
 */

 const helloVar = 'Hello, World!';
 const sampleName = 'Sam';

 const myNewString = `Hey there, my name is ${sampleName}; Id like to give you a big: "${helloVar}"!!`; // The syntax for template literals is ${variablename}
 //Note: This only works inside of backticks! But is super useful. It saves us from extra concatenation. 
 console.log(myNewString);

 /**
  * Spread Operator 
  * DO NOT get this confused with the rest parameter! both are 3 dots.... 
  * REMEMBER that rest parameter is always in PARAMETER area of a function, nowhere else. Spread is used ANYWHERE else, basically. 
  */
 const newArray = [ 'Hello', ',', '', 'Kobe', '!']
 console.log(newArray);
 console.log(...newArray);
 //Make its part of one string altogether! Brought the values in the array together as one string! 

 // Spread operator separates into separate values. 
 const aBunchofNums = [5, 10, 36, 58];
 console.log( addAllNums(5, 10, 36, 58) ); // This and the below, are equivalent (our array gets broken up! )
 console.log( addAllNums( ...aBunchofNums) ); //Spreading an argument.

 /**
  * String Methods! 
  */

  /**
   * .search() method:
   * 
   * Regex Learning Tool: https://regexone.com
   * 
   */

   const myTestString = 'Greetings, Programs!';
   console.log(myTestString.search(/Greetings/i) );
   // Tells you the position of the substring. Result //0 
   console.log(myTestString.search(/TING/i) ); // Regex match, i is for case INsensitive. Returns the SUBSTRING POSITION. Ting is 4

/**
 * replace() method:
 */

 const myReplacedString = myTestString.replace(/Programs/, 'World');
 console.log(myReplacedString);

 /**
  * Blocks
  */

  // Unnamed block.. so we can use this to contain otherwise-global const and let variables. 
  {
      const myBlockNestedVar = 38;
  }

  // console.log(myBlockNestedVar);

  // We CAN name blocks if we want. 
  myOrganizeName: {
      // We can organize some code in here, and control scope of let/const. 
      let myBlockNestedVar = 55; // We used the same name in our unnamed block?! Thats okay, it was born in a differently scoped block! 
      myBlockNestedVar++;
      console.log(myBlockNestedVar);
      myFinalResut = myBlockNestedVar;
  }
//console.log(myFinalResult);

  /**
   * 
   */

  class Movie {
    constructor(name, genre, year) {
        //We can use constructor to set up our properties. When we make a new movie (object), we can pass in arguments this way! 
        this.name = name;
        this.genre = genre;
        this.year = year; 
    }
    get name() { // How we retrieve the property. a GETTER
        return this.name;
    }
    set name( name ) { // How we store a new property value. a SETTER.
        if (typeof name === 'string') {
            this.name = name;
        } else {
            this.name = name.toString();
        }
        return this.name;
    }

showPoster() { //This is a method! WE can name them as we'd like. 
    const info = `
        MOVIE INFO
        ==========
        Name: ${this.name}
        Genre: ${this.genre}
        Year: ${this.year}
        `;
        return info;
    }
}

const tron = new Movie('Disney\'s TRON', 'Adventure', 1982);
const dragonheart = new  Movie('Dragonheart', 'Fantasy', 1996);
const godfather = new Movie ('GodFather II', 'Action', 1974);

console.log(tron);
console.log(dragonheart);
console.log(godfather); //displays info in console

// To call the function use tron.showPoster(tron)