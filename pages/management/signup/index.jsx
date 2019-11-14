import React, { useState } from 'react'

import {
	Grid,
	Typography,
	TextField,
	Select,
	Button,
	Checkbox
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
					<Typography color="primary" variant="h6" className={styles.subheading}>Welcome to RealDrip!</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography variant="h3" className={styles.title}>Management Registration</Typography>
				</Grid>
				<Grid container item xs={12} spacing={2}>
					<Grid container item xs={12}>
						<Grid item xs={12} md={6}>
							<TextField
								fullWidth
								label="Medical Center Name"
								variant="outlined"
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<TextField
								fullWidth
								label="Medical Center Email"
								variant="outlined"
							/>
						</Grid>
					</Grid>
					<Grid container item xs={12}>
						<Grid item xs={12}>
							<Typography variant="caption">Location</Typography>
						</Grid>
						<Grid item xs={12} md={6}>
							<Select 
								fullWidth 
								label="Country"
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<Select 
								fullWidth 
								label="City/LGA"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField 
								fullWidth
								label="Address"
								multiline
								rows={3}
							/>
						</Grid>
					</Grid>
					<Grid container item xs={12}>
						<Grid item xs={12}>
							<Typography variant="caption">Password</Typography>
						</Grid>
						<Grid item xs={12} md={6}>
							<TextField
								fullWidth
								label="Password"
								variant="outlined"
								inputMode="password"
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<TextField
								fullWidth
								label="Confirm Password"
								variant="outlined"
								inputMode="password"
							/>
						</Grid>
					</Grid>
					<Grid item xs={12}>
						<Checkbox checked>
							I agree to the Terms, Privacy Policy and Fees.
						</Checkbox>
					</Grid>
					<Grid item xs={12} md={4}>
						<Button variant="contained" fullWidth color="primary" size="large" style={{ color: '#fff' }} onClick={
                            () => toggleAlert((prevState) => !prevState)
                        }>
							Create account
						</Button>
					</Grid>
				</Grid>
			</Grid>
			<Grid>
				<Typography variant="caption">
					Already own a RealDrip management account?
				</Typography>
				<Button variant="text" size="small" color="primary" href="/management/signin">Sign in</Button>
			</Grid>

            <Alert open={showAlert} title="Confirmation mail sent" icon="mdi-check-circle">

            </Alert>
		</AuthLayout>
	)
}

export default ManagementSignin