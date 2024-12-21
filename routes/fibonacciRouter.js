import { Router } from "express";
import { body, validationResult } from "express-validator";
import isFibonacci from "../controllers/fibonacciController.js";

const fibonacciRouter = Router();

const validationInput = [
	body("fibonacciInput")
		// check if the input is a valid array before proces
		.isArray({min : 1 , max : 100})
		.withMessage("Input must be a valid array of 100 length max .")
		// Array elements must be positive and less then max safe integer in javascript
		.custom((array) =>
			array.every(
				(num) =>
					typeof num === "number" && num >= 0 && num <= Number.MAX_SAFE_INTEGER
			)
		)
		.withMessage(
			`Array must only contain numbers between 0 and ${Number.MAX_SAFE_INTEGER}`
		),
];

fibonacciRouter.post("/", validationInput, (req, res, next) => {
	// check for validation errors
	const errors = validationResult(req);

	// return validations errors
	if (!errors.isEmpty()) {
		return res.status(400).json({
			succes: false,
			message: "Validation failed",
			errors: errors.array(),
		});
	}

	// handle the array in the client request
	try {
		const { fibonacciInput } = req.body;
		// Pass the the array to the controller function
		const result = isFibonacci(fibonacciInput);
		return res.status(200).json({
			succes: true,
			resultArray: result,
			checkedValue: fibonacciInput,
            // Divise the result numbers into winners and imposters for better interactivty in the UI form.
			message: ` 🏆 Winners : ${result
				.filter((num) => num.isFibonacciNumber)
				.map((num) => num.number)
				.join(" , ")}  🆚  👺Imposters : ${result
				.filter((num) => !num.isFibonacciNumber)
				.map((num) => num.number)
				.join(" , ")} `,
		});
	} catch (err) {
		next(err);
	}
});

export default fibonacciRouter;
