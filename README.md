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
   $ yarn start
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

#### /client/public

The `public` folder contains the one-and-only HTML file used on the client: `index.html`. The only modification I made from the default is to add a link to the Bootstrap CDN.

#### /client/src

The `src` folder contains all the JavaScript code, organized into `components`, `contexts`, `lib`, and `pages`.

#### /client/src/components

Inside the `components` folder you'll find most of the React components used on the client:

The `App` component is the "root" of the component tree. All other components (including those in the `pages` folder, see below) are children of `App`. This component also manages user authentication state, and provides the `AuthContext` context allowing child components to easily access authentication state.

Used in the navigation bar, `AuthDropdown` displays the currently logged in user (or a link to login/register) and allows them to logout. It consumes the `AuthContext` provided by `App` to access authentication state.

The `LoginForm` component is used on the `Login` page. It has no state, and is used to collect the user's email/password for authentication.

Then we have the `Navigation` component, which is used at the top of the page to provide--you guessed it--navigation. As discussed above, it delegates to the `AuthDropdown` component to manage authentication.

Lastly, we have the `PrivateRoute` component. Never seen by the user, this is a high-order component that protects private routes from being accessed by logged-out users. It's used in `App` to designate any routes that should not be publicly accessible, and consumes `AuthContext` to know whether or not it should redirect.

#### /client/src/contexts

Mentioned above, contexts are a great way to "pass down" values in 

#### /client/src/lib

#### /client/src/pages

### Server

#### /server/controllers

#### /server/lib

#### /server/models

## Scripts

## Deployment
