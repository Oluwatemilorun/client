import React from 'react'

import {
	Grid,
	Container,
	Hidden
} from '@material-ui/core'

import { Styles } from './style'

export const AuthLayout = (props) => {
	const styles = Styles()

	return (
		<Grid container className={styles.wrapper}>
			<Hidden smDown>
				<Grid container item md={6} className={styles.controlBackgroundWrapper}>
					<Grid
						className={styles.backgroundWrapper}
						style={{ backgroundImage: `url(${props.background})` }}
					/>
				</Grid>
			</Hidden>
			<Grid container item xs={12} md={6}>
				<Container>
					<Grid container justify="space-between" alignItems="stretch" direction="column" className={styles.contentWrapper} wrap="nowrap">
						{props.children}
					</Grid>
				</Container>
			</Grid>
		</Grid>
	)
}

export default AuthLayout