import React, { ComponentPropsWithRef } from 'react'

import {
	Grid,
	Container
} from "@material-ui/core"

import { Styles } from './style'

interface AuthLayerProps extends ComponentPropsWithRef<'main'> {
	background: string
}

export const AuthLayout = (props: AuthLayerProps) => {
	const styles = Styles()

	return (
		<Grid container className={styles.wrapper}>
			<Grid
				container
				item
				xs={false} md={6}
				className={styles.backgroundWrapper}
				style={{ backgroundImage: `url(${props.background})` }}
			/>
			<Grid container item xs={12} md={6}>
				<Container>
					<Grid container justify="space-between" alignItems="stretch" direction="column" className={styles.contentWrapper}>
						{props.children}
					</Grid>
				</Container>
			</Grid>
		</Grid>
	)
}