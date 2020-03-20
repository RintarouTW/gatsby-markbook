/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
// import {_react} from "react"
// var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
// var _react = _interopRequireDefault(require("react"));
// const { Helmet } = require("react-helmet")

// import LatexMathJax from "./src/components/mathjax"
// import Layout from "./src/components/layout"

// export const onPreRenderHTML = ({getHeadComponents, replaceHeadComponents}) => {
  // let headComponents = getHeadComponents();
  // console.log(headComponents);
// }

// export const onRenderBody = (
  // { setHeadComponents, setHtmlAttributes, setBodyAttributes },
  // pluginOptions
// ) => {
  // let headComponents = []
  // headComponents.push(_react.default.createElement("script", {
  //   type: "text/javascript",
  //   value: `  MathJax = {
  //     loader: {load: ['input/asciimath', 'output/chtml']}
  //   }
  // `
  // }))
  
  // headComponents.push(_react.default.createElement("script", {
  //   type: "text/javascript",
  //   src: "https://polyfill.io/v3/polyfill.min.js?features=es6"
  // }))
  // headComponents.push(_react.default.createElement("script", {
  //   type: "text/javascript",
  //   src: "https://cdn.jsdelivr.net/npm/mathjax@3.0.0/es5/tex-mml-chtml.js"
  // }))

  // setHeadComponents(headComponents)

  //  const helmet = Helmet.renderStatic()
  //  console.log("============================")
  //  console.log(helmet.script.toString());
  //  console.log(helmet.title);
  //  console.log(helmet.script.toComponent());
  //  console.log("888888888888888")
//   console.log(helmet.script.toString());
//   setHtmlAttributes(helmet.htmlAttributes.toComponent())
//   setBodyAttributes(helmet.bodyAttributes.toComponent())
//   setHeadComponents([
//     helmet.title.toComponent(),
//     helmet.link.toComponent(),
//     helmet.meta.toComponent(),
//     helmet.noscript.toComponent(),
//     helmet.script.toComponent(),
//     helmet.style.toComponent(),
//   ])
// }

// console.log("SSSSRRRRRR")

// Wraps every page in a component
// const wrapPageElement = ({ element, props }) => {
//   console.log("wrapPageElement")
//   console.log(element, props)
//   return <LatexMathJax><Layout {...props}>{element}</Layout></LatexMathJax>
// }

// export {onPreRenderHTML, wrapPageElement}