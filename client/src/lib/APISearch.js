import axios from "axios";

export default {
    
    searchByRandom: function () {
        return axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php");
    },

    searchByName: function (name) {
        return axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + name);
    },
    
    searchByKind: function (kind) {
        return axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=" + kind);
    },

    searchByCategory: function (category) {
        return axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=" + category);
    },

    searchByLiquor: function (liquor) {
        return axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + liquor);
    },

    searchByIngredient: function (ingredient) {
        return axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + ingredient);
    },

    searchByGlass: function (glass) {
        return axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=" + glass);
    },

    searchByDrinkId: function (drinkId) {
        return axios.get("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + drinkId)
    }
};




