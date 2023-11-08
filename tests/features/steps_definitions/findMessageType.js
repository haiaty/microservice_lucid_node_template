const appRoot = require("app-root-path");
const path = require("path");
const process = require("process");
const { Given, When, Then } = require('@cucumber/cucumber');
const FindMessageType = require(path.resolve(appRoot.path, "server", "operations", "FindMessageType"));
const expect = require('chai').expect


Given('an XML of type {string} found here {string}', {timeout : 30 * 1000}, async function (type, xmlFile) {
    this.messageType = type;
    this.xmlFilePath = path.resolve(__dirname,xmlFile)
});

When('I run the FindMessageType operation', {timeout : 30 * 1000}, async function () {

    let response = await FindMessageType(this.xmlFilePath);


    this.response = response;
});


Then('it must receive the message {string}', {timeout : 30 * 1000}, async function (messageType) {


    expect(this.response).to.be.equals(messageType);


});

