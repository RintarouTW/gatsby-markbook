module.exports = {
  siteMetadata: {
    title: `Mind Upgrade`,
    description: `The only thing never changes is changing itself.`,
    author: `RintarouTW`,
  },
  plugins: [

    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: false,
        // Footnotes mode (default: true)
        footnotes: false,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [
          `gatsby-remark-graphviz`,
          `gatsby-remark-mathjax`,
          'gatsby-remark-containers',
          {
            resolve: `gatsby-remark-vscode`, // gfm must be true to work
            // All options are optional. Defaults shown here.
            options: {
              theme: 'Dark+ (default dark)', // Read on for list of included themes. Also accepts object and function forms.
              wrapperClassName: '',   // Additional class put on 'pre' tag. Also accepts function to set the class dynamically.
              injectStyles: true,     // Injects (minimal) additional CSS for layout and scrolling
              extensions: [],         // Third-party extensions providing additional themes and languages
              languageAliases: {
                "!": "javascript",
                "js=!": "javascript",
                "js= !": "javascript",
                "js=": "javascript",
                "javascript=!": "javascript",
                "javascript= !": "javascript",
                "graphviz": ""
              },    // Map of custom/unknown language codes to standard/known language codes
              replaceColor: x => x,   // Function allowing replacement of a theme color with another. Useful for replacing hex colors with CSS variables.
              getLineClassName: ({    // Function allowing dynamic setting of additional class names on individual lines
                content,              //   - the string content of the line
                index,                //   - the zero-based index of the line within the code fence
                language,             //   - the language specified for the code fence
                meta                  //   - any options set on the code fence alongside the language (more on this later)
              }) => '',
              logLevel: 'warn'       // Set to 'info' to debug if something looks wrong
            }
          },
        ],
      },
    },

    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/templates/typography`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        // extensions: [".md", ".mdx"],   // not support both yet
        // CommonMark mode (default: true)
        commonmark: false,
        // Footnotes mode (default: true)
        footnotes: false,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        defaultLayouts: {
          default: require.resolve("./src/components/layout.js"),
        },
        gatsbyRemarkPlugins: [
          `gatsby-remark-graphviz`,
          // `gatsby-remark-mathjax`,
          `gatsby-remark-containers`,
          //   {
          //     resolve: `gatsby-remark-vscode`, // gfm must be true to work
          //     // All options are optional. Defaults shown here.
          //     options: {
          //       theme: 'Dark+ (default dark)', // Read on for list of included themes. Also accepts object and function forms.
          //       wrapperClassName: '',   // Additional class put on 'pre' tag. Also accepts function to set the class dynamically.
          //       injectStyles: true,     // Injects (minimal) additional CSS for layout and scrolling
          //       extensions: [],         // Third-party extensions providing additional themes and languages
          //       languageAliases: {
          //         "!":"javascript",
          //         "js=!":"javascript",
          //         "js= !":"javascript",
          //         "js=":"javascript",
          //         "javascript=!":"javascript",
          //         "javascript= !":"javascript",
          //         "graphviz":""
          //       },    // Map of custom/unknown language codes to standard/known language codes
          //       replaceColor: x => x,   // Function allowing replacement of a theme color with another. Useful for replacing hex colors with CSS variables.
          //       getLineClassName: ({    // Function allowing dynamic setting of additional class names on individual lines
          //         content,              //   - the string content of the line
          //         index,                //   - the zero-based index of the line within the code fence
          //         language,             //   - the language specified for the code fence
          //         meta                  //   - any options set on the code fence alongside the language (more on this later)
          //       }) => '',
          //       logLevel: 'warn'       // Set to 'info' to debug if something looks wrong
          //     }
          //  },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
        ],
      },
    },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mind Upgrade`,
        short_name: `Markbook`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/images/markbook.png`, // This path is relative to the root of the site.
        theme_color_in_head: false, // This will avoid adding theme-color meta tag.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
