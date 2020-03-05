const alasql = require('alasql');
const db = new alasql.Database();

module.exports = {
    query(queryString, params = []) {
        return db.exec(queryString, params);
    },
    closeConnection() {
        return db.close();
    },
};
