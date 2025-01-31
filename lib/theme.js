import { SheetsRegistry } from 'jss';
import { createMuiTheme, responsiveFontSizes, createGenerateClassName } from "@material-ui/core/styles";

// import other fonts here

let SetupTheme = createMuiTheme({
	palette: {
		background: {
			default: '#687C700B'
		},
		primary: {
			main: '#13D596'
		},
		secondary: {
			main: '#FE454F'
		},
		// Used by `getContrastText()` to maximize the contrast between the background and  the text.
		contrastThreshold: 3,
		// Used to shift a color's luminance by approximately
		// two indexes within its tonal palette.
		// E.g., shift from Red 500 to Red 300 or Red 700.
		tonalOffset: 0.2
	},
	overrides: {}
	// status: {
	// 	danger: "orange"
	// }
});

export const Theme = responsiveFontSizes(SetupTheme);

const createPageContext = () => {
	return {
		Theme,
		// This is needed in order to deduplicate the injection of CSS in the page.
		sheetsManager: new Map(),
		// This is needed in order to inject the critical CSS.
		sheetsRegistry: new SheetsRegistry(),
		// The standard class name generator.
		generateClassName: createGenerateClassName(),
	};
}

let pageContext;

export const getPageContext = () => {
	// Make sure to create a new context for every server-side request so that data
	// isn't shared between connections (which would be bad).
	if (!process.browser) {
		return createPageContext();
	}

	// Reuse context on the client-side.
	if (!pageContext) {
		pageContext = createPageContext();
	}

	return pageContext;
}
