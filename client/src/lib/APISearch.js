import axios from "axios";

export default {
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




