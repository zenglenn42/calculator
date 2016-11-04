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
//	calc.setOperator("+");; // joinedNum = 10; num = [];
//
//	calc.num.push(2);	// num = [2];
//	calc.num.push(3);	// num = [2, 3];
//
//	calc.run(); // joinedNum = 23;
//				// result = operand[0] [operator] operand[1]
//
//	display calc.result;
//	
//    calc.operators.push(1);
//	  calc.operators.push(2);
//    calc.operand = "+";
//    var result = calc.run();

var calc {
	operators: ["+", "-", "/", "^"],
	operator: [],
	num: [];
	operand: "",  /* character */
	result:0,
	run: function() {
		return this.result;
	}
	setOperator: function(operator) {
		this.operator = operator;
		// convert num array to number
	}
}

function initCalc() {
	calc.result = 0;
	calc.operand = "";
	calc.operators = [];
	calc.num = [];
}