/*

Simple webapp calculator.

*/

// Usage:
//
//	10 + 23 = 33
//
//	calc.num.push(1);  num = [1];
//	calc.num.push(0);  num = [1, 0];
//
//	calc.setOperator("plus");; // joinedNum = 10; num = [];
//
//	calc.num.push(2);	// num = [2];
//	calc.num.push(3);	// num = [2, 3];
//
//	result = calc.run(); // joinedNum = 23;
//				// result = operand[0] [operator] operand[1]
//	

var calc = {
	operators: ["+", "-", "/", "^"],
	operator: "",
	num: [],
	num1: 0,
	num2: 0,
	operand: "",  /* character */
	result:0,
	init: function() {
		this.result = 0;
		this.operand = "";
		this.operators = [];
		this.num = [];
		this.num1 = 0;
		this.num2 = 0;
	},
	run: function() {
		var numStr2 = this.num.join("");
		this.num2 = parseInt(numStr2);
		switch(this.operator) {
			case "plus":
				this.result = this.num1 + this.num2;
				break;
			case "minus":
				this.result = this.num1 - this.num2;
				break;
			case "times":
				this.result = this.num1 * this.num2;
				break;
			case "divide":
				this.result = this.num1 / this.num2;
				break;
			case "power":
				this.result = Math.pow(this.num1, this.num2);
				break;
			default: {
				console.log("Illegal operator: ", operator);
				break;
			}
		}
		return this.result;
	},
	setOperator: function(operator) {
		this.operator = operator;
		var numStr = this.num.join("");
		this.num1 = parseInt(numStr);
		this.num = [];
		console.log("debug", this.num1);
	}
}

function unitTest() {
	calc.init();

	// 10

	calc.num.push(1);
	calc.num.push(0);
	console.log("calc.num", calc.num);
	// +

	calc.setOperator("plus");
	console.log("calc.operator", calc.operator);
	console.log("calc.num1", calc.num1)

	// 23

	calc.num.push(2);	// num = [2];
	calc.num.push(3);	// num = [2, 3];
	console.log("calc.num", calc.num);

	// =

	result = calc.run(); // joinedNum = 23;
	console.log("calc.num2", calc.num2);
	console.log(result);
}

// unitTest();