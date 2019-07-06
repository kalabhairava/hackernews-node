const {GraphQLServer} = require('graphql-yoga');
const resolvers = require('./resolvers');

const graphqlServer = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
});

graphqlServer.start(() => console.log('Server running at port 4000'));
