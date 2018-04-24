
var xyz = { a: 1, b: 2 };
//1. what is the prototype of xyz?
/*
Object
*/
//2. What is the prototype's prototype?
/*
null
*/
console.log( Object.getPrototypeOf(xyz) );
console.log( Object.getPrototypeOf( Object.getPrototypeOf(xyz) ) );

var arr = [ 1, 2, 3 ];
//3. what is the prototype of arr?
/*
Array
*/
//4. What is the prototype's prototype?
/*
Object
*/
console.log( Object.getPrototypeOf(arr) );
console.log( Object.getPrototypeOf( Object.getPrototypeOf(arr) ) );


//5. How does javascript search an object's prototype chain when searching for a variable?

/*
*
*   something like this:
*
*   check(obj, prop) {
*
*       // since, Object.__proto__ === null
*       if (obj === null) return 'not found'
*
*       return obj[prop]) ? prop : check(obj["__proto__"])
*   }
*
*/


var obj1 = { a: 1, b: 2 };
var obj2 = { c: 3, d: 4 };
//6. How can we combine obj1 and obj2 into a new object which contains all their members? 
// where new_obj = { a: 1, b: 2, c: 3, d: 4 }


/*
* three solutions:
* 
*   Object.assign({}, obj1, obj2)
*
*   function merge(...objects) {
*        return [...objects].reduce((acc, obj) => {
*            for (let prop in obj) {
*                if (obj.hasOwnProperty(prop)) acc[prop] = obj[prop]
*            }
*            return acc
*        }, {})
*   }
*
*   function merge2(...objects) {
*       return [...objects].reduce((acc, obj) => {
*           for (let prop of Object.keys(obj)) {
*               acc[prop] = obj[prop]
*           }
*           return acc
*       }, {})
*   }

*/


var proto = { a: 1, b: 2 };
//create a new object who's prototype chain is
//new_obj -> proto -> Object.prototype -> null
//console.log( Object.getPrototypeOf(new_obj) );

//7. Using a constuctor, and new: var new_obj = new ...

/*
*   function NewObject(object) {this.__proto__ = object}
*
*   const new_obj = new NewObject(proto)
*
* */


//8. Using Object.create: var new_obj = Object.create ...

/*
*   var new_obj = Object.create(proto)
*
* */

//9. Using 'class' 

/*
*   class NewObject {
*       constructor(obj){
*           this.__proto__ = obj
*       }
*   }
*
* */
