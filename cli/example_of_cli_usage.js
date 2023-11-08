
"use strict";

//=========================================
// THIS IS AN EXAMPLE IF YOU WANT TO TEST YOUR SERVICE / FEATURE WITHOUT HTTP LAYER
//========================================

const ServiceExample = require(path.resolve(process.cwd(), "src", "services", "ServiceExample"));


async function main(inputs) {

    const userAgent = inputs.test;

    let response  = await ServiceExample(userAgent);

    console.log(response);

}




if (require.main === module) {

    (async function () {
        try {



            var [bin, sourcePath, ...args] = process.argv;

            //================
            // Takes a json as input
            //==================
            var jsonString = args[0];

            if (!jsonString) {
                throw Error("You must pass the first argument as json string");
            }


            var inputs = JSON.parse(jsonString);

            main(inputs);


        } catch (ex) {

            console.log(JSON.stringify(ex.message));
            console.log(ex);
            process.exit(1);
        }

    })();

} else {
    // If Required by other files as module
    module.exports = main;
}
