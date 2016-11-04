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

var calc {
	operators: ["+", "-", "/", "^"],
	operator: "";
	num: [];
	num1: 0;
	num2: 0;
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
		this.num2 = toNum(this.num);
		switch(operator) {
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
			default {
				console.log("Illegal operator: ", operator);
			}
		}
	}
	setOperator: function(operator) {
		this.operator = strOperator;
		this.num1 = toNum(this.num);
	}
}

function toNum(numArray) {
	var numStr = numArray.join("");
	num = parseInt(numStr);
}
