const mongoose = require("mongoose");
const db = require("../models");

const unirest = require("unirest");

// const keys = require("../../keys.js");

// const rapidapi = keys.rapid_api_key;

// console.log(keys);

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/drinks"
);

// var category;

// switch (action) {
//   case "alcoholic":
//     category = "Alcoholic";
//     break;
//   case "non-alcoholic":
//     category = "Non+alcoholic";
//     break;
//   case "optional-alcohol":
//     category = "Optional+alcohol";
//     break;
//   default:
//     console.log("Enter valid option")
//     break;
// }

function apiInput() {

  //unirest.get("https://the-cocktail-db.p.rapidapi.com/filter.php?a=" + category)

  unirest.get("https://the-cocktail-db.p.rapidapi.com/filter.php?a=Alcoholic")
    .header("X-RapidAPI-Host", "the-cocktail-db.p.rapidapi.com")
    .header("X-RapidAPI-Key", "83f8abecaemsha4d3f57989ff115p1ece07jsn8848c6a9e34d")
    .end(function (result) {
      console.log("bananna")

      let promises = result.body.drinks.map(drink => {
        return new Promise((resolve, reject) => {
          return unirest.get("https://the-cocktail-db.p.rapidapi.com/lookup.php?i=" + drink.idDrink)
            .header("X-RapidAPI-Host", "the-cocktail-db.p.rapidapi.com")
            .header("X-RapidAPI-Key", "83f8abecaemsha4d3f57989ff115p1ece07jsn8848c6a9e34d")
            .end(function (data) {
              resolve(data);
            });
        });
      });

      Promise.all(promises)
        .then(function (results) {
          let drinkseed = results.map(drink => {
            return {
              name: drink.body.drinks[0].strDrink,
              category: drink.body.drinks[0].strCategory,
              kind: drink.body.drinks[0].strAlcoholic,
              image: drink.body.drinks[0].strDrinkThumb,
              instructions: drink.body.drinks[0].strInstructions || "no instructions",
              ingredients_measurements: [drink.body.drinks[0].strIngredient1 + ": " + drink.body.drinks[0].strMeasure1 + ", " + drink.body.drinks[0].strIngredient2 + ": " + drink.body.drinks[0].strMeasure2 + ", " + drink.body.drinks[0].strIngredient3 + ": " + drink.body.drinks[0].strMeasure3 + ", " + drink.body.drinks[0].strIngredient4 + ": " + drink.body.drinks[0].strMeasure4 + ", " + drink.body.drinks[0].strIngredient5 + ": " + drink.body.drinks[0].strMeasure5],
              glass: drink.body.drinks[0].strGlass
            }
          })

          console.log(drinkseed);

          console.log("removing drinks")
          db.Drinks.deleteMany({}, function (err) {
            if (err) throw err;

            console.log("inserting drinks");
            db.Drinks.insertMany(drinkseed, function (err, docs) {
              console.log('test');
              if (err) throw err;
              console.log(docs.length + " records inserted!");
              process.exit(0);
            });
          });
        });
    });
}

apiInput();

// const mongoose = require("mongoose");
// const db = require("../models");

// const unirest = require("unirest");

// const keys = require("../../keys.js");

// const rapidapi = keys.rapid_api_key;

// mongoose.connect(
//   process.env.MONGODB_URI ||
//   "mongodb://localhost/drinks"
// );

// // var category;

// // switch (action) {
// //   case "alcoholic":
// //     category = "Alcoholic";
// //     break;
// //   case "non-alcoholic":
// //     category = "Non+alcoholic";
// //     break;
// //   case "optional-alcohol":
// //     category = "Optional+alcohol";
// //     break;
// //   default:
// //     console.log("Enter valid option")
// //     break;
// // }

// function apiInput() {
//   const drinkseed = [ {
//     name: 'Blue Hurricane',
//     category: 'Cocktail',
//     kind: 'Alcoholic',
//     image:
//         'https://www.thecocktaildb.com/images/media/drink/nwx02s1515795822.jpg',
//     instructions:
//         'If each part is 1/2 oz then use about 2.5 cups of ice.\r\n\r\nBlend it all together. \r\nDrink it with a big straw if you have one.\r\n\r\n',
//     ingredients_measurements:
//         ['Rum: 4 parts, Dark Rum: 2 parts, Passoa: 1 part, Blue Curacao: 1 part, Sweet and Sour: 6 parts'
//         ],
//     glass: 'Highball glass'
// },
// {
//     name: 'Blue Lagoon',
//     category: 'Ordinary Drink',
//     kind: 'Alcoholic',
//     image:
//         'https://www.thecocktaildb.com/images/media/drink/vak0e51504389504.jpg',
//     instructions:
//         'Pour vodka and curacao over ice in a highball glass. Fill with lemonade, top with the cherry, and serve.',
//     ingredients_measurements:
//         ['Vodka: 1 oz , Blue Curacao: 1 oz , Lemonade: \n, Cherry: \n, : \n'],
//     glass: 'Highball glass'
// }
// ];

//   // unirest.get("https://the-cocktail-db.p.rapidapi.com/filter.php?a=" + category)
  
//   unirest.get("https://the-cocktail-db.p.rapidapi.com/filter.php?a=Alcoholic")

//     .header("X-RapidAPI-Host", "the-cocktail-db.p.rapidapi.com")
//     .header("X-RapidAPI-Key", rapidapi)

//     .end(function (result) {

//       for (let i = 0; i < result.body.drinks.length; i++) {
//         let drinkId = result.body.drinks[i].idDrink;

//         unirest.get("https://the-cocktail-db.p.rapidapi.com/lookup.php?i=" + drinkId)

//           .header("X-RapidAPI-Host", "the-cocktail-db.p.rapidapi.com")
//           .header("X-RapidAPI-Key", rapidapi)

//           .end(function (result) {
//             // console.log(result.body.drinks);
//             var drink = {};

//             var data = result.body.drinks[0];

//             drink.name = data.strDrink;
//             drink.category = data.strCategory
//             drink.kind = data.strAlcoholic;
//             drink.image = data.strDrinkThumb;
//             drink.instructions = data.strInstructions || "no instructions";
//             drink.ingredients_measurements = [data.strIngredient1 + ": " + data.strMeasure1 + ", " + data.strIngredient2 + ": " + data.strMeasure2 + ", " + data.strIngredient3 + ": " + data.strMeasure3 + ", " + data.strIngredient4 + ": " + data.strMeasure4 + ", " + data.strIngredient5 + ": " + data.strMeasure5];
//             drink.glass = data.strGlass;

//             drinkseed.push(drink);
//           })
//       }
//     });

//   // console.log("inserting drinks");
//   // db.Drinks.insertMany(drinkseed, function (err, docs) {
//   //   console.log('test');
//   //   if (err) throw err;
//   //   console.log(docs.length + " records inserted!");
//   //   process.exit(0);
//   // });

//   console.log("removing drinks")
//   db.Drinks.deleteMany({}, function (err) {
//     if (err) throw err;
//     console.log(drinkseed);

//     console.log("inserting drinks");
//     db.Drinks.insertMany(drinkseed, function (err, docs) {
//       console.log('test');
//       if (err) throw err;
//       console.log(docs.length + " records inserted!");
//       process.exit(0);
//     });
//    });
// }

// apiInput();