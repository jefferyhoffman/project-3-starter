const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/drinks"
);

const drinkseed = [
  {
    name: 'Brandon and Will\'s Coke Float',
    category: 'Soft Drink / Soda',
    kind: 'Alcoholic',
    image:
      'https://www.thecocktaildb.com/images/media/drink/xspxyr1472719185.jpg',
    instructions:
      'Scoop two large scoops of vanilla ice-cream into frosted beer mug. Next, add 2 ounces Maker\'s Mark. Then, pour in coke. Gently stir and enjoy.',
    ingredient1: 'Vanilla ice-cream, 2 scoops ',
    ingredient2: 'Coca-Cola, 1 can ',
    ingredient3: 'Bourbon, 2 oz ',
    glass: 'Beer mug'
  },
  { name: 'Arizona Stingers',
  category: 'Cocktail',
  kind: 'Alcoholic',
  image:
   'https://www.thecocktaildb.com/images/media/drink/y7w0721493068255.jpg',
  instructions:
   'Place ice cubes in the hurricane glass . Add the 2 HEAPING shots of Absolute Vodka. Note- You can add as many shots of Absolute as you want!) Fill the rest of glass with the Arizona Icetea with lemon. Stir to mix using a spoon. Drink up and enjoy!!!!!!!',
  ingredient1: 'Absolut Vodka, 2 shots ',
  ingredient2: 'Iced tea, 12 oz lemon ',
  ingredient3: ',  ',
  ingredient4: ',  ',
  ingredient5: ',  ',
  glass: 'Hurricane glass' 
  },
{ name: 'Apricot punch',
  category: 'Punch / Party Drink',
  kind: 'Alcoholic',
  image:
   'https://www.thecocktaildb.com/images/media/drink/tuxxtp1472668667.jpg',
  instructions:
   'Pour all ingrediants into a large punch bowl. Add ice and 4 oranges that are peeled and divided.',
  ingredient1: 'Apricot brandy, 1 qt ',
  ingredient2: 'Champagne, 4 fifth ',
  ingredient3: 'Vodka, 1 fifth ',
  ingredient4: '7-Up, 4 L ',
  ingredient5: 'Orange juice, 1/2 gal ',
  glass: 'Punch bowl' 
  },
{ name: 'Cream Soda',
  category: 'Cocktail',
  kind: 'Alcoholic',
  image:
   'https://www.thecocktaildb.com/images/media/drink/yqstxr1479209367.jpg',
  instructions:
   'Pour 1oz of Spiced Rum into a highball glass with ice. Fill with Ginger Ale.',
  ingredient1: 'Spiced rum, 1 oz ',
  ingredient2: 'Ginger ale, \n',
  ingredient3: ', \n',
  ingredient4: ', \n',
  ingredient5: ', \n',
  glass: 'Highball glass' 
  },
{ name: 'Army special',
  category: 'Cocktail',
  kind: 'Alcoholic',
  image:
   'https://www.thecocktaildb.com/images/media/drink/55muhh1493068062.jpg',
  instructions:
   'Pour Vodka, Gin and lime cordial into glass, and top up with crushed ice. Wait for ice to melt slightly and sip without a straw.',
  ingredient1: 'Vodka, 30 ml ',
  ingredient2: 'Gin, 30 ml ',
  ingredient3: 'Lime juice cordial, 45 ml ',
  ingredient4: 'Ice, 1/2 glass crushed ',
  ingredient5: ',  ',
  glass: 'Cocktail glass' 
  },
{ name: 'Arise My Love',
  category: 'Ordinary Drink',
  kind: 'Alcoholic',
  image:
   'https://www.thecocktaildb.com/images/media/drink/wyrrwv1441207432.jpg',
  instructions:
   'Put creme de menthe into a champagne flute. Fill with chilled champagne and serve.',
  ingredient1: 'Champagne, Chilled ',
  ingredient2: 'Green Creme de Menthe, 1 tsp ',
  ingredient3: ',  ',
  ingredient4: ',  ',
  ingredient5: ',  ',
  glass: 'Champagne flute' 
  },
{ name: 'Arizona Antifreeze',
  category: 'Shot',
  kind: 'Alcoholic',
  image:
   'https://www.thecocktaildb.com/images/media/drink/dbtylp1493067262.jpg',
  instructions: 'Pour all ingredients into shot glass and slam !!!!',
  ingredient1: 'Vodka, 1/3 oz ',
  ingredient2: 'Midori melon liqueur, 1/3 oz ',
  ingredient3: 'Sweet and sour, 1/3 oz ',
  ingredient4: ',  ',
  ingredient5: ',  ',
  glass: 'Shot glass' 
  },
{ name: '3 Wise Men',
  category: 'Shot',
  kind: 'Alcoholic',
  image:
   'https://www.thecocktaildb.com/images/media/drink/wxqpyw1468877677.jpg',
  instructions: 'put them them in a glass... and slam it to tha head.',
  ingredient1: 'Jack Daniels, 1/3 oz ',
  ingredient2: 'Johnnie Walker, 1/3 oz ',
  ingredient3: 'Jim Beam, 1/3 oz ',
  ingredient4: ',  ',
  ingredient5: ',  ',
  glass: 'Collins glass' 
  },
{ name: 'Champagne Cocktail',
  category: 'Ordinary Drink',
  kind: 'Alcoholic',
  image:
   'https://www.thecocktaildb.com/images/media/drink/ehh5df1504366811.jpg',
  instructions:
   'Add dash of Angostura bitter onto sugar cube and drop it into champagne flute. Add cognac followed by gently pouring chilled champagne. Garnish with orange slice and maraschino cherry.',
  ingredient1: 'Champagne, Chilled ',
  ingredient2: 'Sugar, 1 piece ',
  ingredient3: 'Bitters, 2 dashes ',
  ingredient4: 'Lemon peel, 1 twist of ',
  ingredient5: 'Cognac, 1 dash',
  glass: 'Champagne flute' 
  },
{ name: 'Abilene',
  category: 'Ordinary Drink',
  kind: 'Alcoholic',
  image:
   'https://www.thecocktaildb.com/images/media/drink/ysqwwt1461919465.jpg',
  instructions:
   'Pour all of the ingredients into a highball glass almost filled with ice cubes. Stir well.',
  ingredient1: 'Dark rum, 1 1/2 oz ',
  ingredient2: 'Peach nectar, 2 oz ',
  ingredient3: 'Orange juice, 3 oz ',
  ingredient4: ',  ',
  ingredient5: ',  ',
  glass: 'Highball glass' 
  },
{ name: '69 Special',
  category: 'Ordinary Drink',
  kind: 'Alcoholic',
  image:
   'https://www.thecocktaildb.com/images/media/drink/vqyxqx1472669095.jpg',
  instructions:
   'Pour 2 oz. gin. Add 4 oz. 7-up. Add Lemon Juice for flavor. If you are weak, top up glass with more 7-Up.',
  ingredient1: 'Gin, 2 oz dry ',
  ingredient2: '7-Up, 4 oz ',
  ingredient3: 'Lemon juice, 0.75 oz ',
  ingredient4: ',  ',
  ingredient5: ',  ',
  glass: 'Collins Glass' 
  },
{ name: 'Addington',
  category: 'Cocktail',
  kind: 'Alcoholic',
  image:
   'https://www.thecocktaildb.com/images/media/drink/ib0b7g1504818925.jpg',
  instructions:
   'Mix both the vermouth\'s in a shaker and strain into a cold glass. Top up with a squirt of Soda Water. ',
  ingredient1: 'Sweet Vermouth, 2 shots ',
  ingredient2: 'Dry Vermouth, 1 shot ',
  ingredient3: 'Soda Water, Top up with\r\n',
  ingredient4: ', \r\n',
  ingredient5: ', \r\n',
  glass: 'Cocktail glass' 
  },
{ name: 'Addison',
  category: 'Cocktail',
  kind: 'Alcoholic',
  image:
   'https://www.thecocktaildb.com/images/media/drink/yzva7x1504820300.jpg',
  instructions:
   'Shake together all the ingredients and strain into a cold glass.',
  ingredient1: 'Gin, 1 1/2 shot ',
  ingredient2: 'Vermouth, 1 1/2 shot ',
  ingredient3: ', \r\n',
  ingredient4: ', \r\n',
  ingredient5: ', \r\n',
  glass: 'Martini Glass' 
  },
{ name: 'Absolutely Cranberry Smash',
  category: 'Ordinary Drink',
  kind: 'Alcoholic',
  image:
   'https://www.thecocktaildb.com/images/media/drink/vqwstv1472811884.jpg',
  instructions: 'Stir ingredients together. Serve over ice.',
  ingredient1: 'Absolut Vodka, 2 oz ',
  ingredient2: 'Cranberry juice, 4 oz ',
  ingredient3: 'Ginger ale, 2 oz ',
  ingredient4: 'Ice, Add ',
  ingredient5: ',  ',
  glass: 'Cocktail glass' 
  },
{ name: '151 Florida Bushwacker',
  category: 'Milk / Float / Shake',
  kind: 'Alcoholic',
  image:
   'https://www.thecocktaildb.com/images/media/drink/rvwrvv1468877323.jpg',
  instructions:
   'Combine all ingredients. Blend until smooth. Garnish with chocolate shavings if desired.',  ingredient1: 'Malibu rum, 1/2 oz ',
  ingredient2: 'Light rum, 1/2 oz ',
  ingredient3: '151 proof rum, 1/2 oz Bacardi ',
  ingredient4: 'Dark Creme de Cacao, 1 oz ',
  ingredient5: 'Cointreau, 1 oz ',
  glass: 'Beer mug' 
  },
{ name: 'Ace',
  category: 'Cocktail',
  kind: 'Alcoholic',
  image:
   'https://www.thecocktaildb.com/images/media/drink/l3cd7f1504818306.jpg',
  instructions:
   'Shake all the ingredients in a cocktail shaker and ice then strain in a cold glass.',
  ingredient1: 'Gin, 2 shots ',
  ingredient2: 'Grenadine, 1/2 shot ',
  ingredient3: 'Heavy cream, 1/2 shot ',
  ingredient4: 'Milk, 1/2 shot ',
  ingredient5: 'Egg White, 1/2 Fresh',
  glass: 'Martini Glass' 
  },
{ name: 'A. J.',
  category: 'Ordinary Drink',
  kind: 'Alcoholic',
  image:
   'https://www.thecocktaildb.com/images/media/drink/uryyrr1472811418.jpg',
  instructions:
   'Shake ingredients with ice, strain into a cocktail glass, and serve.',
  ingredient1: 'Applejack, 1 1/2 oz ',
  ingredient2: 'Grapefruit juice, 1 oz ',
  ingredient3: ',  ',
  ingredient4: ',  ',
  ingredient5: ',  ',
  glass: 'Cocktail glass' 
  },
{ name: 'Acapulco',
  category: 'Ordinary Drink',
  kind: 'Alcoholic',
  image:
   'https://www.thecocktaildb.com/images/media/drink/vtpsvr1472811976.jpg',
  instructions:
   'Combine and shake all ingredients (except mint) with ice and strain into an old-fashioned glass over ice cubes. Add the sprig of mint and serve.',
  ingredient1: 'Light rum, 1 1/2 oz ',
  ingredient2: 'Triple sec, 1 1/2 tsp ',
  ingredient3: 'Lime juice, 1 tblsp ',
  ingredient4: 'Sugar, 1 tsp ',
  ingredient5: 'Egg white, 1 ',
  glass: 'Old-fashioned glass' 
  },
{ name: 'Angel Face',
  category: 'Ordinary Drink',
  kind: 'Alcoholic',
  image:
   'https://www.thecocktaildb.com/images/media/drink/vqpptp1478253178.jpg',
  instructions:
   'Shake all ingredients with ice and strain contents into a cocktail glass.',
  ingredient1: 'Apricot brandy, 1/2 oz ',
  ingredient2: 'Apple brandy, 1/2 oz ',
  ingredient3: 'Gin, 1 oz ',
  ingredient4: ',  ',
  ingredient5: ',  ',
  glass: 'Cocktail glass' 
  },
{ name: 'Artillery Punch',
  category: 'Punch / Party Drink',
  kind: 'Alcoholic',
  image:
   'https://www.thecocktaildb.com/images/media/drink/9a4vqb1493067692.jpg',
  instructions:
   'Combine all the ingredients in a large punch bowl with a block of ice. If found too dry, sugar syrup may be added. Decorate with twists of lemon peel.',
  ingredient1: 'Tea, 1 quart black ',
  ingredient2: 'Rye whiskey, 1 quart ',
  ingredient3: 'Red wine, 1 fifth ',
  ingredient4: 'Rum, 1 pint Jamaican ',
  ingredient5: 'Brandy, 1/2 pint ',
  glass: 'Punch bowl' 
  },
{ name: 'Citrus Coke',
  category: 'Soft Drink / Soda',
  kind: 'Alcoholic',
  image:
   'https://www.thecocktaildb.com/images/media/drink/uyrvut1479473214.jpg',
  instructions:
   'Pour half of coke in a glass. Then add Bacardi and top it off with the remaining coke. Stir and drink up!',
  ingredient1: 'Bacardi Limon, 1 part ',
  ingredient2: 'Coca-Cola, 2 parts ',
  ingredient3: ',  ',
  ingredient4: ',  ',
  ingredient5: ',  ',
  glass: 'Highball Glass' 
  },
{ name: 'A midsummernight dream',
  category: 'Ordinary Drink',
  kind: 'Alcoholic',
  image:
   'https://www.thecocktaildb.com/images/media/drink/ysqvqp1461867292.jpg',
  instructions:
   'Mix the strawberrys in a blender Pour it together with the vodka,kirch and strawberry liquer over ice in a shaker. Shake well and pour in a highballglass. Fill up with the Russchian water',
  ingredient1: 'Vodka, 2 oz ',
  ingredient2: 'Kirschwasser, 1 oz ',
  ingredient3: 'Strawberry liqueur, 1 tsp ',
  ingredient4: 'Strawberries, 5 ',
  ingredient5: 'Schweppes Russchian, \n',
  glass: 'Collins Glass' 
  },
{ name: 'Bahama Mama',
  category: 'Cocktail',
  kind: 'Alcoholic',
  image:
   'https://www.thecocktaildb.com/images/media/drink/tyb4a41515793339.jpg',
  instructions:
   'Add 2 parts club soda or more or less to taste.\r\n\r\nMix it all together and pour over a bunch of ice. Drink with a straw.',
  ingredient1: 'Rum, 3 parts',
  ingredient2: 'Dark Rum, 1 part',
  ingredient3: 'Banana liqueur, 1 part',
  ingredient4: 'Grenadine, 1 part',
  ingredient5: 'Pineapple Juice, 2 parts',
  glass: 'Highball glass' 
  },
{ name: 'Autodafé',
  category: 'Ordinary Drink',
  kind: 'Alcoholic',
  image:
   'https://www.thecocktaildb.com/images/media/drink/7dkf0i1487602928.jpg',
  instructions:
   'Mix and fill up with soda water. Drunk by finns on a sunny day any time of the year and day.',
  ingredient1: 'Vodka, 4 cl ',
  ingredient2: 'Lime juice, 1 dash ',
  ingredient3: 'Soda water, \n',
  ingredient4: ', \n',
  ingredient5: ', \n',
  glass: 'Highball glass' 
  },
{ name: 'Balmoral',
  category: 'Ordinary Drink',
  kind: 'Alcoholic',
  image:
   'https://www.thecocktaildb.com/images/media/drink/vysuyq1441206297.jpg',
  instructions:
   'In a mixing glass half-filled with ice cubes, combine all of the ingredients. Stir well. Strain into a cocktail glass.',
  ingredient1: 'Scotch, 1 1/2 oz ',
  ingredient2: 'Sweet Vermouth, 1/2 oz ',
  ingredient3: 'Dry Vermouth, 1/2 oz ',
  ingredient4: 'Bitters, 2 dashes ',
  ingredient5: ',  ',
  glass: 'Cocktail glass' 
  },
{ name: 'Almond Chocolate Coffee',
  category: 'Ordinary Drink',
  kind: 'Alcoholic',
  image:
   'https://www.thecocktaildb.com/images/media/drink/jls02c1493069441.jpg',
  instructions:
   'Pour in order into coffee cup. Top with whipped creme and chocolate shcvings.',
  ingredient1: 'Amaretto, 3/4 oz ',
  ingredient2: 'Dark Creme de Cacao, 1/2 oz ',
  ingredient3: 'Coffee, 8 oz '
}
]

console.log("removing drinks")
db.Drinks.deleteMany({}, function (err) {
  if (err) throw err;

  console.log("inserting drinks");
  db.Drinks.insertMany(drinkseed, function (err, docs) {
    console.log('test');
    if (err) throw err;
    console.log(docs.length + " records inserted!");
    process.exit(0);
  })
});
