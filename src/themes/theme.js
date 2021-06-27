import { createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
  palette: {
    // type: 'dark',
    primary: {
      main: "#900C3F",
    },
    secondary: {
      main: "#F60F56",
    },
  },
});
console.log(theme);

export default theme;