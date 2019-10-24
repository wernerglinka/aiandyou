// const _ = require("lodash");
const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    // query by different content types: blog, news, page etc...
    // all blog posts are located in src/pages/blogs
    // all other pages are located in src/pages
    return graphql(`
      {
        pages: allMarkdownRemark(
          filter: { fileAbsolutePath: { glob: "**/src/pages/**/*.md" } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                template
                title
              }
            }
          }
        }
      }
    `)
      .then(result => {
        if (result.errors) {
          result.errors.forEach(e => console.error(e.toString()));
          return Promise.reject(result.errors);
        }

        /** ********************************************************************************
         * Pages
         ********************************************************************************* */

        /**
         * Build the site pages
         * Site pages are all page other than
         * - blog posts
         * - news items
         */
        const pages = result.data.pages.edges;

        pages.forEach((edge, index) => {
          const id = edge.node.id;
          const pageID = edge.node.frontmatter.page_id;

          createPage({
            path: edge.node.fields.slug,
            tags: edge.node.frontmatter.tags,
            component: path.resolve(
              `src/layouts/${String(edge.node.frontmatter.template)}.js`
            ),
            context: {
              id,
            },
          });
        });
      })
      .then(resolve());
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
