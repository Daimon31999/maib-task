import { createMuiTheme } from '@material-ui/core/styles'

export const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#7AA734',
    },
    secondary: {
      main: '#006746',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#fff',
    },
  },
})
