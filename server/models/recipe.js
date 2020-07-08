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
        // Recipes can have many Users & Users can have many Recipes
        Recipe.belongsToMany(models.User, { 
            through: "user_recipe" ,
            as: "users",
            foreignKey: "recipe_id"
        });

        // Recipes can have many Reviews
        Recipe.hasMany(models.Review);

        // Recipes can have many Ingredients & Ingredients can have many Recipes
        Recipe.belongsToMany(models.Ingredient, { 
            through: "recipe_ingredient",
            as: "ingredients",
            foreignKey: "recipe_id"
        });

        // Recipes can have many Categories & Categories can have many Recipes
        Recipe.belongsToMany(models.Category, { 
            through: "recipe_category",
            as: "categories",
            foreignKey: "recipe_id"
        });
    };

    // Return the Recipe model as defined to be exported to the app
    return Recipe;
}