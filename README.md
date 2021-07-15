# graphql_booklist

Application build to show simple usage of GraphQL - built with React(Frontend) and NodeJS(Backend)

![screenshot](./client/public/assets/screenshots/book_list.png)

## Description

This application is used to show and practice simple usage of GraphQL on your local machine. You can add books to the local database via GraphQL, or to delete one you don't want to see here

## Application setup

Clone project

```
git clone https://github.com/kovar95/graphql_booklist.git
```

To install all dependencies go to `/server`, and  run

```
npm install
```

Then go to `/client`, and again run

```
npm install
```

To run on your local machine,  simply execute from `/client` and `/server` folders:
From `/client`

```
npm run start
```

From `/server`

```
node app.js
```
or if have nodemon installed, then run instead

```
nodemon app
```


The **Front End** will be available at `localhost:3000`, and the **Backend** API, at `localhost:4000/graphql`

## Frontend

The Frontend uses:

- React
- Hooks
- Apollo Clent
- Css styling

To start only frontend, just run in `/client`:

```
npm run start
```

the application will be available at port `3000` on `localhost`.

to build run 
```
npm run build
```

## NodeJS Backend

The NodeJS Backend uses

- Node
- ExpressJS
- GraphQL
- Mongoose

Your API is running at `localhost:4000`. You can access it via `/graphql` 


Start the API by running in `/server` folder

```
npm run server
```
Prerequisites:
Must have installed the lastet version of React, Node and Nodemon.
Must set up MongoDB databes locally or via MongoDB Atlas online:
  - when connecting to DB you shoud change parameters according to your database and collections
  - 'mongodb://localhost:27017/<YOUR_COLLECTION>?readPreference=primary&appname=MongoDB%20Compass&ssl=false'
  - you sholud change <YOUR_COLLECTION> parameter



