import React from 'react'

import {
	Grid,
	Typography,
	TextField,
	Button
} from '@material-ui/core'

import AuthLayout from '@/layouts/onboard'
import { Styles } from './style'

import * as bg from '@/assets/img/bg/006.svg'

const WardSignin = () => {
	const styles = Styles()

	return (
		<AuthLayout background={bg}>
			<Grid xs>
				<Grid item xs={12}>
					<Typography color="primary" variant="h6" className={styles.subheading}>Welcome Back!</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography variant="h3" className={styles.title}>Ward Sign In</Typography>
				</Grid>
				<Grid container item xs={12} spacing={2}>
					<Grid item xs={12} md={6}>
						<TextField
							fullWidth
							label="Ward Username"
							variant="outlined"
						/>
					</Grid>
					<Grid item xs={12} md={6}>
						<TextField
							fullWidth
							label="Password"
							variant="outlined"
							inputMode="password"
						/>
					</Grid>
					<Grid item xs={12} md={4}>
						<Button variant="contained" fullWidth color="primary" size="large" style={{ color: '#fff' }}>
							sign in
						</Button>
					</Grid>
				</Grid>
			</Grid>
			<Grid>
				<Typography variant="caption">
					Haven't activated your ward account? 
				</Typography>
				<Button variant="text" size="small" color="primary" href="/ward/activation">Activate</Button>
			</Grid>
		</AuthLayout>
	)
}

export default WardSignin