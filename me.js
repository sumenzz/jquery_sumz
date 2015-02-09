var defineprop = function (obj,key,value) {
	var config = {
		value : value,
		writable : true,
		enumerable : true,
		configurable : true
	};

	Object.defineProperty(obj, key, config);
};



var person = Object.create(Object.prototype);

var newperson = {};

//var car=Object.create(Object.prototype);
defineprop(person,"name","sumenjit");
defineprop(person, "car", "genesis coupe");
var driver = person;
//defineprop(driver, "topspeed","560 mph");
console.log(driver);

var zack = Object.create(driver);
console.log(Object.getPrototypeOf(zack));


