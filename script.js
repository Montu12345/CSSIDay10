/*  This is a program to allow the user to try a variety of ways of creating arrays.  */

/* global createCanvas, colorMode, HSB, random, width, height, background, noStroke, fill, ellipse, triangle, text,
          textSize
  */

function setup() {
  createCanvas(500, 500);
  colorMode(HSB, 100); 
}

function draw() {
  background(0, 0, 95);
  
  //  Part 1: Create an array by assigning it values
  let animals = ['horse', 'cat', 'elephant'];
  printArray (animals);
  
  //  Part 2: build an array
  let friends = [];
  friends.push('Rebecca');
  friends.push('Marcia');
  friends.push('Bob');
  friends.push('Charlie');
  //printArray (friends);
  
  //  Part 2 b: build an array with a loop
  let oddNos = [];
  for (let i = 0; i < 7; i ++) {
    oddNos.push (i * 2 + 1);
  }
  //printArray(oddNos);
  
  // Part 3: create an empty array and fill it
  let a = new Array(4);
  a[2] = 'elephant';
  // printArray (a);
  a[0] = 3.14159;
  //printArray (a);
  a[3] = 'last';
  a[1] = 3;
  a[2] = 'cat';
  // printArray(a);
  
  //  Try filling it too full.  What happens?
  a[8] = 'later';
  // printArray(a);
}

function printArray (a) {
  //  Print out the array
  textSize (28);
  text (a, 10, 30);
  
  //  Then its length
  text('The length is ' + a.length, 10, 70);
  
  //  The the first and last elements
  let first = a[0];
  text ('First element is ' + first, 10, 110);
  let last = a[a.length -1];
  text ('Last element is ' + last, 10, 150);  
}


