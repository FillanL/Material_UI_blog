import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
	sidebarAboutBox: {
		padding: theme.spacing(1),
		marginBottom: '15px',
		backgroundColor: '#3d405b',
		color: 'white'
	},
	sidebarSection: {
		marginTop: theme.spacing(3),
	},
    center: {
        margin: "auto"
    }
}));

const SideBar = (props) => {
	const classes = useStyles();

	return (
		<Grid item xs={12} md={4} className={classes.center}>
			<Paper elevation={1} className={classes.sidebarAboutBox}>
				<Typography variant="h6">About Us</Typography>
			</Paper>
			<AboutUs>
				<Typography align="center" variant="body1" gutterBottom>
					lipsum as it is sometimes known, is dummy text used in laying out
					print, graphic or web designs. The passage is attributed to an unknown
					typesetter in the 15th century who is thought to have scrambled parts
					of Cicero's De Finibus Bonorum et Malorum for use in a type specimen
					book. lipsum as it is sometimes known, is dummy text used in laying
					out print, graphic or web designs. The passage is attributed to an
					unknown typesetter in the 15th century who is thought to have
					scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a
					type specimen book.
				</Typography>
			</AboutUs>
		</Grid>
	);
};

export default SideBar;
const AboutUs = styled.div`
	padding: 15px 30px;
    font-size: 10px;
`;
