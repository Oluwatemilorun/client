import React, { useState } from 'react';

import {
    Grid,
    Typography,
    Chip,
    Icon,
    IconButton,
    Button,
    Badge,
    AppBar,
    Toolbar
} from '@material-ui/core'

import { makeStyles, createStyles, withStyles } from '@material-ui/styles'

const Styles = makeStyles((theme) =>
    createStyles({
		toolbar: {
			paddingLeft: 90
		},
        menuButton: {
            marginRight: 36,
        },
        menuButtonHidden: {
            display: 'none',
        },
        title: {
            fontSize: 21,
            fontWeight: '700',
		},
		spacer: {
			flexGrow: 1,
		}
    }),
    { name: 'drawer-component' }
)

export const Appbar = (props) => {
    const styles = Styles()
	const { accountType } = props

    return (
        <div>
            <AppBar elevation={1} color="#fff">
                <Toolbar 
                    // variant="dense"
                    className={styles.toolbar}
                >
                    
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={styles.title}>
                        RealDrip
                    </Typography>
					<Chip label={accountType} size="small" style={{ marginLeft: 7 }} />
					<div className={styles.spacer} />
                    <Button variant="text">
						How it works
					</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}