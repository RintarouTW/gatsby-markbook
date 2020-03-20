/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from "react"
import LatexPage from "./src/components/latexpage"

export const wrapPageElement = ({ element, ...restProps }, ...args) => {
  return <LatexPage {...restProps} {...args}>{element}</LatexPage>
};
