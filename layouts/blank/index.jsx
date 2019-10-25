import React, { ComponentPropsWithRef } from 'react'

import { 
	Grid,
	Container
} from "@material-ui/core"

import { Styles } from './style'

export const BlankLayout = (props: ComponentPropsWithRef<'main'>) => {
	const styles = Styles()

	return (
		<Grid container className={styles.wrapper} alignItems="center" justify="center">
			<Container fixed>
				{props.children}
			</Container>
		</Grid>
	);
}