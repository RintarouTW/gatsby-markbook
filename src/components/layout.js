/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from "react"
import PropTypes from "prop-types"
import Header from "./header"
import { MDXProvider } from "@mdx-js/react"
import { GeoGeBra } from "./geogebra"
import { Style } from "./style"
// import "./layout.css"
import "./custom.css"

const shortcodes = { GeoGeBra, Style }

const Layout = ({ children }) => {

  useEffect(() => {
    // console.log("Layout updated")
    window.renderMathInElement(document.body, {
      delimiters:[
        {left: "$$", right: "$$", display: true},
        {left: "$", right: "$", display: false},
        {left: "\\(", right: "\\)", display: false},
        {left: "\\[", right: "\\]", display: true}
      ], 
      trust: true,
      strict: false,
      macros: {
        "\\eqref":"\\href{#1}{}",   // not support yet
        "\\label":"\\href{#1}{}",   // not support yet
        "\\require":"\\href{#1}{}", // not support yet
        "\\tag":"\\href{#1}{}",     // not support yet
        "\\hfil":"\\space",         // not support yet
        "\\def":"\\gdef", // def only work in local context, make it global
        "\\cal":"\\mathcal",
        "\\pmatrix":"\\begin{pmatrix}#1\\end{pmatrix}",
        "\\cases":"\\begin{cases}#1\\end{cases}",
        "\\align":"\\begin{aligned}#1\\end{aligned}",
        "\\eqalign":"\\begin{aligned}#1\\end{aligned}",
        "\\array":"\\begin{array}#1\\end{array}",
        "\\gather":"\\begin{gathered}#1\\end{gathered}",
      } //, output: "hml" / "mathml"      
    }) 
  })

  return (  
    <>
    <MDXProvider components={shortcodes}>
      <Header />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,          
        }}
      >
        <main>{children}</main>
        <hr />
        <footer>
          © {new Date().getFullYear()}
        </footer>
      </div>
      </MDXProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
