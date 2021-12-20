global.express = require('express');
global.cors = require('cors');
global.bodyParser = require('body-parser');
global.Sequelize = require('sequelize');
console.log(process.env)
// global.sequelize = new Sequelize(`postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:5432/${process.env.POSTGRES_DB}`);
global.sequelize = new Sequelize(`postgres://postgres:@Jirayu21@127.0.0.1:5432/school_cmd`);
// global.sequelize = new Sequelize('school_cmd', 'postgres', 'cmdTest', {
//     host: 'localhost',
//     port: '35432',
//     dialect: 'postgres',
//     pool: {
//         max: 5,
//         min: 0,
//         acquire: 30000,
//         idle: 10000
//     }
// });

const getStatusDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
getStatusDB()