const {GraphQLServer} = require('graphql-yoga');
const resolvers = require('./resolvers');
const {prisma} = require('./generated/prisma-client');

const graphqlServer = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: {prisma},
});

graphqlServer.start(() => console.log('Server running at port 4000'));
