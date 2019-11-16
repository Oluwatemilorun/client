import React from 'react'
import { useRouter } from 'next/router'

import {
    Grid,
    Typography,
    TextField,
    Button
} from '@material-ui/core'

import Dashboard from '@/layouts/dashboard'

const ManagementDashboard = (props) => {
    const {
        query: { user }
    } = useRouter()

    return (
        <Dashboard accountType="management">
            <Grid container spacing={3}>
                <Typography>
                    {user}
                </Typography>
            </Grid>
        </Dashboard>
    )
}

// ManagementDashboard.getInitialProps = async ({ req, res }) => {
//     return {}
// }

export default ManagementDashboard