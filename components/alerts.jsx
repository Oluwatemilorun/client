import React from 'react'

import {
    Dialog,
    Grid,
    Typography,
    Icon
} from '@material-ui/core'
import { makeStyles, createStyles, withStyles } from '@material-ui/styles'
// import Icon from '@material-ui/icons'

const Styles = makeStyles(({ palette }) =>
	createStyles({
		wrapper: {
            width: 320,
            minHeight: 290,
            backgroundColor: '#fff',
            borderRadius: 7,
            padding: 30
        },
        title: {
            textTransform: 'capitalize',
            fontSize: 14,
            fontWeight: 500,
            textAlign: 'center'
        },
        content: {
            paddingHorizontal: 15
        },
        icon: {
            fontSize: 56,
            width: 72,
            height: 72,
            marginBottom: 10
        }
	}),
	{ name: 'alert-component' }
);

const EditedDialog = withStyles(theme => ({
    root: {
        '& .MuiPaper-rounded': {
            borderRadius: 12
        }
    },
  }))(Dialog);

export const Alert = (props) => {

    const styles = Styles()

	const closeDialog = () => {
		setOpen(false)
		if (props.onClose) props.onClose()
	}

	const handleBackdropclick = () => {
		if (props.fixed) return
		else closeDialog()
	}

	const handleEscapeKeyDown = () => {
		if (props.fixed) return
		closeDialog()
	}

    return (
        <EditedDialog
            {...props}
            open={props.open}
			onClose={closeDialog}
			onRendered={props.onOpen}
			onBackdropClick={handleBackdropclick}
			onEscapeKeyDown={handleEscapeKeyDown}
			aria-labelledby={`${props.title.replace(/ /g, ), '-'}-alert-dialog`}
        >
            <Grid container alignItems="flex-start" className={styles.wrapper}>
                <Grid container item direction="column" justify="center" alignItems="center" xs={12}>
                    {
                        typeof props.icon === 'string'
                            ? <Icon className={`mdi ${props.icon} ${styles.icon}`} />
                            : <Grid container justify="center" alignItems="center" className={styles.icon}>
                                {props.icon}
                              </Grid>
                    }
                    <Typography className={styles.title}>{props.title}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Grid container item xs={12} className={styles.content}>
                        {props.children}
                    </Grid>
                </Grid>
            </Grid>
        </EditedDialog>
    )
}

// export Alert