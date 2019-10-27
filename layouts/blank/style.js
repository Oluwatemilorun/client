
import { makeStyles, createStyles} from '@material-ui/core/styles';

import * as BackgroundImg from '@/assets/img/bg/Pattern.png';

export const Styles = makeStyles(({ palette }) =>
	createStyles({
		wrapper: {
			backgroundColor: palette.background.default,
			backgroundImage: `url(${BackgroundImg})`,
			backgroundRepeat: 'repeat',
			height: '100vh',
			width: '100vw'
		},
		container: {
			margin: 10
		}
	}),
	{ name: 'default-layout' }
);
