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
import SEO from "../components/seo"

const shortcodes = { GeoGeBra }

const Layout = ({ children, path }) => {

  useEffect(() => {

    let main_content = document.querySelectorAll(".katex_is_not_rendered")

    // prevent double rendering
    if (main_content[0])
      main_content[0].classList.toggle("katex_is_not_rendered")
    else
      return;

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
        options.displayMode = false
        window.katex.render(e.textContent, e, options)
      })

      displayMathElements.forEach(e => {
        options.displayMode = true
        window.katex.render(e.textContent, e, options)
      })
    }

  })

  const title = path ? decodeURI(path.replace(/\//g, "")) : ""

  return (
    <>
      <SEO title={title} />
      <Header />
      <div
        className="container"
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <MDXProvider components={shortcodes}>
          <main className="content katex_is_not_rendered">{children}</main>
        </MDXProvider>
        <hr />
        <footer>
          © {new Date().getFullYear()}  <svg class="bi bi-bookmarks" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M7 13l5 3V4a2 2 0 00-2-2H4a2 2 0 00-2 2v12l5-3zm-4 1.234l4-2.4 4 2.4V4a1 1 0 00-1-1H4a1 1 0 00-1 1v10.234z" clip-rule="evenodd" />
            <path d="M14 14l-1-.6V2a1 1 0 00-1-1H4.268A2 2 0 016 0h6a2 2 0 012 2v12z" />
          </svg>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
