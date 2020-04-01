const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const remark = require('remark');
const remarkHTML = require('remark-html');
const fs = require("fs")

// Make sure the data directory exists
exports.onPreBootstrap = ({ reporter }, options) => {
  const contentPath = options.contentPath || "content"
  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`)
    fs.mkdirSync(contentPath)
  }

  const adminConfigFile = require.resolve('./static/admin/config.yml')
  const adminPath = 'public/admin'
  if (!fs.existsSync(adminPath)) {
    reporter.info(`creating the ${adminPath} directory`)
    fs.mkdirSync(adminPath, { recursive: true })
  }
  fs.copyFileSync(adminConfigFile, `${adminPath}/config.yml`)
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type.indexOf('Yaml') > -1) {
    if (node.internal.type === 'SiteYaml') {
      const value = Object.keys(node)[0]

      createNodeField({
        name: `typ`,
        node,
        value,
      })
    }

    if (node.internal.type === `PagesYaml`) {
      const value = createFilePath({ node, getNode, basePath: 'pages/' })
      createNodeField({
        name: `slug`,
        node,
        value,
      })
    }

    //console.log(node)
  }

}

exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions
  const typeDefs = [
    /*`
      type PagesYamlBuildingBlocks implements Node {
        heading: String
        text: String
        image: File
        caption: String
      }
    `,*/
    `
      type PagesYamlFields {
        slug: String
      }
    `,
    `
      type SiteYamlLink {
        title: String
      }
    `,
    schema.buildObjectType({
      name: "PagesYaml",
      fields: {
        title: {
          type: "String",
        },
        fields: {
          type: "PagesYamlFields",
        },
        buildingBlocks: {
          type: "[PagesYamlBuildingBlocks]",
          resolve(source, args, context, info) {
            const buildingBlocks = context.defaultFieldResolver(source, args, context, info)

            if (args && args.hasOwnProperty('index')) {
              return [buildingBlocks[args.index]]
            }

            return buildingBlocks
          },
          args: {
            index: 'Int'
          }
        },
      },
      interfaces: ["Node"],
    }),
    schema.buildObjectType({
      name: "PagesYamlBuildingBlocks",
      fields: {
        index: {
          type: "Int!",
          resolve(source, args, context, info) {
            return info.path.prev.key
          }
        },
        type: {
          type: 'String!'
        },
        width: {
          type: 'String'
        },
        innerWidth: {
          type: 'String'
        },
        heading: {
          type: 'String'
        },
        text: {
          type: 'String'
        },
        headingLevel: {
          type: 'String'
        },
        headingSize: {
          type: 'String'
        },
        headingCentered: {
          type: 'Boolean'
        },
        image: {
          type: 'File'
        },
        caption: {
          type: 'String'
        },
      }
    }),
  ]
  createTypes(typeDefs)
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const Page = require.resolve(`./src/components/Page/index.jsx`)
  const result = await graphql(`
      {
        allPagesYaml
        {
          edges {
            node {
              id
              title
              fields {
                slug
              }
              buildingBlocks {
                  index
                  type
                  width
                  innerWidth
                  heading
                  text
                  headingLevel
                  headingSize
                  headingCentered
                  image {
                      relativePath
                  }
                  caption
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const pages = result.data.allPagesYaml.edges

  pages.forEach((page, index) => {
    //console.log('PAGE', page.node.buildingBlocks)

    if (page.node.buildingBlocks) {
      page.node.buildingBlocks.forEach(buildingBlock => {
        if (buildingBlock.text) {
          const html = remark()
            .use(remarkHTML)
            .processSync(buildingBlock.text)
            .toString();
          buildingBlock.text = html;
        }
      })
    }

    if (index === 0) {
      const slug = '/'
      createPage({
        path: slug,
        component: Page,
        context: {
          title: page.node.title,
          slug: slug,
          buildingBlocks: page.node.buildingBlocks
        },
      })
    }

    createPage({
      path: page.node.fields.slug,
      component: Page,
      context: {
        title: page.node.title,
        slug: page.node.fields.slug,
        buildingBlocks: page.node.buildingBlocks
      },
    })
  })
}
