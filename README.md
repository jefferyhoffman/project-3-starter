# Project 3 Starter

## Getting Started

1. Fork this repo on GitHub:

2. Rename your fork:

3. Clone your fork to your computer:

4. Copy `.env.sample` to `.env` and modify it:
   ```bash
   $ cp .env.sample .env
   $ code .env
   ```

5. Launch the client and server in development mode:
   ```bash
   $ yarn start:dev
   ```

## Organization

First, let's look at how things are organized.

```
.
├── client
└── server
```

At the top level, everything is divided into two folders. The `client` folder contains the React client, while the `server` folder contains the Express server.

In the root folder, you'll also notice `.gitignore` and `package.json`. The former ignores `node_modules` folders project-wide, while the latter contains scripts for development and deployment.

### client

The `client` folder is organized as follows:

```
client
├── public
└── src
    ├── components
    │   ├── App
    │   ├── AuthDropdown
    │   ├── LoginForm
    │   ├── Navigation
    │   └── PrivateRoute
    ├── contexts
    ├── lib
    └── pages
        ├── Home
        ├── Login
        ├── NotFound
        └── Secret
```

#### client/public

The `public` folder contains the one-and-only HTML file used on the client: `index.html`. The only modification I made from the default is to add a link to the Bootstrap CDN.

#### client/src

The `src` folder contains all the JavaScript code, organized into `components`, `contexts`, `lib`, and `pages`.

#### client/src/components

Inside the `components` folder you'll find most of the React components used on the client:

The `App` component is the "root" of the component tree. All other components (including those in the `pages` folder, see below) are children of `App`. This component also manages user authentication state, and provides the `AuthContext` context allowing child components to easily access authentication state.

Used in the navigation bar, `AuthDropdown` displays the currently logged in user (or a link to login/register) and allows them to logout. It consumes the `AuthContext` provided by `App` to access authentication state.

The `LoginForm` component is used on the `Login` page. It has no state, and is used to collect the user's email/password for authentication.

Then we have the `Navigation` component, which is used at the top of the page to provide--you guessed it--navigation. As discussed above, it delegates to the `AuthDropdown` component to manage authentication.

Lastly, we have the `PrivateRoute` component. Never seen by the user, this is a high-order component that protects private routes from being accessed by logged-out users. It's used in `App` to designate any routes that should not be publicly accessible, and consumes `AuthContext` to know whether or not it should redirect.

#### client/src/contexts

`AuthContext` provides authentication state and functions to modify that state. This is used by the `App` component to pass authentication data to its children without prop-drilling. Any child component may consume this data as follows:

```javascript
import AuthContext from '../../contexts/AuthContext';

const MyStatelessChildWithAuth = props => (
  <AuthContext.Consumer>
    {({ authToken, user, onLogin, onLogout }) => (
      <div>{user.email}</div>
    )}
  </AuthContext.Consumer>
);

class MyStatefulChildWithAuth extends React.Component {
  static contextType = AuthContext;

  componentDidMount() {
    API.someCall(this.context.authToken)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>{this.context.user.email}</div>
    );
  }
}
```

#### client/src/lib

The `API` module wraps all axios calls to the express server, providing one convenient place to look for anything API-related. 

As you build out your app's features and add more API routes to your server, you will add corresponding client-side code in `client/src/lib/API.js`. For every API route on your server, there should be a function in this module that hits the route and returns the result.

#### client/src/pages

This is a personal preference, but I like to organize my "page" components into their own folder. These are the top-level components rendered by React Router when the user goes to a specific URL. Doing this separates "components" (which are intended to be reused) from pages (which generally aren't.)

### Server

The `server` folder is organized as follows:

```
server
├── controllers
│   └── api
├── lib
└── models
```

#### server/controllers/api

Since React Router is handling all of our client-side routing, the only server routes we need to worry about are for our API. In this folder, you'll find those routes.

Divided into controllers, one for each model, they are all loaded into Express via `server/controllers/api/index.js`. If you add a controller, make sure to import and register its URL-stub there.

Inside each controller, you'll see the routes to get, create, update and delete one kind of model:

- `usersController` has routes to register, login, and get the currently authenticated user.
- `secretsController` has one route to get an array of Secrets (a dummy model I created to demonstrate protected data.)

Each time you create a new model, remember to create a new controller for its API routes. And remember to import and use it in `index.js`.

#### server/lib

This folder holds modules that don't belong anywhere else in the MVC structure. Currently, that's only one file: `passport.js`.

Passport is used for user authentication, and for protecting API routes against unauthorized access. In `server/lib/passport.js`, you'll find the primary Passport configuration for the server.

Importantly, the logic that verifies each user's authentication token resides here. Depending on which database you end up storing your users in, you'll want to customize this logic to query the correct user data.

#### server/models

In the `master` branch, these models are just simple JS mocks that return hard-coded data. They are there to act as placeholders for a real database. See the `sequelize` or `mongoose` branches for Sequelize and Mongoose implementations, respectively.

## Scripts

### client

### server

## Deployment
