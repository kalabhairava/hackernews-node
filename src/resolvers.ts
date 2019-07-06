const links = [
  {
    id: 'link-0',
    description: 'Test description',
    url: 'https://www.google.com',
  },
];

let id = links.length;

const gqlResolvers = {
  Query: {
    info: () => 'This is the API for Hackernews clone',
    feed: () => links,
  },
  Mutation: {
    post: (root, args) => {
      const link = {
        id: `link-${id++}`,
        description: args.description,
        url: args.url,
      };

      links.push(link);

      return link;
    },
    updatePost: (root, args) => {
      const index = links.findIndex(link => link.id === args.id);
      const post = links[index];

      post.description = args.description ? args.description : post.description;
      post.url = args.url ? args.url : post.url;

      return post;
    },
    deletePost: (root, args) => {
      const index = links.findIndex(link => link.id === args.id);
      const res = links.splice(index, 1);
      console.log({res, args});

      if (res.length === 0) {
        return false;
      } else {
        return true;
      }
    },
  },
  Link: {
    id: parent => parent.id,
    description: parent => parent.description,
    url: parent => parent.url,
  },
};

module.exports = gqlResolvers;
