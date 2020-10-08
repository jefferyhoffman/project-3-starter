'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Product', [{
      product_name: 'N95 Mask',
      product_description: 'NIOSH Certified set 0f 10',
      product_img_one: 'https://i.pinimg.com/originals/27/97/07/27970736454a5ceacafb35218f195aaf.png',
      price: 54.99,
      stock: 1000,
      createdAt: Sequelize.fn('NOW'),
      updatedAt: Sequelize.fn('NOW'),
    },
{
    product_name: 'Rubber Gloves',
    product_description: 'Latex surgical gloves set of 500',
    product_img_one: 'https://pngimg.com/uploads/medical_gloves/medical_gloves_PNG128.png',
    price: 24.99,
    stock: 10000,
    createdAt: Sequelize.fn('NOW'),
    updatedAt: Sequelize.fn('NOW'),
},
{
    product_name: 'Hand Sanitizer',
    product_description: 'Etyhl Alcohol one bottle',
    product_img_one: 'https://lh3.googleusercontent.com/proxy/dWuu-h5h4oX4QOqTuex6_VsD9RESJPQdS4M4zfvPrBgxcbdKDpCE8KxGxe9Hklthcm_KKPdOLttiITfzv1LAEOS97nhZmYTF0z5mPfwAPDPaUpFSeXEIfKOTzHWeIebKSb5ut6EBVw',
    price: 7.99,
    stock: 1000,
    createdAt: Sequelize.fn('NOW'),
    updatedAt: Sequelize.fn('NOW'),
},
{
    product_name: 'Toilet Paper',
    product_description: 'Charmin 4 rolls',
    product_img_one: 'https://pngimg.com/uploads/toilet_paper/toilet_paper_PNG18285.png',
    price: 10000,
    stock: 1000,
    createdAt: Sequelize.fn('NOW'),
    updatedAt: Sequelize.fn('NOW'),
}], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Product', null, {});
  }
};
