import { describe, it, expect } from "vitest";
import isPalindrome from "./controllers/palindromController.js";
import isPerfectNumber from "./controllers/perfectNumberController.js";
import isFibonacci from "./controllers/fibonacciController.js";



describe("palindrom", () => {
	it("Should return false when the opposite is not the same owrd", () => {
		expect(isPalindrome("kijbh")).toBe(false);
	});

	it("Should return false when the opposite is the same owrd", () => {
		expect(isPalindrome("kayak")).toBe(true);
	});
});



describe("Perfuct-Number ", () => {
	it("Should return true", () => {
		expect(isPerfectNumber(28)).toBe(true);
	});
	it("Should return false", () => {
		expect(isPerfectNumber(25)).toBe(false);
	});
});



describe('isFibonacci' , () => {
    it("Should be true because 8 belong to the fibonacci sequance" , () => {
        expect(isFibonacci([8 , 5 , 11 , 12])).toEqual([
            {
                number : 8 , 
                isFibonacciNumber : true ,
            },
            {
                number : 5 , 
                isFibonacciNumber : true ,
            },
            {
                number : 11 , 
                isFibonacciNumber : false ,
            },
            {
                number : 12 , 
                isFibonacciNumber : false ,
            }
        ])
    })
})
