function getBetween(companyClosingPrices, company) {
	let countOfPrices = 0;
	for ( price of companyClosingPrices) {
		 if ( price > 254 && price < 257){
			countOfPrices++;
		 }
 	}

 console.log("Closing price of " + company + " between 254 and 257: " + countOfPrices + " days")

}

const MSFTStockClosingPrices = [254.12, 253.12, 256.97, 257.52, 258.93];
const AAPLStockClosingPrices = [256.45, 255.25, 259.10, 260.75, 261.88];


// Write your code below
getBetween(AAPLStockClosingPrices, "APPL");


