'use strict';

module.exports = (sequelize, DataTypes) => {
	const Product = sequelize.define(
		'Product',
		{
			product_name: DataTypes.STRING,
			product_description: DataTypes.STRING,
			product_img_one: DataTypes.STRING,
			product_img_two: DataTypes.STRING,
			product_img_three: DataTypes.STRING,
			price: DataTypes.INTEGER,
			stock: DataTypes.INTEGER
		},
		{}
	);

	Product.associate = function(models) {
		Product.belongsToMany(models.Order, {
			through: 'Order_Products'
		});

		Product.belongsToMany(models.Category, {
			through: 'Product_Categories'
		});
	};

	return Product;
};