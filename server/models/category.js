// Define the Category model
module.exports = function (sequelize, DataTypes) {
    const Category = sequelize.define("Category", {
        category: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    // Relationships
    Category.associate = models => {
        // Category can have many Recipes
		Category.belongsToMany(models.Recipe, { through: RecipeCategory});

    };

    // Return the Category model as defined to be exported to the app
    return Category;
}