import { createStyles, emphasize, makeStyles, Theme } from '@material-ui/core/styles';

export const Styles = makeStyles((theme) =>
	createStyles({
		root: {
			flexGrow: 1,
			height: 250,
			minWidth: 290,
		},
		input: {
			display: 'flex',
			padding: 0,
			height: 'auto',
		},
		valueContainer: {
			display: 'flex',
			flexWrap: 'wrap',
			flex: 1,
			alignItems: 'center',
			overflow: 'hidden',
		},
		chip: {
			margin: theme.spacing(0.5, 0.25),
		},
		chipFocused: {
			backgroundColor: emphasize(
				theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700],
				0.08,
			),
		},
		noOptionsMessage: {
			padding: theme.spacing(1, 2),
		},
		singleValue: {
			fontSize: 16,
		},
		placeholder: {
			position: 'absolute',
			left: 2,
			bottom: 6,
			fontSize: 16,
		},
		paper: {
			position: 'absolute',
			zIndex: 1,
			marginTop: theme.spacing(1),
			left: 0,
			right: 0,
		},
		divider: {
			height: theme.spacing(2),
		},
	}),
);