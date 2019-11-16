
import { makeStyles, createStyles, Theme as _Theme } from '@material-ui/core/styles';

export const Styles = makeStyles((theme) =>
    createStyles({
        root: {
            display: 'flex'
        },
        content: {
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
        },
        container: {
            paddingTop: theme.spacing(4),
            paddingBottom: theme.spacing(4),
        },
        paper: {
            padding: theme.spacing(2),
            display: 'flex',
            overflow: 'auto',
            flexDirection: 'column',
        },
        appBarSpacer: theme.mixins.toolbar,
    }),
    { name: 'dashboard-layout' }
);
