// Define the Ingredient model
module.exports = (sequelize, DataTypes) => {
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
        // Ingredients can have many Recipes & Recipes can have many Ingredients
		Ingredient.belongsToMany(models.Recipe, {
            through: "recipe_ingredient",
            as: "recipes",
            foreignKey: "ingredient_id"
        });

        // Ingredients can have many (shopping) Lists & Lists can have many Ingredients
		Ingredient.belongsToMany(models.List, {
            through: "list_ingredient",
            as: "lists",
            foreignKey: "ingredient_id"
        });

    };

    // Return the Ingredient model as defined to be exported to the app
    return Ingredient;
}