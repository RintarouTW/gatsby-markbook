import Typography from 'typography'
import theme from 'typography-theme-kirkham'

theme.scaleRatio = 1.7
// theme.googleFonts = [
//   {
//     name: "Source Code Pro",
//     styles: []
//   }, {
//     name: "Lora",
//     styles: []
//   }, {
//     name: "Domine",
//     styles: []
//   }]
// theme.headerFontFamily = ["Domine", "Lora"]
// theme.bodyFontFamily = ["Fira Sans", "Source Code Pro Regular", "monospace"]

const typography = new Typography(theme)

export const { scale, rhythm, options } = typography
export default typography