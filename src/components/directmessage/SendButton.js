import React from 'react';

import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon'


const useStyle = makeStyles(theme => ({
	button:{
		margin:theme.spacing(1),
	},
	leftIcon: {
		marginright: theme.spacing(1),
	},
	iconSmall: {
		fontSize: 20,
	},
}));


function SendButtons() {
	const classes = useStyle();
	return (
		<Button variant='contained' color='primary' className={classes.button}>
		<Icon>send</Icon>
		</Button>
	);
}



export default SendButtons;

