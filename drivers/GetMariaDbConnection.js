"use strict";

const mysql = require('mysql')
const path = require("path");
const configs = require(path.resolve(process.cwd(), "config"));

 async function GetMariaDbConnection() {


    try {
        var connection = mysql.createConnection({
            host: configs.DB_HOST,
            user: configs.DB_USER,
            password: configs.DB_PASSWORD,
            database: configs.DB_DATABASE,
            charset: 'utf8mb4'
        });

        await testConnection(connection);

        return connection;
    } catch(e) {
        throw e;
    }

 }

/**
 * Just to test if the connection is working
 * @param connection
 * @returns {Promise<unknown>}
 */
 async function testConnection(connection) {
    return new Promise((resolve, reject) => {
        connection.connect(function(err) {
            if (err) {
                reject(err);
            }
            resolve();
        });
    });
 }

 module.exports = GetMariaDbConnection;