import Typography from 'typography'
import funstonTheme from 'typography-theme-kirkham'

funstonTheme.baseFontSize = '18px'
funstonTheme.headerFontFamily = ['Playfair Display']
funstonTheme.bodyFontFamily = ['Fira Sans', 'serif']
funstonTheme.overrideThemeStyles = ({ rhythm }, options) => ({
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

const typography = new Typography(funstonTheme)

export const { scale, rhythm, options } = typography
export default typography