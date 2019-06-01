
const mongoose = require("mongoose");
const db = require("../server/models");


mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/drinks"
);

const drinkseed = [
  {name: 'Brandon and Will\'s Coke Float',
  category: 'Soft Drink / Soda',
  type: 'Alcoholic',
  image:
   'https://www.thecocktaildb.com/images/media/drink/xspxyr1472719185.jpg',
  instructions:
   'Scoop two large scoops of vanilla ice-cream into frosted beer mug. Next, add 2 ounces Maker\'s Mark. Then, pour in coke. Gently stir and enjoy.',
  ingredient1: 'Vanilla ice-cream, 2 scoops ',
  ingredient2: 'Coca-Cola, 1 can ',
  ingredient3: 'Bourbon, 2 oz ',
  ingredient4: ',  ',
  ingredient5: ',  ' ,
  glass: 'Beer mug' },
];

//console.log("removing drinks")
//db.Drinks.deleteMany({}, function(err) {
//  if (err) throw err;

  console.log("inserting drinks");
  db.Drinks.insertMany([
    {
      name: 'Test',
    }
  ], function(err, docs) {
    console.log('test');
    if (err) throw err;
    console.log(docs.length + " records inserted!");
    process.exit(0);
  })
//});
