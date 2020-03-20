import Typography from 'typography'
import theme from 'typography-theme-kirkham'

theme.baseFontSize = '18px'
theme.headerFontFamily = ['Playfair Display']
theme.bodyFontFamily = ['Fira Sans', 'serif']
theme.overrideThemeStyles = ({ rhythm }, options) => ({
    'h1': {
       fontSize: "x-large"
    },
    'h2': {
      fontSize: "large"
    },
    'h3': {
      fontSize: "medium"
    }
})

const typography = new Typography(theme)

export const { scale, rhythm, options } = typography
export default typography