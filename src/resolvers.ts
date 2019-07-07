const gqlResolvers = {
  Query: {
    info: () => 'This is the API for Hackernews clone',
    feed: (root, args, context) => context.prisma.links(),
  },
  Mutation: {
    createLink: (root, args, context) =>
      context.prisma.createLink({
        url: args.url,
        description: args.description,
      }),

    updateLink: async (root, args, context) => {
      const link = await context.prisma.link({id: args.id});

      const data = {
        description: args.description ? args.description : link.description,
        url: args.url ? args.url : link.url,
      };

      const rest = await context.prisma.updateLink(data, {id: args.id});
      console.log(rest);
    },

    deleteLink: (root, args, context) =>
      context.prisma.deleteLink({id: args.id}),
  },
};

module.exports = gqlResolvers;
