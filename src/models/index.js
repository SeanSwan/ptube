const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://user:password@host:port/database');

// The best practices for using Sequelize's define method would be as follows:

// Define a new Sequelize instance by connecting to your database and providing a username and password.

// Create a new model by calling the define method and passing in the name of the table and an object that defines the attributes and data types for each column.

// Use the Sequelize data types for the attributes, such as Sequelize.STRING, Sequelize.INTEGER, Sequelize.DATE, etc.

// Use the allowNull property to specify whether or not a column can be null.

// Use the validate property to specify any validation rules for the columns.

// Use the unique property to specify if the column should be unique.

// Use the defaultValue property to specify a default value for the column.

// Use the references property to specify any foreign key constraints.

// Use the onDelete property to specify the action that should be taken when the referenced row is deleted.

// Use the onUpdate property to specify the action that should be taken when the referenced row is updated.

// Finally, use the sync() method to create the table in the database and insert any seed data.