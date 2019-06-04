const mongoose = require("mongoose");
const db = require("../models");

const unirest = require("unirest");

const keys = require("../../keys.js");

// const rapidapi = process.env.RAPIDAPI_ID;


const rapidapi = keys.rapid_api_key;

console.log(keys);


// var action = process.argv[2];

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
  const drinkseed = [];
  var drink = {};

  // unirest.get("https://the-cocktail-db.p.rapidapi.com/filter.php?a=" + category)
  
  unirest.get("https://the-cocktail-db.p.rapidapi.com/filter.php?a=Alcoholic")

    .header("X-RapidAPI-Host", "the-cocktail-db.p.rapidapi.com")
    .header("X-RapidAPI-Key", rapidapi)

    .end(function (result) {

      for (let i = 0; i < result.body.drinks.length; i++) {
        var drinkId = result.body.drinks[i].idDrink;

        unirest.get("https://the-cocktail-db.p.rapidapi.com/lookup.php?i=" + drinkId)

          .header("X-RapidAPI-Host", "the-cocktail-db.p.rapidapi.com")
          .header("X-RapidAPI-Key", rapidapi)

          .end(function (result) {
            // console.log(result.body.drinks);

            var data = result.body.drinks[0];

            drink.name = data.strDrink;
            drink.category = data.strCategory
            drink.kind = data.strAlcoholic;
            drink.image = data.strDrinkThumb;
            drink.instructions = data.strInstructions;
            drink.ingredients_measurements = [data.strIngredient1 + ": " + data.strMeasure1 + ", " + data.strIngredient2 + ": " + data.strMeasure2 + ", " + data.strIngredient3 + ": " + data.strMeasure3 + ", " + data.strIngredient4 + ": " + data.strMeasure4 + ", " + data.strIngredient5 + ": " + data.strMeasure5];
            drink.glass = data.strGlass;

            drinkseed.push(drink);
          })
      }
    });

  // console.log("inserting drinks");
  // db.Drinks.insertMany(drinkseed, function (err, docs) {
  //   console.log('test');
  //   if (err) throw err;
  //   console.log(docs.length + " records inserted!");
  //   process.exit(0);
  // });

  console.log("removing drinks")
  db.Drinks.deleteMany({}, function (err) {
    if (err) throw err;
    console.log(drinkseed);

    console.log("inserting drinks");
    db.Drinks.insertMany(drinkseed, function (err, docs) {
      console.log('test');
      if (err) throw err;
      console.log(docs.length + " records inserted!");
      process.exit(0);
    });
  });
}

apiInput();