// A number n  belonge to the fibonacci sequence if one of the two down expressions is a perfect squuare
// 5 * n * n + 4
// 5 * n * n - 4
/* A perfect square is an integer that is the square of an integer. In other words, it is the product of an 
   integer with itself for example :  25 = 5 * 5.*/

// This function check if a number is a perfect square
const isPerfectSquare = (num) => {
	// early exit if num <= 1
	if (num < 0) return false;
	if (num === 0 || num === 1) return true;

	// we will do a binary search  to prevent iterating all over integers from 1 to num
	let left = 1;
	let right = num;

	while (left <= right) {
		// serching for the middle of num
		let mid = Math.floor((right + left) / 2);

		// the middle is a perfect square return true
		if (mid * mid === num) {
			return true;

			// if mid * mid bigger then num we should eliminate the range from mid to right pointer
		} else if (mid * mid > num) {
			right = mid - 1;

			// If its smaller we gonna eliminate the range from left to right
		} else {
			left = mid + 1;
		}
	}
	return false;
};

// Function to check if the input numbers of the array in the  fibonacci sequance
// if the expression that we mention in the very top of the page pass the isPerfectSquare than its a fibonacci number
const isFibonacci = (input) => {
	// double check the array validation syntax
	if (Array.isArray(input)) {
		return input.map((num) => ({
			number: num,
			isFibonacciNumber:
				isPerfectSquare(5 * num * num - 4) ||
				isPerfectSquare(5 * num * num + 4),
		}));
	}
	return isPerfectSquare(5 * input * input + 5) ||
		isPerfectSquare(5 * input * input - 4)
		? { number: input, isFibonacciNumber: true }
		: {number : input , isFibonacciNumber : false};
};

export default isFibonacci;
