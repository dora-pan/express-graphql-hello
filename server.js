const {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
} = require("graphql");
const express = require("express");
const bodyParser = require("body-parser");
const graphqlHTTP = require("express-graphql");

const user = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString,
    },
  }),
});

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "Query",
    fields: () => ({
      hello: {
        type: user,
        resolve: () => ({
          id: "abc",
          name: "Hello world!",
        }),
      },
    }),
  }),
});

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.use(
  "/ghl",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);
app.listen(7000, () => {
  console.log("Express APIServer ready at http://localhost:7000/ghl...");
});
