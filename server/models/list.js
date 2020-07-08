// Define the List model
module.exports = function (sequelize, DataTypes) {
    const List = sequelize.define("List", {
        purchased: {
            type: DataTypes.BOOLEAN,
            default: false
        }
    });

    // Relationships
    List.associate = models => {
        // List belongs to a single User
        List.belongsTo(models.User, {
            foreignKey: "assignedUser",
            targetKey: "id"
        });

        // Lists can have many Ingredients
		List.belongsToMany(models.Ingredient, {
            through: "list_ingredient",
            as: "ingredients",
            foreignKey: "list_id"
        });

    };

    // Return the List model as defined to be exported to the app
    return List;
}