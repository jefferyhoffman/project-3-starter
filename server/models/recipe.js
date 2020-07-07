// Define the Recipe model
module.exports = function (sequelize, DataTypes) {
    const Recipe = sequelize.define("Recipe", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        prepTime: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cookTime: {
            type: DataTypes.STRING,
            allowNull: false
        },
        yield: {
            type: DataTypes.STRING,
            allowNull: true
        },
        directions: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdBy: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    // Relationships
    Recipe.associate = models => {
        // Recipe has many Users
        Recipe.belongsToMany(models.User, { through: UserRecipe });

        // Recipe has many Reviews
        Recipe.hasMany(models.Review);

        // Recipe has many Ingredients
        Recipe.belongsToMany(models.Ingredient, { through: RecipeIngredient });

        // Recipe has many Categories
        Recipe.belongsToMany(models.Category, { through: RecipeCategory });
    };

    // Return the Recipe model as defined to be exported to the app
    return Recipe;
}