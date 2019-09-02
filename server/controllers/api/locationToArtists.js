const axios = require("axios");
const wiki = require('wikijs').default;

const daddyArray = []
let arrayOfCategories = []

wiki().pagesInCategory("Category:American musicians by city")
    .then((result) => {
        const places = []
        const arrayOfTimPromises = []
        const places2 = ["Florence, Alabama", "Gary, Indiana", "Glendale, California", "Hartford, Connecticut", "Hoboken, New Jersey"]
        result.forEach(category => {
            let test = category.split(" from ")
            places.push(test[1])
        });
        places.shift()
        places.shift()
        places.shift()
        for (let i = 0; i < 5; i++) {
            arrayOfTimPromises.push(getArrayOfArtists("Musicians", places2[i]))
        }
        // Promise.all(arrayOfTimPromises).then(function(e){console.log(e)})
        // getArrayOfArtists("Musicians", places2[0]).then(function(e){console.log(e)})
    })
    .catch((error) => { console.log("wiki:" + error) })

const getArrayOfArtists = (searchType, location) => {
    return new Promise((resolve, reject) => {
    const arrayOfArtists = []
    const url = `https://en.wikipedia.org/w/api.php?action=query&list=categorymembers&cmtitle=Category:${searchType}_from_${location}&cmlimit=500&format=json`;
    axios.get(url).then(
        function (response) {
            pushThisPageArtists(response, arrayOfArtists)
            if (response.data.query.categorymembers[response.data.query.categorymembers.length - 1].title.includes(":")) {
                getAdditionalCategories(response)
            }
            if (arrayOfCategories[0]) {
                recursive(location)
            } else {
                arrayOfCategories.length = 0
                const obj = {
                    name: location,
                    array: []
                }
                obj.array = arrayOfArtists
                daddyArray.push(obj)
                console.log("----------------------------------------------------")
                console.log(daddyArray)
                resolve(obj)
            }
        })
        .catch(function (error) {
            if (error.response) {
                console.log("---------------Data---------------");
                console.log(error.response.data);
                console.log("---------------Status---------------");
                console.log(error.response.status);
                console.log("---------------Status---------------");
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log("Error", error.message);
            }
            console.log(error.config);
        });
    })
};

const pushThisPageArtists = (response, arrayOfArtists) => {
    for (let i = 0; i < response.data.query.categorymembers.length; i++) {
        if (response.data.query.categorymembers[i].title.split(":")[0] === "Category") {
        } else {
            if (response.data.query.categorymembers[i].title.split("(")) {
                arrayOfArtists.push(response.data.query.categorymembers[i].title.split("(")[0].trim())
            } else {
                arrayOfArtists.push(response.data.query.categorymembers[i].title)
            }
        }
    }
    return arrayOfArtists
};

const getAdditionalCategories = (response) => {
    let lastEntry1 = response.data.query.categorymembers[response.data.query.categorymembers.length - 1].title
    let lastEntry2 = response.data.query.categorymembers[response.data.query.categorymembers.length - 2].title
    let lastEntry3 = response.data.query.categorymembers[response.data.query.categorymembers.length - 3].title
    let lastEntry4 = response.data.query.categorymembers[response.data.query.categorymembers.length - 4].title
    if (lastEntry1.split(":")[0] === "Category") {
        // console.log("lastEntry1 split is a Category")
        arrayOfCategories.push(lastEntry1.split(":")[1].split("from")[0].trim())
        // console.log("lastEntry1 split is pushed")
        if (lastEntry2.includes(":")) {
            // console.log("lastEntry2 includes :")
            if (lastEntry2.split(":")[0] === "Category") {
                // console.log("lastEntry2 split is a Category")
                arrayOfCategories.push(lastEntry2.split(":")[1].split("from")[0].trim())
                // console.log("lastEntry2 split is pushed")
                if (lastEntry3.includes(":")) {
                    // console.log("lastEntry3 includes :")
                    if (lastEntry3.split(":")[0] === "Category") {
                        // console.log("lastEntry3 split is a Category")
                        arrayOfCategories.push(lastEntry3.split(":")[1].split("from")[0].trim())
                        // console.log("lastEntry3 split is pushed")
                        if (lastEntry4.includes(":")) {
                            // console.log("lastEntry4 includes :")
                            if (lastEntry4.split(":")[0] === "Category") {
                                // console.log("lastEntry4 split is a Category")
                                arrayOfCategories.push(lastEntry4.split(":")[1].split("from")[0].trim())
                                // console.log("lastEntry4 split is pushed")
                            }
                        }
                    }
                }
            }
        }
    }
}

const recursive = (location) => {
    let newSearchType = arrayOfCategories[0]
    arrayOfCategories.shift();
    let newLocation = location
    getArrayOfArtists(newSearchType, newLocation)

}