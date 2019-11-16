import React, { useState } from 'react'

import {
	Grid,
	Typography,
	TextField,
	Button
} from '@material-ui/core'

import AuthLayout from '@/layouts/onboard'
import { Alert } from '@/components'
import { Styles } from './style'

import * as bg from '@/assets/img/bg/005.svg'

const ManagementSignin = () => {
    const styles = Styles()
    
    const [showAlert, toggleAlert] = useState(true)

	return (
		<AuthLayout background={bg}>
			<Grid xs>
				<Grid item xs={12}>
					<Typography color="primary" variant="h6" className={styles.subheading}>Welcome Back!</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography variant="h3" className={styles.title}>Management Registration</Typography>
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
						<Button variant="contained" fullWidth color="primary" size="large" style={{ color: '#fff' }} onClick={
                            () => toggleAlert((prevState) => !prevState)
                        }>
							sign in
						</Button>
					</Grid>
				</Grid>
			</Grid>
			<Grid>
				<Typography variant="caption">
					Don't have a RealDrip management account?
				</Typography>
				<Button variant="text" size="small" color="primary" href="/management/signup">Sign up</Button>
			</Grid>

            <Alert open={showAlert} title="Confirmation mail sent" icon="mdi-check-circle">

            </Alert>
		</AuthLayout>
	)
}

export default ManagementSignin