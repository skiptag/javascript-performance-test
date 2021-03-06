var startTest = function(){};
var test = function(name, fn){ fn(); };
var endTest = function(){};
var prep = function(fn){ fn(); };
startTest("dromaeo-object-array");

var ret = [], tmp, num = 500;
var i = 1024;

	// TESTS: Array Building

	test("Array Construction, []", function(){
		for ( var j = 0; j < i * 15; j++ ) {
			ret = [];
			ret.length = i;
		}
	});

	test("Array Construction, new Array()", function(){
		for ( var j = 0; j < i * 10; j++ )
			ret = new Array(i);
	});

	test("Array Construction, unshift", function(){
		ret = [];
		for ( var j = 0; j < i; j++ )
			ret.unshift(j);
	});

	test("Array Construction, splice", function(){
		ret = [];
		for ( var j = 0; j < i; j++ )
			ret.splice(0,0,j);
	});

	test("Array Deconstruction, shift", function(){
		var a = ret.slice();
		for ( var j = 0; j < i; j++ )
			tmp = a.shift();
	});

	test("Array Deconstruction, splice", function(){
		var a = ret.slice();
		for ( var j = 0; j < i; j++ )
			tmp = a.splice(0,1);
	});

	test("Array Construction, push", function(){
		ret = [];
		for ( var j = 0; j < i * 25; j++ )
			ret.push(j);
	});

	test("Array Deconstruction, pop", function(){
		var a = ret.slice();
		for ( var j = 0; j < i * 25; j++ )
			tmp = a.pop();
	});

endTest();
