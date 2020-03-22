/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
// import "./layout.css"
import "./custom.css"

const Layout = ({ children }) => {
  
  const data = useStaticQuery(graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
  `)

  useEffect(() => {
    console.log("Layout updated")
    window.renderMathInElement(document.body, {
      delimiters:[
        {left: "$$", right: "$$", display: true},
        {left: "$", right: "$", display: false},
        {left: "\\(", right: "\\)", display: false},
        {left: "\\[", right: "\\]", display: true}
      ], 
      trust: true,
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
      <Header siteTitle={data.site.siteMetadata.title}/>
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
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
