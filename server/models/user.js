'use strict';

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
	});

	// Relationships
	User.associate = function(models) {
		// User can have many recipes
		User.belongsToMany(models.Recipe);
		// User can have many reviews
		User.hasMany(models.Review);
		// User can have many shopping lists
		User.hasMany(models.ShoppingList)
	};

  User.prototype.comparePassword = function (challenge) {
    return this.password === challenge;
  };

	// Return the User model as defined to be exported to the app
  return User;
};