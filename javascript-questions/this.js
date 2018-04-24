
console.log("\nQuestion 1:");
console.log(this);  
//(a) When running in the Browser, what will be on the console here?

/* window */

//(b) When running in Node, what will be on the console here?

/* module.exports */

console.log("\nQuestion 2:");
var abc = 123;
console.log(this.abc);
//(a) When running in the Browser, what will be on the console here?

/*
*  123
*  when `var` is declared, the scope is global
* */

//(b) When running in Node, what will be on the console here?

/*
* undefined
*
* module.exports.abc = 123
* this.abc === 123
*
* */


console.log("\nQuestion 3:");
function f1(){
    console.log(this);
}
f1(); 
//(a) Non-strict, Browser:, what will be on the console here?

/* window */

//(b) strict mode, Browser:, what will be on the console here?

/* undefined */

//(c) Non-strict, Node, what will be on the console here?

/* module.exports */

//(d) strict mode, Node, what will be on the console here?

/* undefined */

console.log("\nQuestion 4:");
var obj = {
    foo: "123",
    f3: function(){
        console.log(this);
    }
};
obj.f3();
//(a) When running in the Browser, what will be on the console here?

/* obj (ie, ({foo: "123", f3: [Function]}) */

//(b) When running in Node, what will be on the console here?

/* same as browser */

console.log("\nQuestion 5:");
obj.f3.call({});
// What is on the console?

/* {} */

console.log("\nQuestion 6:");
function f4(){
    console.log(this);
}
new f4();
// What is on the console?

/* f4 {} */

console.log("\nQuestion 7:");
this.xyz = 0;
var obj2 = {
    xyz: 1,
    f5: function(){
        console.log(this.xyz);
    }
};
obj2.f5();
// What is on the console?

/* 1 */

console.log("\nQuestion 8:");
var f6 = obj2.f5.bind(this);
f6();
// What is on the console?

/*
* 0
* "this" references the global context here, ".bind(this)" binds the context of obj2.f5 method to the global context, where this.xyz was set to 0
*
* */

console.log("\nQuestion 9:");
obj2.f7 = () => { console.log( this.xyz ) };
obj2.f7();
// What is on the console?

/*
* 0
* "this" is obj2 when .f7() is called
*
* */
