// Define the Category model
module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define("Category", {
        category: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    // Relationships
    Category.associate = models => {
        // Categories can have many Recipes & Recipes can have many Categories
		Category.belongsToMany(models.Recipe, { 
            through: "recipe_category",
            as: "recipes",
            foreignKey: "category_id"
        });
    };

    // Return the Category model as defined to be exported to the app
    return Category;
}