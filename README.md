# Futurm-Est-Nostrum

## Link
<a href="#" target="_blank">Click here to go to our app!</a>

## Synopsis
As a group of inspiring web developers it can be difficult to set yourself apart when you are first searching for a job. We wanted to create an app that can showcase the skills we have learned over the course of our Bootcamp, is also a professional looking website and that can be useful for web developers to use!

#### Table of Contents
1. [How to Start](#Getting-Started)
2. [Recommendations](#Recommendations)
3. [Contributors](#Contributors)
4. [Built With](#Built-With)
5. [Photos](#Photos)
6. [Difficulties & Solutions](#Difficulties-and-Solutions)
7. [For the Future](#For-the-Future)
8. [License](#License)

## Getting Started
Once the user comes to our homepage they will be able to navigate to the sign in page. If they are an existing user they can re-sign in, or at the bottom of the form the user can create a log in with an email and password. 

After a user has logged in they will navigate to the studio page where the user will be prompted to fill in information which will be populated onto the business cards. 

Once the user chooses a template they like they will be navigated to a page where they can print out their business cards. 

## Recommendations
We advise before you print your business cards that you use a good quality card stock in the printer to ensure the best looking business card.

The website input is what is going to be linked to the QR code so your business card can be scanned. It is best in your browser window to go to the website you wish to enter and copy the URL in the URL line and paste it into the form where it says Website.

On the form that populates your business card on the website input section it would be best to either add in your Github profile page, LinkedIn Profile, your deployed portfolio page, or your most impressive App you have worked on.

When you get to the PRINT screen you may need to check a box in the more options menu and add in background graphics so the whole card renders.

## Contributors 
* **Gabriel Mangum's** - [GitHub](https://github.com/GabrielTMangum)
* **Jean Tubay's** - [GitHub](https://github.com/jtubay)
* **John Parker Hodges'** - [GitHub](https://github.com/JohnParkerHodges)
* **Michael Trpak's** - [GitHub](https://github.com/mrtrpak)

## Built With
* [Axios](https://www.axios.com/)
* [Gravatar](https://github.com/KyleAMathews/react-gravatar)
* [Heroku](https://dashboard.heroku.com/)
* [MDB](https://mdbootstrap.com/)
* [MySQL](https://www.mysql.com/)
* [QR Code](http://goqr.me/)
* [React](https://reactjs.org/)
* [React-Router-Dom](https://www.npmjs.com/package/react-router-dom)

## Photos

### Homepage
![Homepage](/client/public/photos/homepage.png)
### Sign In Page
![Sign in](/client/public/photos/signin.png)
### Sign Up Page
![Sign up](/client/public/photos/signup.png)
### User Dashboard
![User dash](/client/public/photos/userdash.png)
### Card Form Page
![Card form](/client/public/photos/cardform.png)
### Choose Template Page
![Template page](/client/public/photos/templatescreen.png)
### Card Preview Page
![Preview page](/client/public/photos/preview.png)
### Print Screen Page
![Print Page](/client/public/photos/printscreen.png)

## Difficulties and Solutions
As with any project there are always going to be difficulties that arise. We wanted to generate a QR Code that the user could link to a website of their choice. We found a 3rd party API that we can generate a QR Code with. The next issue we had with it is we needed to encode the URL so that it would talk with the API properly. There is a handle function with Javascript (encodeURIComponent()) that handled that for us.

We wanted to have two separate forms between the user sign in and the info form which populates the business cards so the user can login and create many business cards all with different information on them. With that we needed the two to talk to each other so the information is linked. We used associations in MySql to join them with the user Id so that one user can have multiple form card entries.

One major time suck in this App was creating the cards. We strived to have four unique business card templates for which the user can choose from. To accomplish this we needed to create a small and large version of each template and also 4 dummy cards which can be viewed from our homepage. With using components in React it made it easier to handle the boilerplate of the cards, but it still look a lot of trial and error to get the styling to look better on the cards.

## For the Future
In the future we would love to add a feature where once they choose a template and go to the print page screen that it also downloads a pdf file of it so they can save and store their business cards for later and print it when it is convenient for them.

We would like to implement a save card feature where they can view all of their created cards in their user dashboard so they can scroll through all of their different cards. 

At the beginning of the project we contemplated using a drag and drop feature to edit your business cards. It would be a nice fancy feature to have in the app if we could find a way to use drag and drop within our App.

## License
This project is not under license