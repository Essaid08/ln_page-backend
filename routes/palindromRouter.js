import { Router } from "express";
import { body, validationResult } from "express-validator";
import isPalindrome from "../controllers/palindromController.js";

const palindromRouter = Router();

// we will write middlewar controllers in the current file to separate logic for readibility and code organisation

// validation middleware
const validationInput = [
	body("palindromInput")
		.trim()
		.exists({ checkFalsy: true })
		.withMessage("Input is required.")
		.isString()
		.withMessage("Input must be a string")
		.isLength({ min: 1, max: 100 })
		.withMessage("Length must be between 1 and 100."),
];

// route that actually chack for palindrom
palindromRouter.post("/", validationInput, (req, res, next) => {
	const errors = validationResult(req);

	// return validations errors
	if (!errors.isEmpty()) {
		return res.status(400).json({
            succes : false ,
            message : "Validation failed" ,
			errors: errors.array(),
		});
	}

	//handle the client request
	try {
		const { palindromInput } = req.body;
		const result = isPalindrome(palindromInput); // pass the input to the isPalindrom
		return res.status(200).json({ 
            succes: true,
            isPalindrome : result ,
			checkedValue : palindromInput,
			// sending response message based on check status 
            message:  result ? "Defenitely a Palidrom 👏" : "Oops Not a palindrom ❌ try again"
         });
	} catch (err) {
		// pass errors to the global express error handler
		next(err);
	}
});

export default palindromRouter;
