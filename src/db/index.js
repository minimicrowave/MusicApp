const envUtil = require('../utils/env');
const dialect = envUtil.isTestEnv() ? 'sqlite' : 'mysql';
const db = require(`./${dialect}`);
module.exports = db;
