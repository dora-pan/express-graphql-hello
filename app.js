const {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
} = require("graphql");

var user = new GraphQLObjectType({
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

graphql(schema, "{ hello { name } }").then((response) => {
  console.log(response);
});
