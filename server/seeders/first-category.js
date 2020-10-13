'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [{
      category_name: 'Masks',
      category_description: 'We have a wide array of masks available for purchase. we carry, n95 respirator masks for medical personel. we also carry cdc recomended cloth face coverings as well as surgical masks are regulated under 21 cfr 878.4040.',
      category_img: 'https://bgr.com/wp-content/uploads/2020/08/kn95-face-masks-coronavirus.jpg?quality=70&strip=all',
      createdAt: Sequelize.fn('NOW'),
      updatedAt: Sequelize.fn('NOW'),
    },
    {
      category_name: 'Gloves',
      category_description: 'Equippe has you "covered" when it comes to gloves. we off a variety of products. we have surgical grade latex gloves as well as non latex options available. all products are in complience with regulation 2016/425',
      category_img: 'https://assets.theedgemarkets.com/medical-staff-hands-in-blue-rubber-gloves-PPE_20200722030204_bloomberg.jpg?null',
      createdAt: Sequelize.fn('NOW'),
      updatedAt: Sequelize.fn('NOW'),
    },
    {
      category_name: 'Hygeine Products',
      category_description: 'Everything you need to survive the covid-19 pandemic. we keep a steady supply of hand sanitizer, cleaning solutions and sterilization products. everything from wipes to sprays.',
      category_img: 'https://www.gannett-cdn.com/presto/2020/05/06/USAT/559b7bee-8d49-4496-b4d4-06dded69fcb0-hand-sanitizer.jpg?crop=2021,1137,x9,y0&width=1600&height=800&fit=bounds',
      createdAt: Sequelize.fn('NOW'),
      updatedAt: Sequelize.fn('NOW'),
    },
    {
      category_name: 'Supplies',
      category_description: 'While these items may not be ppe, here at equippe we realize that this pandemic has created a demand for supplies that was unforeseen in the market. as such we have decided to produce some of the harder-to-get materials necessary for the pandemic.',
      category_img: 'https://static6.depositphotos.com/1117454/628/i/950/depositphotos_6285835-stock-photo-toilet-paper.jpg',
      createdAt: Sequelize.fn('NOW'),
      updatedAt: Sequelize.fn('NOW'),
    },], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {});
  }
};
