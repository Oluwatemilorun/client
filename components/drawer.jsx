import React, { useState } from 'react'
import clsx from 'clsx'

import {
	Grid,
	Typography,
	TextField,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Divider,
	SvgIcon,
	Drawer as _Drawer,
	Icon,
	IconButton,
	AppBar,
	Toolbar
} from '@material-ui/core'

import { makeStyles, createStyles } from '@material-ui/styles'

import {
	DashboardIcon,
	MedicalRoomIcon,
	DevicesIcon,
	NurseIcon,
	SettingsIcon,
	BackIcon
} from '@/components/icons'

const drawerWidth = 250

const Styles = makeStyles(
    theme =>
        createStyles({
            drawer: {
                width: drawerWidth,
                flexShrink: 0,
                whiteSpace: "nowrap"
            },
            drawerOpen: {
                width: drawerWidth,
                transition: theme.transitions.create("width", {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.enteringScreen
                })
            },
            drawerClose: {
                transition: theme.transitions.create("width", {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen
                }),
                overflowX: "hidden",
                width: theme.spacing(6) + 1,
                [theme.breakpoints.up("sm")]: {
                    width: theme.spacing(9) + 1
                }
            },
            drawerListWrapper: {
                height: "100%"
            },
            drawerMiniListWrapper: {
                transition: theme.transitions.create("padding", {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen
				}),
				paddingLeft: 8,
            },
            menuButton: {
                margin: 7
            }
        }),
    { name: "drawer-component" }
);

const MangemementDrawerItems = (
	<div>
		<ListItem button>
			<ListItemIcon>
				<SvgIcon>
					<DashboardIcon />
				</SvgIcon>
			</ListItemIcon>
			<ListItemText primary="Home" />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<SvgIcon>
					<MedicalRoomIcon />
				</SvgIcon>
			</ListItemIcon>
			<ListItemText primary="Operations" />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<SvgIcon>
					<DevicesIcon />
				</SvgIcon>
			</ListItemIcon>
			<ListItemText primary="Devices" />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<SvgIcon>
					<NurseIcon />
				</SvgIcon>
			</ListItemIcon>
			<ListItemText primary="Nurses" />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<SettingsIcon />
			</ListItemIcon>
			<ListItemText primary="Account" />
		</ListItem>
	</div>
)

const WardDrawerItems = (
	<div>
		<ListItem button>
			<ListItemIcon>
				{/* <PeopleIcon /> */}
			</ListItemIcon>
			<ListItemText primary="Customers" />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				{/* <BarChartIcon /> */}
			</ListItemIcon>
			<ListItemText primary="Reports" />
		</ListItem>
	</div>
)

/**
 * 
 * @param {accountType} props 
 * 
 * `accountType`: "management" | "ward"
 */
export const Drawer = (props) => {

	const styles = Styles()
	const [drawerOpen, drawerToggle] = useState(false)
	const { accountType } = props

	return (
        <_Drawer
            variant="permanent"
            className={clsx(styles.drawer, {
                [styles.drawerOpen]: drawerOpen,
                [styles.drawerClose]: !drawerOpen
            })}
            classes={{
                paper: clsx({
                    [styles.drawerOpen]: drawerOpen,
                    [styles.drawerClose]: !drawerOpen
                })
            }}
            open={drawerOpen}
        >
            <AppBar position="absolute" elevation={0} color="transparent">
                <Toolbar variant="dense" disableGutters>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        className={styles.menuButton}
                        onClick={() => drawerToggle(!drawerOpen)}
                    >
                        <Icon className="mdi mdi-menu" />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Grid
                container
                direction="column"
                justify="space-between"
                className={clsx(styles.drawerListWrapper, {
                    [styles.drawerMiniListWrapper]: !drawerOpen
                })}
            >
                <List>
                    {accountType === "management"
                        ? MangemementDrawerItems
                        : accountType === "ward"
                        ? WardDrawerItems
                        : null}
                </List>
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <BackIcon />
                        </ListItemIcon>
                        <ListItemText primary="Sign out" />
                    </ListItem>
                </List>
            </Grid>
        </_Drawer>
    );
}
