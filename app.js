const express = require('express');
const ExpressError = require('./expressError');
const  { getMedian, getMean, getMode, validateQuery } = require('./functionLibrary');

const app = express();

app.get("/mean", (req, res, next) => {
    // if nums parameter didn't sent
    try {
        
        if (!req.query.nums) {
            throw new ExpressError('You should add a nums parameter in a query-string (numbers are coma-separated).', 401)
        }
        const nums = validateQuery(req.query.nums);
        if (nums instanceof Error) {
            throw new ExpressError(nums.message);
        }
        const mean = getMean(nums);
        return res.send({operation: "mean", value: mean});        
    } catch (e) {
        next(e)
    }
});

app.get("/median", (req, res, next) => {
    // if nums parameter didn't sent
    try {
        if (!req.query.nums) {
            throw new ExpressError('You should add a nums parameter in a query-string (numbers are coma-separated).', 401)
        }
        const nums = validateQuery(req.query.nums);
        if (nums instanceof Error) {
            throw new ExpressError(nums.message);
        }
        const median = getMedian(nums);
        return res.send({result: {operation: "median", value: median}});        
    } catch (e) {
        next(e)
    }
});

app.get("/mode", (req, res, next) => {
    // if nums parameter didn't sent
    try {
        if (!req.query.nums) {
            throw new ExpressError('You should add a nums parameter in a query-string (numbers are coma-separated).', 401)
        }
        const nums = validateQuery(req.query.nums);
        if (nums instanceof Error) {
            throw new ExpressError(nums.message);
        }
        const mode = getMode(nums);
        return res.send({result: {operation: "mode", value: mode}});        
    } catch (e) {
        next(e)
    }
});

app.get("/all", (req, res, next) => {
    // if nums parameter didn't sent
    try {
        if (!req.query.nums) {
            throw new ExpressError('You should add a nums parameter in a query-string (numbers are coma-separated).', 401)
        }
        const nums = validateQuery(req.query.nums);
        if (nums instanceof Error) {
            throw new ExpressError(nums.message);
        }
        const mode = getMode(nums);
        const mean = getMean(nums);
        const median = getMedian(nums);
        return res.send({result: {operation: "mode", mode: mode, median: median, mean:mean}});        
    } catch (e) {
        next(e)
    }
});

// If no other route matches, respond with a 404
app.use((req, res, next) => {
    const e = new ExpressError("Page Not Found", 404);
    next(e)
});
  
  
// Error handler
app.use(function (err, req, res, next) { 
// the default status is 500 Internal Server Error
let status = err.status || 500;
let message = err.msg;
  
// set the status and alert the user
return res.status(status).json({
    error: { message, status }
    });
});
  
app.listen(3000, () => {
    console.log("Server running on port 3000")
});
  