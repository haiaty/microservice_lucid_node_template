process.on('uncaughtException', err => {
    console.log(`Uncaught Exception: ${err.message}`)
    console.log(err)
    process.exit(1)
})

process.on('unhandledRejection', e => console.log ("UNHANDLE REJECTION" + e));

module.exports = {} ;