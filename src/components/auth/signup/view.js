import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { RadioGroup } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(0),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const View = () => {
    const classes = useStyles();
    return (
        <div container>
                <div className={classes.root}>
                    <Grid container spacing={6}>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <div>
                                <img src={require('./asset/signin.png')} />
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <h3>Welcome to RealDrip</h3>
                            <h1>Management Sign Up</h1>
                            <form className={classes.container}>
                                <Grid container spacing={2} margin={8}>
                                    <Grid item xs={6}>
                                        <label> Medical Center Name</label>
                                        <TextField
                                            id="outlined-full-width"
                                            style={{ margin: 8 }}
                                            placeholder="Trep Labs Clinics"
                                            fullWidth
                                            margin="normal"
                                            variant="outlined"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />

                                    </Grid>
                                    <Grid item xs={6}>
                                        <label> Medical Center Email</label>
                                        <TextField
                                            id="outlined-full-width"
                                            style={{ margin: 8 }}
                                            placeholder="clinics@treplabs.co"
                                            fullWidth
                                            margin="normal"
                                            variant="outlined"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />

                                    </Grid>

                                </Grid>
                                <label> Location</label>
                                <Grid container spacing={2} margin={8}>
                                    
                                    <Grid item xs={6}>
                                        
                                        <TextField
                                            id="outlined-full-width"
                                            style={{ margin: 8 }}
                                            placeholder="Lagos"
                                            fullWidth
                                            margin="normal"
                                            variant="outlined"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />

                                    </Grid>
                                    <Grid item xs={6}>
                                        <label> </label>
                                        <TextField
                                            id="outlined-full-width"
                                            style={{ margin: 8 }}
                                            placeholder="Nigeria"
                                            fullWidth
                                            margin="normal"
                                            variant="outlined"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />

                                    </Grid>

                                </Grid>
                                <TextField
                                    id="outlined-full-width"
                                    style={{ margin: 8 }}
                                    placeholder="Address"
                                    fullWidth
                                    margin="normal"
                                    variant="outlined"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                <label>Password</label>
                                <Grid container spacing={2} margin={8}>
                                    <Grid item xs={6}>
                                        <TextField
                                            id="outlined-full-width"
                                            style={{ margin: 8 }}
                                            placeholder="password"
                                            fullWidth
                                            margin="normal"
                                            variant="outlined"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />

                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            id="outlined-full-width"
                                            style={{ margin: 8 }}
                                            placeholder=" confirm password"
                                            fullWidth
                                            margin="normal"
                                            variant="outlined"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />

                                    </Grid>

                                </Grid>
                                <RadioGroup>
                                    <FormControlLabel
                                        value="end"
                                        control={<Radio color="primary" />}
                                        label=" I agree to the terms and conditions"
                                        labelPlacement="end"
                                    />
                                </RadioGroup>
                                
                                <Button variant="contained" className={classes.button}>
                                    Create account
                                </Button>

                            </form>
                        </Paper>
                    </Grid>

                    </Grid>

                </div>

            </div>

       
    );
}

export default View;

