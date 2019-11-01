
import { makeStyles, createStyles, Theme as _Theme } from '@material-ui/core/styles';

export const Styles = makeStyles(({ palette }) =>
	createStyles({
		wrapper: {
			backgroundColor: palette.background.default,
			backgroundRepeat: 'no-repeat',
			height: '100vh',
			width: '100vw'
		},
		backgroundWrapper: {
			width: '100%',
			height: '100vh',
			// backgroundAttachment: 'fixed',
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover',
			backgroundPosition: 'center'
		},
		contentWrapper: {
			paddingTop: 50,
			paddingBottom: 50,
			height: '100%'
		}
	}),
	{ name: 'auth-layout' }
);
