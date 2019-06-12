

/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. global binding - where 'this' refers to the window or console object
* 2. implicit binding - involves methods. When a function is preceeded by a dot, it automatically 'implies' that 'this' refers to the object which preceeds the dot.
* 3. new binding - when we call 'new' and reference back to a constructor object, the new object is bound to 'this.'
* 4. Explicit binding - when '.call' or '.apply' are used, we bind 'this' to the specific paramater we feed it. 
*
* write out a code example of each explanation above
*/

// Principle 1

// function myName(name){
//     console.log(this);
//     return name;
// }
// myName("Britt");

// This will return the entire console, rather than the name we want it to, because it's in the global scope!
// code example for Window Binding


// Principle 2

const me ={
    leadWith: 'Dude,',
    beFunny: function(codeTerm) {
        console.log(`${this.leadWith} where\'s my ${codeTerm}?`);
        console.log(this);

    }
};
me.beFunny('scope');

// code example for Implicit Binding

// Principle 3
// 

function sayBack(me) {
    this.response = '...just no ';
    this.me = me;
    this.speak = function() {
      console.log(`No, ${this.me} ${this.response}.`);
      console.log(this);
    };
  }
  const angela = new sayBack('Brittany')
 
  angela.speak();
// code example for New Binding



// Principle 4

// code example for Explicit Binding