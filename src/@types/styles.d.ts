import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

// type irá guardar a estrutura do defaultTheme
type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface defaultTheme extends ThemeType {}
}
