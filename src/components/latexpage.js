// Testing, Not used yet.

import { useEffect } from "react"
import PropTypes from "prop-types"

export const LatexPage = ({ children }) => {

  useEffect(() => {
    console.log("LatexPage updated")

    window.renderMathInElement(document.body, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false },
        { left: "\\(", right: "\\)", display: false },
        { left: "\\[", right: "\\]", display: true }
      ],
      trust: true,
      macros: {
        "\\eqref": "\\href{#1}{}",   // not support yet
        "\\label": "\\href{#1}{}",   // not support yet
        "\\require": "\\href{#1}{}", // not support yet
        "\\tag": "\\href{#1}{}",     // not support yet
        "\\hfil": "\\space",         // not support yet
        "\\def": "\\gdef", // def only work in local context, make it global
        "\\cal": "\\mathcal",
        "\\pmatrix": "\\begin{pmatrix}#1\\end{pmatrix}",
        "\\cases": "\\begin{cases}#1\\end{cases}",
        "\\align": "\\begin{aligned}#1\\end{aligned}",
        "\\eqalign": "\\begin{aligned}#1\\end{aligned}",
        "\\array": "\\begin{array}#1\\end{array}",
        "\\gather": "\\begin{gathered}#1\\end{gathered}",
      }
      // output: "hml" / "mathml"
    })
  })

  return [children]
}

LatexPage.propTypes = {
  children: PropTypes.node.isRequired,
}
export default LatexPage
