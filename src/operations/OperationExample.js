"use strict";

const path = require("path");
const JobExample = require(path.resolve(process.cwd(), "src", "jobs", "JobExample"));
const TransformStringToArrayJob = require(path.resolve(process.cwd(), "src", "jobs", "TransformStringToArrayJob"));



module.exports =  async function (input) {


    let reversedString = JobExample(input);

    let strArray = TransformStringToArrayJob(reversedString);

    return strArray;

}