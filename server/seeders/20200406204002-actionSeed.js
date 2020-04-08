"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    // Add altering commands here.
    // Return a promise to correctly handle asynchronicity.

    // Example:
    return queryInterface.bulkInsert(
      "Actions",
      [
        {
          category: "Food",
          name: "Composting Food Waste",
          description:
            "Organic waste, that would otherwise be placed in the garbage, can be reduced by upwards of 80%.  This can reduce the average individuals amount of yearly waste by 277 pounds.",
          points: 50,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Food",
          name: "Buy foodstuffs in bulk",
          description: "When possible using your own reusable container.",
          points: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Food",
          name: "Reduce your food waste",
          description:
            "Plan meals ahead of time, freezing the excess and reusing leftovers.",
          points: 50,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Food",
          name: "Eat Local (and Organic)",
          description:
            "Sticking to foods that are grown locally, in your own city or surrounding area, helps to reduce the carbon footprint created by shipping foods from elsewhere.",
          points: 30,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Food",
          name: "Eat Less Meat",
          description:
            "Greenhouse gas emissions from agribusiness are an even bigger problem than fossil fuels. Red meat is particularly to blame, consuming 11 times more water and producing 5 times more emissions than its poultry counterparts.",
          points: 30,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Travel",
          name: "Regularly Biking to Work/School",
          description:
            "More than 100 gallons of gasoline can be saved every year by the average commuter choosing to ride their bike to work.",
          points: 60,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Travel",
          name: "Buying an electric vehicle",
          description:
            "If you must drive, an electric vehicle can typically double the mpg over traditional gas vehicles.",
          points: 150,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Travel",
          name: "Avoid unnecessary braking and acceleration",
          description:
            "Some studies found that aggressive driving can result in 40 percent more fuel consumption than consistent, calm driving.",
          points: 60,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Travel",
          name: "Take care of your car",
          description:
            "Keeping your tires properly inflated can increase your fuel efficiency by three percent; and ensuring that your car is properly maintained can increase it by four percent. Remove any extra weight from the car.",
          points: 150,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Travel",
          name: "Avoid flying if possible",
          description:
            "On shorter trips, driving may emit fewer greenhouse gases.",
          points: 60,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Travel",
          name: "Fly nonstop",
          description:
            "Landings and takeoffs use more fuel and produce more emissions.",
          points: 150,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Travel",
          name: "Go economy class",
          description:
            "Business class is responsible for almost three times as many emissions as economy because in economy, the flight’s carbon emissions are shared among more passengers; first class can result in nine times more carbon emissions than economy.",
          points: 150,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Home",
          name: "Use of LED bulbs",
          description:
            "Replacing one incandescent bulb with an LED bulb can reduce a home's greenhouse gas emissions by half a ton.",
          points: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Home",
          name: "Unplug Your Devices",
          description:
            "In the U.S. alone, “vampire power” is responsible for draining up to $19 billion in energy every year.",
          points: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Home",
          name: "Plant a garden",
          description:
            "Whether you live in a house or an apartment, planting some greens is a quick and easy way to reduce your carbon footprint. We all know plants absorb carbon dioxide – a beneficial relationship for humans, that we should all be seeking to nurture.",
          points: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Home",
          name: "Line-Dry Your Clothes",
          description:
            "One dryer load uses 5 times more electricity than washing – by simply line-drying your clothes, you can save 1/3 of their carbon footprint.",
          points: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Home",
          name: "Wash your clothing in cold water",
          description:
            "The enzymes in cold water detergent are designed to clean better in cold water. Doing two loads of laundry weekly in cold water instead of hot or warm water can save up to 500 pounds of carbon dioxide each year.",
          points: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Home",
          name: "Do an energy audit of your home",
          description:
            "This will show how you use or waste energy and help identify ways to be more energy efficient.",
          points: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Home",
          name: "Switch lights off when you leave the room",
          description:
            "If you are that afraid of the dark when leaving a room, a small night light will use less energy.",
          points: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Home",
          name: "Turn your water heater down to 120˚F",
          description: "This can save about 550 pounds of CO2 a year.",
          points: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Home",
          name: "Installing a low-flow showerhead",
          description:
            "Reducing hot water use can save 350 pounds of CO2. Taking shorter showers helps, too.",
          points: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Home",
          name: "Lower your thermostat in winter and raise it in summer",
          description:
            "Use less air conditioning in the summer; instead opt for fans, which require less electricity.",
          points: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Consumable Items",
          name: "Buying Clothing from Thrift Stores",
          description:
            "The average pair of jeans takes 1,800 gallons of water to produce. By wearing gently used clothing, the intesive process of producing textiles is, on the whole, reduced.",
          points: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Consumable Items",
          name: "Don’t Buy “Fast Fashion”",
          description:
            "Heaps and heaps of clothing ends up in the landfill, often to justify buying the latest styles. We’re talking over 15 million tons of textile waste – with quantity over quality, fast fashion retailers can charge next to nothing for items that are mass-produced. ",
          points: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Consumable Items",
          name: "Using a reusable water bottle",
          description:
            "It's estimated that around 80% of the plastic water bottles purchased by Americans end up in landfills. That's about 60 million bottles that are tossed out every day.",
          points: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Consumable Items",
          name: "Recycling soda or water bottles",
          description:
            "Although approximately 800,000 tons of plastic bottles were recycled in 2011, more than twice as much was trashed or littered alongside roadways and in water supplies.",
          points: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Consumable Items",
          name: "Buy less stuff",
          description: "And buy used or recycled items whenever possible.",
          points: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Consumable Items",
          name: "Reusable bag",
          description: "Bring your own bags when shopping",
          points: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Consumable Items",
          name: "Opt for a laptop instead of a desktop",
          description:
            "Laptops require less energy to charge and operate than desktops.",
          points: 40,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Consumable Items",
          name: "Look for Energy Star products",
          description:
            " If shopping for appliances, lighting, office equipment or electronics, look for Energy Star products, which are certified to be more energy efficient.",
          points: 40,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    // Add reverting commands here.
    // Return a promise to correctly handle asynchronicity.

    // Example:
    return queryInterface.bulkDelete("Actions", null, {});
  },
};
