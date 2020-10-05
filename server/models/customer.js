'use strict';

module.exports = (sequelize, DataTypes) => {
    const Customer = sequelize.define('Customer', {
        customer_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        first: DataTypes.STRING,
        last: DataTypes.STRING,
        password: DataTypes.STRING,
        address: DataTypes.STRING,
        zip: DataTypes.STRING,
        city: DataTypes.STRING,
        phone: DataTypes.STRING

    }, {});

    Customer.associate = function (models) {
        // associations can be defined here
    };

    Customer.prototype.comparePassword = function (challenge) {
        return this.password === challenge;
    }

    return Customer;
};