'use strict';

module.exports = (sequelize, DataTypes) => {
	const Category = sequelize.define(
		'Category',
		{
			category_name: DataTypes.STRING,
			category_img: DataTypes.STRING,
			category_description: DataTypes.STRING
		},
		{}
	);

	Category.associate = function(models) {
		Category.belongsToMany(models.Product, {
			through: 'Product_Categories'
		});
	};

	return Category;
};
