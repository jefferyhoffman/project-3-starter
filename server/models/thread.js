module.exports = function (sequelize, DataTypes) {
    var Thread = sequelize.define("Thread", {
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
        },
        timeStamp: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    });

    Thread.associate = function (models) {
        Thread.hasMany(models.Reply, {
            onDelete: "cascade"
        });
    };

    return Thread;
};
