"use strict";

module.exports = function () {

    return new Promise(async function(resolve, reject){

        try {
            console.log("operations before init");
            resolve("ok");
        } catch (error){
            reject(error);
        }

    });

};
