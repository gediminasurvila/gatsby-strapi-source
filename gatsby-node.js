const { createRemoteFileNode } = require(`gatsby-source-filesystem`);
const slugify = require("slugify");
const api = "https://gerapatirtis.survila.art";

exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allStrapiPost {
        nodes {
          Title
          id
        }
      }
    }
  `);
  data.allStrapiPost.nodes.forEach(node => {
    const slug = slugify(node.Title, {
      replacement: "-", // replace spaces with replacement character, defaults to `-`
      lower: true, // convert to lower case, defaults to `false`
      strict: false, // strip special characters except replacement, defaults to `false`
      trim: true, // trim leading and trailing replacement chars, defaults to `true`
    });
    actions.createPage({
      path: `istorijos/${slug}`,
      component: require.resolve(`./src/templates/blog-post.js`),
      context: { id: node.id },
    });
  });
};

// called each time a node is created
exports.onCreateNode = async ({
  node, // the node that was just created
  actions: { createNode },
  createNodeId,
  getCache,
}) => {
  if (["StrapiPost"].includes(node.internal.type)) {
    if (!node.CoverImage?.url) return;
    const fileNode = await createRemoteFileNode({
      // the url of the remote image to generate a node for
      url: api + node.CoverImage.url,
      parentNodeId: node.id,
      createNode,
      createNodeId,
      getCache,
    });

    if (fileNode) {
      node.remoteImage___NODE = fileNode.id;
    }
  }
};
