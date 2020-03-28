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
import GeoGeBra from "./geogebra"
// import "./layout.css"

const shortcodes = { GeoGeBra }

const Layout = ({ children }) => {

  useEffect(() => {

    const options = {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false },
        { left: "\\(", right: "\\)", display: false },
        { left: "\\[", right: "\\]", display: true }
      ],
      trust: true,
      strict: "ignore",
      macros: {
        "\\eqref": "\\href{#1}{}",   // not support yet
        "\\label": "\\href{#1}{}",   // not support yet
        "\\require": "\\href{#1}{}", // not support yet
        "\\tag": "\\href{#1}{}",     // not support yet
        "\\hfil": "\\space",         // not support yet
        "\\style": "\\href{#1}{}",   // not support yet
        "\\def": "\\gdef", // def only work in local context, make it global
        "\\cal": "\\mathcal",
        "\\pmatrix": "\\begin{pmatrix}#1\\end{pmatrix}",
        "\\cases": "\\begin{cases}#1\\end{cases}",
        "\\align": "\\begin{aligned}#1\\end{aligned}",
        "\\eqalign": "\\begin{aligned}#1\\end{aligned}",
        "\\array": "\\begin{array}#1\\end{array}",
        "\\gather": "\\begin{gathered}#1\\end{gathered}",
      } //, output: "hml" / "mathml"      
    }

    let inlineMathElements = document.querySelectorAll(".math-inline")
    let displayMathElements = document.querySelectorAll(".math-display")

    if (!inlineMathElements.length && !displayMathElements.length) {
      // only render the document which contains no math-inline and math-display elements
      window.renderMathInElement(document.body, options)

    } else {

      inlineMathElements.forEach(e => {
        // if it's rendered, don't render it again.
        if (!e.firstElementChild || e.firstElementChild.tagName !== "SPAN") {
          options.displayMode = false
          window.katex.render(e.textContent, e, options)
        }
      })

      displayMathElements.forEach(e => {
        // if it's rendered, don't render it again.
        if (!e.firstElementChild || e.firstElementChild.tagName !== "DIV") {
          options.displayMode = true
          window.katex.render(e.textContent, e, options)
        }
      })
    }

  })

  return (
    <>
      <Header />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <MDXProvider components={shortcodes}>
          <main>{children}</main>
        </MDXProvider>
        <hr />
        <footer>
          © {new Date().getFullYear()}
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
