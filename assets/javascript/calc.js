/*

Simple webapp calculator.

*/

// Usage:
//
//    calc.operators.push(1);
//	  calc.operators.push(2);
//    calc.operand = "+";
//    var result = calc.run();

var calc {
	operands: ["+", "-", "/", "^"];
	operators: [];
	operand: "";  /* character */
	result:0
	run: function() {
		return this.result;
	}
}

function initCalc() {
	calc.result = 0;
	calc.operand = "";
	calc.operators = [];
}