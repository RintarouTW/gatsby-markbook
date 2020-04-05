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

      let main_content = document.querySelectorAll(".katex_is_not_rendered")

      // prevent double rendering
      if (main_content[0])
        main_content[0].classList.toggle("katex_is_not_rendered")
      else
        return;

      // only render the document which contains no math-inline and math-display elements
      window.renderMathInElement(document.body, options)

    } else {

      inlineMathElements.forEach(e => {
        options.displayMode = false
        window.katex.render(e.textContent, e, options)
        e.classList.toggle("math-inline")
      })

      displayMathElements.forEach(e => {
        options.displayMode = true
        window.katex.render(e.textContent, e, options)
        e.classList.toggle("math-display")
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
          © {new Date().getFullYear()}
          <span
            style={{ paddingLeft: `3px` }}
            dangerouslySetInnerHTML={{
              __html: String.raw`<svg width="1em" height="1em" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="14.9109" width="93.4306" height="497.089" fill="url(#paint0_linear)"/>
              <rect x="418.569" y="14.9109" width="93.4306" height="497.089" fill="url(#paint1_linear)"/>
              <rect width="96.5454" height="469.52" transform="matrix(0.889316 -0.457294 0.337143 0.941453 62.793 44.1497)" fill="url(#paint2_linear)"/>
              <rect width="96.7439" height="484.434" transform="matrix(0.882174 0.470923 -0.348466 0.937322 348.686 6.05908)" fill="url(#paint3_linear)"/>
              <defs>
              <linearGradient id="paint0_linear" x1="-2.10751e-06" y1="278.5" x2="92" y2="280" gradientUnits="userSpaceOnUse">
              <stop stop-color="#366FBD"/>
              <stop offset="0.109375" stop-color="#6BA9FF"/>
              <stop offset="0.875" stop-color="#3489FF"/>
              <stop offset="1" stop-color="#1D4274"/>
              </linearGradient>
              <linearGradient id="paint1_linear" x1="418.569" y1="278.5" x2="511.569" y2="278.5" gradientUnits="userSpaceOnUse">
              <stop stop-color="#CACACA"/>
              <stop offset="0.197917" stop-color="#919191"/>
              <stop offset="0.822917" stop-color="#AAAAAA"/>
              <stop offset="0.984375" stop-color="#101010"/>
              </linearGradient>
              <linearGradient id="paint2_linear" x1="-0.368776" y1="241.841" x2="94.0169" y2="241.375" gradientUnits="userSpaceOnUse">
              <stop stop-color="#1C7E20"/>
              <stop offset="0.125" stop-color="#60E265"/>
              <stop offset="0.911458" stop-color="#32D138"/>
              <stop offset="1" stop-color="#1F7B23"/>
              </linearGradient>
              <linearGradient id="paint3_linear" x1="-2.9588e-07" y1="256.879" x2="91.6873" y2="258.425" gradientUnits="userSpaceOnUse">
              <stop stop-color="#964343"/>
              <stop offset="0.125" stop-color="#FF7B7B"/>
              <stop offset="0.875" stop-color="#A74949"/>
              <stop offset="1" stop-color="#632E2E"/>
              </linearGradient>
              </defs>
              </svg>`}} />
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
