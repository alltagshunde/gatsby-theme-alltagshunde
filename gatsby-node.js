const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const remark = require('remark');
const remarkHTML = require('remark-html');
const externalLinks = require('remark-external-links')
const smartypants = require('@silvenon/remark-smartypants')
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
        isLandingPage: {
          type: 'Boolean'
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
        headingColorPrimary: {
          type: 'Boolean'
        },
        image: {
          type: 'File'
        },
        caption: {
          type: 'String'
        },
        whatsapp: {
          type: 'String'
        },
        facebook: {
          type: 'String'
        },
        email: {
          type: 'String'
        },
        isColored: {
          type: 'Boolean'
        },
      }
    }),
  ]
  createTypes(typeDefs)
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
      {
        allPagesYaml
        {
          edges {
            node {
              id
              title
              isLandingPage
              parentPage
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
                  headingColorPrimary
                  image {
                      relativePath
                  }
                  caption
                  isBanner
                  button
                  buttonLink
                  whatsapp
                  facebook
                  email
                  isColored
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

  // Create pages.
  const Page = require.resolve(`./src/components/Page/index.jsx`)

  const pages = result.data.allPagesYaml.edges.map(hydratePage)

  pages.forEach((page) => {
    //console.log('PAGE', page.slug, page.buildingBlocks)

    createPage({
      path: page.slug,
      component: Page,
      context: page,
    })

  })
}


const hydratePage = (page, index, pages) => ({
  title: page.node.title,
  slug: getSlug(page, pages),
  buildingBlocks: hydrateBuildingBlocks(page, pages)
})

const getSlug = (page, pages) => {
  if (page.node.isLandingPage) {
    return '/'
  }

  if (page.node.parentPage) {
    const parentPage = pages.find(page2 => page2.node.title === page.node.parentPage)
    if (parentPage) {
      return getSlug(parentPage, pages) + page.node.fields.slug.substr(1)
    }
    console.warn("Parent not found " + page.node.parentPage + " for page " + page.node.title);
  }

  return page.node.fields.slug
}

const hydrateBuildingBlocks = (page, pages) => {
  if (page.node.buildingBlocks) {
    return page.node.buildingBlocks.map(buildingBlock => {
      const text = buildingBlock.text
        ? remark()
          .use(externalLinks)
          .use(smartypants)
          .use(remarkHTML)
          .processSync(buildingBlock.text)
          .toString()
        : undefined

      const buttonLink = buildingBlock.buttonLink
        ? getLink(page, pages, buildingBlock.buttonLink)
        : undefined

      return {
        ...buildingBlock,
        text,
        buttonLink
      }
    })
  }

  return []
}

const getLink = (sourcePage, pages, link) => {
  const linkedPage = pages.find(page => page.node.title === link)
  if (linkedPage) {
    return getSlug(linkedPage, pages)
  }

  console.warn("Linked page not found " + link + " for page " + sourcePage.node.title);

  return undefined
}
