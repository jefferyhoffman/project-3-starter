module.exports = function (sequelize, DataTypes) {
    var Thread = sequelize.define("Post", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [1]
        }
    });

    Thread.associate = function (models) {
        Thread.hasMany(models.Reply, {
            onDelete: "cascade"
        });
    };

    return Thread;
};
