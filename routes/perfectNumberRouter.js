import { Router } from "express";
import { body, validationResult } from "express-validator";
import isPerfectNumber from "../controllers/perfectNumberController.js";

const perfectNumberRouter = Router();

const validationInput = [
	body("perfectNumber")
		// Checking the largest int javascript could handle dynamicly wich is (9007199254740991)
		// Exclude negative numbers since its alls non perfect numbers
		.isInt({ min: 1, max: Number.MAX_SAFE_INTEGER })
		.withMessage(
			`Input must be an integer between 1 and ${Number.MAX_SAFE_INTEGER}.`
		)
		// Double check for safety and convert input to int if validation pass
		.toInt(),
];

perfectNumberRouter.post("/", validationInput, (req, res, next) => {
	// Pass input to the express-validater
	const errors = validationResult(req);

	// return validations errors
	if (!errors.isEmpty()) {
		return res.status(400).json({
			succes: false,
			message: "Validation failed",
			errors: errors.array(),
		});
	}

	// Handle the client request

	try {
		//extract the client input
		const { perfectNumber } = req.body;
		const result = isPerfectNumber(perfectNumber);
		return res.status(200).json({
			succes: true,
			isPerfectNumber: result,
			checkedValue: perfectNumber,
			message: result
				? "Wow! you caught a perfect number 🏅."
				: "Sorry 🤷‍♀️ not a perfect number ❌.",
		});
	} catch (err) {
		// pass sercer errors to the global error handler
		next(err);
	}
});

export default perfectNumberRouter;
