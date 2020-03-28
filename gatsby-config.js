module.exports = {
  siteMetadata: {
    title: `Mind Upgrade`,
    description: `The only thing never changes is changing itself.`,
    author: `RintarouTW`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
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

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },

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
              languageAliases: {},    // Map of custom/unknown language codes to standard/known language codes
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
        remarkPlugins: [require(`remark-math`)],
        gatsbyRemarkPlugins: [
          `gatsby-remark-graphviz`,
          // for Server Side Rendering.
          // {
          //   resolve: `gatsby-remark-katex`,
          //   options: {
          //     trust: true,
          //     strict: false,
          //     delimiters: [
          //       { left: "$$", right: "$$", display: true },
          //       { left: "$", right: "$", display: false },
          //       { left: "\\(", right: "\\)", display: false },
          //       { left: "\\[", right: "\\]", display: true }
          //     ],
          //     macros: {
          //       "\\eqref": "\\href{#1}{}",   // not support yet
          //       "\\label": "\\href{#1}{}",   // not support yet
          //       "\\require": "\\href{#1}{}", // not support yet
          //       "\\tag": "\\href{#1}{}",     // not support yet
          //       "\\hfil": "\\space",         // not support yet
          //       "\\def": "\\gdef", // def only work in local context, make it global
          //       "\\cal": "\\mathcal",
          //       "\\pmatrix": "\\begin{pmatrix}#1\\end{pmatrix}",
          //       "\\cases": "\\begin{cases}#1\\end{cases}",
          //       "\\align": "\\begin{aligned}#1\\end{aligned}",
          //       "\\eqalign": "\\begin{aligned}#1\\end{aligned}",
          //       "\\array": "\\begin{array}#1\\end{array}",
          //       "\\gather": "\\begin{gathered}#1\\end{gathered}",
          //     } //, output: "hml" / "mathml"    
          //   }
          // },
          `gatsby-remark-containers`,
          // {
          //   resolve: `gatsby-remark-vscode`, // gfm must be true to work
          //   // All options are optional. Defaults shown here.
          //   options: {
          //     theme: 'Dark+ (default dark)', // Read on for list of included themes. Also accepts object and function forms.
          //     wrapperClassName: '',   // Additional class put on 'pre' tag. Also accepts function to set the class dynamically.
          //     injectStyles: true,     // Injects (minimal) additional CSS for layout and scrolling
          //     extensions: [],         // Third-party extensions providing additional themes and languages
          //     languageAliases: {},    // Map of custom/unknown language codes to standard/known language codes
          //     replaceColor: x => x,   // Function allowing replacement of a theme color with another. Useful for replacing hex colors with CSS variables.
          //     getLineClassName: ({    // Function allowing dynamic setting of additional class names on individual lines
          //       content,              //   - the string content of the line
          //       index,                //   - the zero-based index of the line within the code fence
          //       language,             //   - the language specified for the code fence
          //       meta                  //   - any options set on the code fence alongside the language (more on this later)
          //     }) => '',
          //     logLevel: 'warn'       // Set to 'info' to debug if something looks wrong
          //   }
          // },

          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              // Class prefix for <pre> tags containing syntax highlighting;
              // defaults to 'language-' (e.g. <pre class="language-js">).
              // If your site loads Prism into the browser at runtime,
              // (e.g. for use with libraries like react-live),
              // you may use this to prevent Prism from re-processing syntax.
              // This is an uncommon use-case though;
              // If you're unsure, it's best to use the default value.
              classPrefix: "language-",
              // This is used to allow setting a language for inline code
              // (i.e. single backticks) by creating a separator.
              // This separator is a string and will do no white-space
              // stripping.
              // A suggested value for English speakers is the non-ascii
              // character '›'.
              inlineCodeMarker: null,
              // This lets you set up language aliases.  For example,
              // setting this to '{ sh: "bash" }' will let you use
              // the language "sh" which will highlight using the
              // bash highlighter.
              aliases: {},
              // This toggles the display of line numbers globally alongside the code.
              // To use it, add the following line in gatsby-browser.js
              // right after importing the prism color scheme:
              //  require("prismjs/plugins/line-numbers/prism-line-numbers.css")
              // Defaults to false.
              // If you wish to only show line numbers on certain code blocks,
              // leave false and use the {numberLines: true} syntax below
              showLineNumbers: false,
              // If setting this to true, the parser won't handle and highlight inline
              // code used in markdown i.e. single backtick code like `this`.
              noInlineHighlight: false,
              // This adds a new language definition to Prism or extend an already
              // existing language definition. More details on this option can be
              // found under the header "Add new language definition or extend an
              // existing language" below.
              languageExtensions: [
                {
                  language: "superscript",
                  extend: "javascript",
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
              // Customize the prompt used in shell output
              // Values below are default
              prompt: {
                user: "root",
                host: "localhost",
                global: false,
              },
              // By default the HTML entities <>&'" are escaped.
              // Add additional HTML escapes by providing a mapping
              // of HTML entities and their escape value IE: { '}': '&#123;' }
              escapeEntities: {},
            },
          },
        ],
      },
    },

    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/templates/typography`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
