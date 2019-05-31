module.exports = (sequelize, DataTypes) => {
    const Item = sequelize.define("Item", {
        name: DataTypes.STRING,
        price: DataTypes.INTEGER,
        quantity: DataTypes.INTEGER,
        category: DataTypes.TEXT,
        img: DataTypes.TEXT
      });
    return Item;
  };