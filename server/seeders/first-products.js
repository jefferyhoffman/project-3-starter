'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [{
      product_name: 'N95 Mask',
      product_description: 'particulate-filtering facepiece respirator that meets the U.S. National Institute for Occupational Safety and Health (NIOSH)',
      product_img_one: 'https://i.pinimg.com/originals/27/97/07/27970736454a5ceacafb35218f195aaf.png',
      price: '5.25',
      stock: '1000000',
      createdAt: Sequelize.fn('NOW'),
      updatedAt: Sequelize.fn('NOW'),
    },
{
    product_name: 'Rubber Gloves',
    product_description: ' We partner with external labs to test to ASTM D6319',
    product_img_one: 'https://pngimg.com/uploads/medical_gloves/medical_gloves_PNG128.png',
    price: '.70',
    stock: '10000',
    createdAt: Sequelize.fn('NOW'),
    updatedAt: Sequelize.fn('NOW'),
},
{
    product_name: 'Hand Sanitizer',
    product_description: 'Purell is an instant hand sanitizer made of ethyl alcohol which claims to kill "99.99%" of most common germs that may cause illness in as little as 15 seconds.',
    product_img_one: 'https://lh3.googleusercontent.com/proxy/dWuu-h5h4oX4QOqTuex6_VsD9RESJPQdS4M4zfvPrBgxcbdKDpCE8KxGxe9Hklthcm_KKPdOLttiITfzv1LAEOS97nhZmYTF0z5mPfwAPDPaUpFSeXEIfKOTzHWeIebKSb5ut6EBVw',
    price: '7.99',
    stock: '1000',
    createdAt: Sequelize.fn('NOW'),
    updatedAt: Sequelize.fn('NOW'),
},
{
    product_name: 'Toilet Paper',
    product_description: 'Charmin Ultra Soft is irresistibly soft and designed to feel comfortable in use. Ultra Soft gets you clean with all the softness you love in a long-lasting roll.',
    product_img_one: 'https://pngimg.com/uploads/toilet_paper/toilet_paper_PNG18285.png',
    price: '7.99',
    stock: '1000',
    createdAt: Sequelize.fn('NOW'),
    updatedAt: Sequelize.fn('NOW'),
}], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
