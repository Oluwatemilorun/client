
import { makeStyles, createStyles, Theme as _Theme } from '@material-ui/core/styles';

export const Styles = makeStyles(({ palette }) =>
	createStyles({
		wrapper: {
			backgroundColor: palette.background.paper,
			backgroundRepeat: 'no-repeat',
			minHeight: '100vh',
			width: '100vw',
			// overflowY: 'hidden'
		},
		backgroundWrapper: {
			width: '100%',
			height: '100%',
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover',
			backgroundPosition: 'center'
		},
		contentWrapper: {
			paddingTop: 50,
			paddingBottom: 50,
			height: '100%'
		},
		controlBackgroundWrapper: {
			position: 'relative',
			left: 0,
			right: 0,
			top: 0,
			bottom: 0
		},
		controlContentWrapper: {
			overflowY: 'scroll'
		}
	}),
	{ name: 'auth-layout' }
);
