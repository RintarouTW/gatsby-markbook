import { useEffect } from "react"
import PropTypes from "prop-types"

export const LatexPage = ({children}) => {
  
  useEffect(()=>{
    window.renderMathInElement(document.body, {
        delimiters:[
          {left: "$$", right: "$$", display: true},
          {left: "$", right: "$", display: false},
          {left: "\\(", right: "\\)", display: false},
          {left: "\\[", right: "\\]", display: true}
        ], 
        trust: true,
        macros: {
          "\\eqref":"",   // not support yet
          "\\label":"",   // not support yet
          "\\require":"", // not support yet
          "\\tag":"",     // not support yet
          "\\def":"\\gdef", // def only work in local context, make it global
          "\\pmatrix":"\\begin{pmatrix}#1\\end{pmatrix}",
          "\\cases":"\\begin{cases}#1\\end{cases}",
          "\\align":"\\begin{aligned}#1\\end{aligned}",
          "\\eqalign":"\\begin{aligned}#1\\end{aligned}",
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
