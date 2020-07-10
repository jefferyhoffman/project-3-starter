// Define the Review model
module.exports = (sequelize, DataTypes) => {
    const Review = sequelize.define("Review", {
        review: {
            type: DataTypes.STRING,
            allowNull: false
        },
        stars: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    });

    // Relationships
    Review.associate = models => {
        // Review belongs to a single User
        Review.belongsTo(models.User, {
            foreignKey: "UserId",
            targetKey: "id"
        });

        // Review belongs to a single Recipe
        Review.belongsTo(models.Recipe, {
            foreignKey: "RecipeId",
            targetKey: "id"
        });
    };

    // Return the Review model as defined to be exported to the app
    return Review;
}