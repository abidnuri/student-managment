const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

var { graphqlHTTP } = require('express-graphql');
const graphqlSchema = require("./graphql/schema");
const graphqlResolvers = require("./graphql/resolvers");

const port = process.env.PORT || 8000;

require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/graphql', graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
    graphiql: true
  }));

app.get("/", (req, res, next) => {
    res.send("Hello Bangladesh");
});

app.listen(port);
console.log('Running a GraphQL API server at http://localhost:8000/graphql');