import React from "react"
import PropTypes from "prop-types"

/* MathLoader for MathJax */
// const MathLoader = `
// <script>
// MathJax = {
//   loader: {load: ['input/tex-full', 'input/asciimath', 'output/chtml']},
//   tex : {
//     inlineMath: [['$', '$']],
//     displayMath: [['$$', '$$']],
//     processEscapes: true,
//     processRefs: true,
//     processEnvironments: true,
//     require: {
//       allow: {
//         base: true,
//         'all-packages': true
//       },
//       defaultAllow:true
//     }
//   }
// }
// </script>
// <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
// <script type="text/javascript" id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/startup.js"></script>
// `

//<mathloader dangerouslySetInnerHTML={{ __html: MathLoader }} />

const MathLoader = (
  <>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css" integrity="sha384-zB1R0rpPzHqg7Kpt0Aljp8JPLqbXI3bhnPWROx27a9N0Ll6ZP/+DiW/UqRcLbRjq" crossOrigin="anonymous" />
    <script src="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.js" integrity="sha384-y23I5Q6l+B6vatafAwxRu/0oK/79VlbSz7Q9aiSZUvyWYIYsd+qj+o24G5ZU2zJz" crossOrigin="anonymous" />
    <script src="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/contrib/auto-render.min.js" integrity="sha384-kWPLUVMOks5AQFrykwIup5lo0m3iMkkHrD0uJ4H5cjeGihAutqP0yW0J6dpFiVkI" crossOrigin="anonymous" />
    <link href="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/contrib/copy-tex.css" rel="stylesheet" type="text/css" />
    <script src="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/contrib/copy-tex.min.js" integrity="sha384-XhWAe6BtVcvEdS3FFKT7Mcft4HJjPqMQvi5V4YhzH9Qxw497jC13TupOEvjoIPy7" crossOrigin="anonymous" />
    <meta charSet="utf-8" />
    <script defer src="https://www.geogebra.org/apps/deployggb.js"></script>
  </>
);

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {MathLoader}
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes} >
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
