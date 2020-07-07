// Define the Review model
module.exports = function (sequelize, DataTypes) {
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
            foreignKey: "assignedUser",
            targetKey: "id"
        });

        // Review belongs to a single Recipe
        Review.belongsTo(models.Recipe, {
            foreignKey: "assignedRecipe",
            targetKey: "id"
        });

    };

    // Return the Review model as defined to be exported to the app
    return Review;
}