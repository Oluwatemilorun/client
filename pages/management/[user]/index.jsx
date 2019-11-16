import React from 'react'
import { useRouter } from 'next/router'

import {
	Grid,
	Card,
    Typography,
    TextField,
    Button
} from '@material-ui/core'
import { makeStyles, createStyles } from "@material-ui/styles"

import Dashboard from '@/layouts/dashboard'
import MedicalRoomIcon from '@/assets/icons/medical-room-colored.svg'
import DevicesIcon from '@/assets/icons/devices-colored.svg'
import NursesIcon from '@/assets/icons/nurse-colored.svg'
import DripIcon from '@/assets/icons/drip-colored.svg'

import { DashboardHeader } from '@/components'

const Styles = makeStyles(
    theme =>
        createStyles({
            summaryCard: {
				height: 220,
				padding: 50
			},
			summaryContentWrapper: {
				height: '100%'
			},
            summaryCount: {
				color: '#000',
				fontWeight: 600,
				flexGrow: 1
			},
			summaryRemark: {
				
			},
			summaryIcon: {
				width: 40,
				flexGrow: 1
			}
        }),
    { name: "dashboard-header-component" }
);


const ManagementDashboard = (props) => {
    const {
        query: { user }
	} = useRouter()
	
	const styles = Styles()

    return (
        <Dashboard accountType="management">
			<DashboardHeader 
				title="Dashboard"
				subTitle="Summary"
				actionText="Add new ward"
			/>
            <Grid container spacing={4}>
				{/* Wards registered */}
                <Grid item xs={12} md={6}>
					<Card color="#fff" className={styles.summaryCard} elevation={0}>
						<Grid container className={styles.summaryContentWrapper}>
							<Grid container item xs={9} direction="column" justify="space-between">
								<Typography variant="h2" className={styles.summaryCount}>
									15
								</Typography>
								<Typography variant="caption" className={styles.summaryRemark}>
									Wards registered
								</Typography>
							</Grid>
							<Grid container item xs={3} direction="column" alignItems="center">
								<img src={MedicalRoomIcon} className={styles.summaryIcon} />
								<Button variant="outlined" size="small" color="primary">See All</Button>
							</Grid>
						</Grid>
					</Card>
				</Grid>

				{/* Total devices */}
				<Grid item xs={12} md={6}>
					<Card color="#fff" className={styles.summaryCard} elevation={0}>
						<Grid container className={styles.summaryContentWrapper}>
							<Grid container item xs={9} direction="column" justify="space-between">
								<Typography variant="h2" className={styles.summaryCount}>
									400
								</Typography>
								<Typography variant="caption" className={styles.summaryRemark}>
									Total devices deployed
								</Typography>
							</Grid>
							<Grid container item xs={3} direction="column" alignItems="center">
								<img src={DevicesIcon} className={styles.summaryIcon} />
								<Button variant="outlined" size="small" color="primary">See All</Button>
							</Grid>
						</Grid>
					</Card>
				</Grid>

				{/* Nurses registered */}
				<Grid item xs={12} md={6}>
					<Card color="#fff" className={styles.summaryCard} elevation={0}>
						<Grid container className={styles.summaryContentWrapper}>
							<Grid container item xs={9} direction="column" justify="space-between">
								<Typography variant="h2" className={styles.summaryCount}>
									189
								</Typography>
								<Typography variant="caption" className={styles.summaryRemark}>
									Total registered nurses
								</Typography>
							</Grid>
							<Grid container item xs={3} direction="column" alignItems="center">
								<img src={NursesIcon} className={styles.summaryIcon} />
								<Button variant="outlined" size="small" color="primary">See All</Button>
							</Grid>
						</Grid>
					</Card>
				</Grid>

				{/* Operations done */}
				<Grid item xs={12} md={6}>
					<Card color="#fff" className={styles.summaryCard} elevation={0}>
						<Grid container className={styles.summaryContentWrapper}>
							<Grid container item xs={9} direction="column" justify="space-between">
								<Typography variant="h2" className={styles.summaryCount}>
									532
								</Typography>
								<Typography variant="caption" className={styles.summaryRemark}>
									All operations donw
								</Typography>
							</Grid>
							<Grid container item xs={3} direction="column" alignItems="center">
								<img src={DripIcon} className={styles.summaryIcon} />
								<Button variant="outlined" size="small" color="primary">See All</Button>
							</Grid>
						</Grid>
					</Card>
				</Grid>

            </Grid>
        </Dashboard>
    )
}

// ManagementDashboard.getInitialProps = async ({ req, res }) => {
//     return {}
// }

export default ManagementDashboard