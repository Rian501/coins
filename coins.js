console.log("The JS is at least linked, right?", );


/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/





// Initialize a JavaScript object to hold the coins



// if (whatever amount) - .25 > 0, then subtract .25 and add one "quarter"
// otherwise.... proceed to dimes and repeat process

	var coinPurse = {
		quarters: 0,
		dimes: 0,
		nickels: 0,
		pennies: 0
	};

var moneyInput = prompt("Please input the dollar amount you want to coinify as efficiently as possible. (Like '0.88' for 88 cents)")

function coinCounter (moneyAmt) {

console.log("money amount?", moneyAmt);

 {

		if (moneyAmt > 0.25) {
			coinPurse.quarters = Math.floor(moneyAmt/.25);
			moneyAmt = moneyAmt - coinPurse.quarters*(.25);
		} if (moneyAmt - 0.1 > 0) {
			coinPurse.dimes = Math.floor(moneyAmt/.1);
			moneyAmt = moneyAmt - coinPurse.dimes*.1;
		} if (moneyAmt - 0.05 > 0) {
			coinPurse.nickels = Math.floor(moneyAmt/.05);
			moneyAmt = moneyAmt - coinPurse.nickels*.05;
		} if (moneyAmt < .05 && moneyAmt - 0.01 > 0) {
			coinPurse.pennies = Math.floor(moneyAmt/.01);
					}

}


		return coinPurse;
}


var coins = coinCounter(moneyInput);

console.log("Coins", coins);