

const isPerfectNumber = (num) => {
	// lets start with 1 since its always a divisor
	let sum = 1;
    
	//Loop just to the square root
	// Starting from 2 to not include the number itself
	for(let i = 2 ; i <= Math.sqrt(num); i++) {
      if(num % i === 0) {
         sum += i 
		 // avoid counting duplicated numbers
		 if(i !== num /i) {
            // add divisors that bigger of the square root
			sum += num /i
		 }
	  }
	}
	// Remove 1 because the only divisor equale itself
    return num !== 1 && num === sum
};

export default isPerfectNumber;
