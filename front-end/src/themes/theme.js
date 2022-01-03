// import { createTheme } from "@material-ui/core/styles";
// const theme = createTheme({
// 	palette: {
// 		// type: 'dark',
// 		primary: {
//
// 		},
// 		secondary: {
//
// 		},
// 	},
// });
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#900C3d",
		},
		secondary: {
			main: "#F60F56",
		},
	},
});

console.log(theme);

export default theme;
