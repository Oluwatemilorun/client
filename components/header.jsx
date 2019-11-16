import React from 'react'

import { 
	Grid,
	Button,
	Typography
} from '@material-ui/core'

import { makeStyles, createStyles } from "@material-ui/styles"

const Styles = makeStyles(
    theme =>
        createStyles({
			headerWrapper: {
				marginBottom: 15
			},
			titleWrapper: {
				flexGrow: 1,
			},
            title: {
				fontWeight: 700,
				fontSize: 24,
			},
			subtitle: {
				fontSize: 18,
				fontWeight: 700,
				paddingTop: 10
			}
        }),
    { name: "dashboard-header-component" }
)

export const DashboardHeader = ({ title, subTitle, actionText, actionClick }) => {
	const styles = Styles()

	return (
        <Grid container alignItems="center" className={styles.headerWrapper}>
            <Grid item className={styles.titleWrapper}>
                <Typography variant="h3" className={styles.title}>
                    {title}
                </Typography>
            </Grid>
            {actionText ? (
                <Grid item>
                    <Button variant="outlined" size="small" color="secondary">
                        {actionText}
                    </Button>
                </Grid>
            ) : null}
            <Grid item xs={12}>
                <Typography variant="h3" className={styles.subtitle}>
                    {subTitle || ''}
                </Typography>
            </Grid>
        </Grid>
    );
}