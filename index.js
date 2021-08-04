const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 8000;
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

app.use('/graphql', graphqlHTTP({
    // schema: schema,
    // rootValue: root,
    // graphiql: true,
}));


app.get("/", (req, res, next) => {
    res.send("Hello Bangladesh");
});

app.listen(port);