const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// allow cross-origin requests
app.use(cors());

// connecting to db
mongoose
  .connect(
    'mongodb://localhost:27017/gql-ninja?readPreference=primary&appname=MongoDB%20Compass&ssl=false',
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log('DB Connected'))
  .catch((err) => {
    console.log(err);
  });


// using graphql with schema, allowing graphiql for testing queries
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log('Now listening for request on port 4000');
});
