import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import palindromRouter from "./routes/palindromRouter.js";
import perfectNumberRouter from "./routes/perfectNumberRouter.js";
import fibonacciRouter from "./routes/fibonacciRouter.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// defining middlewears 
app.use("/api/palindrom", palindromRouter);
app.use("/api/perfect_number", perfectNumberRouter);
app.use("/api/fibonacci" , fibonacciRouter)


// Express globale error handler
app.use((err, req, res, next) => {
    console.error(err.stack);

    // Determine the response status code
    const statusCode = err.status || 500;

    // build the simple response object
    const response = {
        success: false,
        message: err.message || "Internal Server Error",
    };
    // Send the  error response
    res.status(statusCode).json(response);
});



const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
	console.log(`App is runnig on port ${PORT}`);
});
