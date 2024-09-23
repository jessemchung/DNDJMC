function log(message) {
    console.log(message);
}
var message = "Hello World";
var count = 5;
// count = "hello";
//ng serve compiles all ts
log(message);
//if you don't know what the value is ahead of time you can set the type ahead of time
var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, 'a'];
var ColorRed = 0;
var ColoGreen = 1;
var ColorBlue = 2;
//enum combines simlar things
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
//each gets an automatic value incrementing upward
//better explicity set the values so that added values don't change other values
var backgroundColor = Color.Red;
var newmessage = 'abc';
var something = newmessage.charCodeAt(1);
console.log(something, 'something');
//tsc testTS.ts
//https://www.typescriptlang.org/docs/handbook/tsconfig-json.html
//https://stackoverflow.com/questions/35734366/typescript-can-tsc-be-run-against-an-entire-folder
//If no "files" property is present in a tsconfig.json, the compiler defaults to including all TypeScript (*.ts or *.tsx) files in the containing directory and subdirectories.
//todo TYPE ASSERTIONS
//*green
//? blue
//! red
// @param
var undefinedmessage;
undefinedmessage = 'abc';
var endsWithC = undefinedmessage.endsWith('c');
//these are the same
var AlternateendsWithC = undefinedmessage.endsWith('c');
//* sometimes you want to instead of putting a tone of variables in you just want to put one object but need to make sure that the correct values are inside said object
//inline notation is one option.  This makes sure that the right keys are in the object in the right type
var drawPoint = function (point) {
    // ...
};
drawPoint({
    x: 1,
    y: 2
});
var drawPoint1 = function (point) {
    // ...
};
//! cohesion principle.  Things together should go together.   Thus classes can be used
//Class: Groups variables (properties) and functions (methods) that are highly related
//interfaces are purely for declatons and cannot include implementations (like functions)
var ClassPoint = /** @class */ (function () {
    //contructor allows easier building of objects in typescript and will also build requirements for testing
    //todo you can also make parameters optional by adding questionmark after the arguments as seen below with y only
    function ClassPoint(x, y) {
        this.x = x;
        this.y = y;
    }
    ClassPoint.prototype.draw = function () {
        console.log('X:' + this.x + ', Y' + this.y);
    };
    ClassPoint.prototype.getDistance = function (another) {
        // ....
    };
    return ClassPoint;
}());
// let point: ClassPoint = new ClassPoint();
//neater
//thanks to constructor, this will show an error if the parameters are not all there
var point = new ClassPoint(1, 4);
// point.x = 1;
// point.y = 4;
//has intellisense
point.draw();
//this says it has two things and a function defined elsewhere
//tsc testTS.ts && node testTS.js
//! first must succeed before second will run
//tsc testTS.ts | node testTS.js
//! seems to run both?  In no order in particular
//tsc testTS.ts & node testTS.js
//! runs the first one and regardless of success or failture then runs the second 1
//todo if you want to prevent a variable from ever changing
//access modifiers can be used to modify access
//public, private, protected
//by default all members are public
//change private as seen above removes x from access but allows y
//access can be helpful to keep things organized
//public can be used but is unhelpful (done with draw for show)
var ImprovedClassPoint = /** @class */ (function () {
    //prefix with access modifiers and typescript will generate fields for us.  If you prefix a constructor parameters with an access modifier.  Typescript will generate a field
    //with the exact same and name and also initialize that field with the  value of this argument
    function ImprovedClassPoint(x, y) {
        this.x = x;
        this.y = y;
    }
    Object.defineProperty(ImprovedClassPoint.prototype, "X", {
        get: function () {
            return this.x;
        },
        set: function (value) {
            if ((value < 0)) {
                throw new Error('value cannot be less than 0');
            }
            this.x = value;
        },
        enumerable: false,
        configurable: true
    });
    ImprovedClassPoint.prototype.draw = function () {
        console.log('X:' + this.x + ', Y' + this.y);
    };
    ImprovedClassPoint.prototype.getDistance = function (another) {
        // ....
    };
    return ImprovedClassPoint;
}());
var point1 = new ImprovedClassPoint(1, 2);
//made possible by the getter above (useful if we want to have x set to private)
var x = point1.X;
//the below is mad possible by the setter above
point1.X = 10;
//camel case for fields like arguments above .  One way to reduce clashing is to use _x that way no need for capital X
//# sourceMappingURL=testTS.js.map