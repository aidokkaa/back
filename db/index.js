const Sequelize = require("sequelize");

const sequelize =  new Sequelize("reactjs", "root", "", {
    dialect: "mysql",
    host: "localhost",
    port:3307
});

const Notes = require('./notes')(sequelize);

module.exports = {
    sequelize : sequelize,
    notes : Notes
}