import React from 'react'

import {
	Grid,
	Container
} from '@material-ui/core'

import { Styles } from './style'

const BlankLayout = (props) => {
	const styles = Styles()

	return (
		<Grid container className={styles.wrapper} alignItems="center" justify="center">
			<Container fixed>
				{props.children}
			</Container>
		</Grid>
	);
}

export default BlankLayout