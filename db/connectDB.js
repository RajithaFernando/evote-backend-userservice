const { Client } = require('pg');

const client = new Client({
    "user": "",
    "password": "",
    "host": "ruby.db.elephantsql.com",
    "port": 5432,
    "database": ""
});

client.connect().then(() =>
{
    console.log("Server, You Have Successfully connected to PostgreSql");
})
.catch((error) =>
{
    console.log("Server, Unable to connect to PostgreSql");
	console.error(error);
});

module.exports = client;