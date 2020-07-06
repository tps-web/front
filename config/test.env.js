'use strict'
const merge = require('webpack-merge') //here

const testEnv = require('./test.env') // here

module.exports = merge(testEnv, { //here
    NODE_ENV: '"test"', // here
    HUMRES_URL: '',
})