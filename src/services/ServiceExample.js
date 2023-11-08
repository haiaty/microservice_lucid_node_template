"use strict";

const path = require("path");
const FeatureExample = require(path.resolve(process.cwd(), "src", "features", "FeatureExample"));
//const GetUserInfo = require(path.resolve(process.cwd(), "src", "features", "GetUserInfo"));


module.exports =  async function (input) {

    let data = await FeatureExample(input);

    // a service may call another feature, or operation, or job to accomplish what is needed
    //let response = await GetUserInfo("email");

    return data;
}