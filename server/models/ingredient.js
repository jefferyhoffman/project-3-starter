// Define the Ingredient model
module.exports = function (sequelize, DataTypes) {
    const Ingredient = sequelize.define("Ingredient", {
        ingredient: {
            type: DataTypes.STRING,
            allowNull: false
        },
        amount: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        measurement: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    // Relationships
    Ingredient.associate = models => {
        // Ingredient can have many Recipes
		Ingredient.belongsToMany(models.Recipe);

        // Ingredient can have many (shopping) Lists
		Ingredient.belongsToMany(models.Lists);

    };

    // Return the Ingredient model as defined to be exported to the app
    return Ingredient;
}