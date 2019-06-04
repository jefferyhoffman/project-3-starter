module.exports = function(sequelize, DataTypes){
    var Book = sequelize.define("POST", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true,      
        },
        series: {
            type: DataTypes.STRING,
        },
        summary: {
            type: DataTypes.STRING,
        }

    });
     return Book;
}