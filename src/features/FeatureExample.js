"use strict";

const path = require("path");

const OperationExample = require(path.resolve(process.cwd(), "src", "operations", "OperationExample"));


module.exports =  async function (input) {

    let array = await OperationExample(input);

    return array;
}