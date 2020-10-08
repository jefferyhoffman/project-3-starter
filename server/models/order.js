'use strict';

module.exports = (sequelize, DataTypes) => {
	const OrderDetails = sequelize.define(
		'Order',
		{
			// orderStatus can change from it's default of "Cart" to "Processing" to "Shipped" to "Delivered"
			orderStatus: {
				type: DataTypes.STRING,
				defaultValue: 'Cart'
			}
		},
		{}
	);

	OrderDetails.associate = function(models) {
		OrderDetails.belongsTo(models.User, {
			foreignKey: {
				allowNull: false
			}
		});

		OrderDetails.belongsToMany(models.Product, {
			through: 'Order_Products'
		});
	};

	return OrderDetails;
};
