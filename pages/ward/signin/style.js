
import { makeStyles, createStyles } from '@material-ui/core/styles';

export const Styles = makeStyles(({ palette }) =>
	createStyles({
		subheading: {
			color: palette.primary.dark,
			marginBottom: 30
		},
		title: {
			fontWeight: 600,
			marginBottom: 30
		},
		formWrapper: {
			marginTop: 10,
			position: "relative"
		}
	}),
	{ name: 'ward-signin' }
);
