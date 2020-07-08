"use strict";

// Define the User model
module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define("User", {
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			// Validates an email format
			validate: {
				isEmail: true
			}
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false
		},
		firstName: {
			type: DataTypes.STRING,
			allowNull: false
		},
		lastName: {
			type: DataTypes.STRING,
			allowNull: false
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false
		}
	}, {});
	// This empty object was added as it was in the user model of the starter code.

	// Relationships
	User.associate = function (models) {
		// Users can have many Recipes & Recipes can have many Users
		User.belongsToMany(models.Recipe, {
			through: "user_recipe",
			as: "recipes",
			foreignKey: "user_id"
		});

		// Users can have many reviews
		User.hasMany(models.Review);

		// Users can have many (shopping) lists
		User.hasMany(models.List)
	};

	User.prototype.comparePassword = function (challenge) {
		return this.password === challenge;
	};

	// Return the User model as defined to be exported to the app
	return User;
};