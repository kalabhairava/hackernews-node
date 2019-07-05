const {GraphQLServer} = require('graphql-yoga');

const typeDefs = `
  type Query {
    info: String!
  }
`;

const resolvers = {
  Query: {
    info: () => 'This is the API for Hackernews clone',
  },
};

const graphqlServer = new GraphQLServer({
  typeDefs,
  resolvers,
});

graphqlServer.start(() => console.log('Server running at port 4000'));
