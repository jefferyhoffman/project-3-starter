'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [{
      product_name: 'N95 Mask',
      product_description: 'NIOSH Certified set 0f 10',
      product_img_one: 'https://i.pinimg.com/originals/27/97/07/27970736454a5ceacafb35218f195aaf.png',
      price: 54.99,
      stock: 1000,
      createdAt: Sequelize.fn('NOW'),
      updatedAt: Sequelize.fn('NOW'),
    },
    {
      product_name: 'Surgical Mask',
      product_description: 'NIOSH Certified set 0f 10',
      product_img_one: 'https://sdpfab.com/wp-content/uploads/2020/05/SURGICALMASK.png',
      price: 54.99,
      stock: 1000,
      createdAt: Sequelize.fn('NOW'),
      updatedAt: Sequelize.fn('NOW'),
    },
    {
      product_name: 'Neck Gaiter',
      product_description: 'Set of 2',
      product_img_one: 'https://deepersonar.com/media/catalog/product/cache/d4bfc46ff4321f75f71501f6ab7a8b21/n/e/neck_420x420.png',
      price: 54.99,
      stock: 1000,
      createdAt: Sequelize.fn('NOW'),
      updatedAt: Sequelize.fn('NOW'),
    },
{
    product_name: 'Latex Gloves',
    product_description: 'Latex Gloves box of 500',
    product_img_one: 'https://pngimg.com/uploads/medical_gloves/medical_gloves_PNG128.png',
    price: 24.99,
    stock: 10000,
    createdAt: Sequelize.fn('NOW'),
    updatedAt: Sequelize.fn('NOW'),
},
{
  product_name: 'Vinyl Gloves',
  product_description: 'Vinyl Gloves box of 500',
  product_img_one: 'https://cdn.shopify.com/s/files/1/0260/7523/4362/products/6811-6815-Multicare-Vinyl-Exam-glove_2_1024x1024@2x.png?v=1587489162',
  price: 19.99,
  stock: 10000,
  createdAt: Sequelize.fn('NOW'),
  updatedAt: Sequelize.fn('NOW'),
},

{
    product_name: 'Hand Sanitizer',
    product_description: 'Purrell 10z Bottle',
    product_img_one: 'https://lh3.googleusercontent.com/proxy/to69AxVQ9KvSEhrjTZ6WoS4xC8h3fjk5fLusfKwgxtRCZElRS87WZUY4H7g9W43FGtrpoDMoibczNQ1gxeAoMzj2eonFJqKvZQi56ymgT-s9qloHuXo8s7Iwb0NZi82H',
    price: 7.99,
    stock: 1000,
    createdAt: Sequelize.fn('NOW'),
    updatedAt: Sequelize.fn('NOW'),
},
{
  product_name: 'Disinfectant Spray',
  product_description: 'Lysol Spray',
  product_img_one: 'https://d2aam04nmhpdf8.cloudfront.net/images/images/000/034/743/xlarge/8988_1.png?1585076760',
  price: 7.99,
  stock: 1000,
  createdAt: Sequelize.fn('NOW'),
  updatedAt: Sequelize.fn('NOW'),
},
{
  product_name: 'Disinfectant Wipes',
  product_description: 'Clorox Wipes',
  product_img_one: 'https://www.clorox.com/wp-content/uploads/2015/08/CDW-CrispLemon-Front-960-0x500-c-default@2x.png',
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
},
{
  product_name: 'Tiger King',
  product_description: 'Blue Ray',
  product_img_one: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7813fe71-a23f-46b2-8bf5-1f3a39e91674/ddunnl0-db25854f-7422-466c-92c2-eacfb186150f.png/v1/fill/w_250,h_250,strp/tiger_king_blu_ray_e04_by_tombless_ddunnl0-250t.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01MTIiLCJwYXRoIjoiXC9mXC83ODEzZmU3MS1hMjNmLTQ2YjItOGJmNS0xZjNhMzllOTE2NzRcL2RkdW5ubDAtZGIyNTg1NGYtNzQyMi00NjZjLTkyYzItZWFjZmIxODYxNTBmLnBuZyIsIndpZHRoIjoiPD01MTIifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.FzQLHLUERE5vYlyezRUaPGGFD1T4PzWyFYaUzen7KzI',
  price: 500,
  stock: 1000,
  createdAt: Sequelize.fn('NOW'),
  updatedAt: Sequelize.fn('NOW'),
}], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
