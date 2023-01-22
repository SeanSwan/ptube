const Sequelize = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'postgres',
});

const Package = sequelize.define('package', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.STRING,
        allowNull: false
    },
    sessions: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

sequelize.sync().then(() => {
    packageData.forEach(package => {
        Package.create({
            name: package.name,
            price: package.price,
            sessions: package.sessions
        });
    });
});

module.exports = Package;

