module.exports = function (sequelize, DataTypes) {
    var Reply = sequelize.define("Reply", {
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

    Reply.associate = function (models) {
        
        Reply.belongsTo(models.Thread, {
            foreignKey: {
                allowNull: false
            }
        });

        Reply.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Reply;
};