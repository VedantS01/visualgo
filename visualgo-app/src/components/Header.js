import * as React from "react";

// importing material UI components
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/logo512.png";
import { Tabs, Tab, Toolbar } from "@mui/material";

export default function Header(props) {
	// const {onClickHelp=()=>{}, onClickAboutUs=()=>{}} = onClicks
	const {value='GEN', onChange=()=>{}} = props
return (
	// <AppBar position="static">
	<Toolbar sx={{elevation:10, bgcolor:'aliceblue', height:'20px'}}>
	<IconButton
		size="large"
		edge="start"
		color="inherit"
		aria-label="menu"
		sx={{ mr: 2, padding:'20px' }}
	>
		<img src={logo} height="30px" width="30px" alt="Logo"/>
	</IconButton>

	<Typography variant="h6"
		component="div" sx={{ flexGrow: 1}} alignContent='middle' display='flex' flexDirection='row' color='primary' disabled>
		<b >VISUALGO</b>
	</Typography>
	<Tabs
		value={value}
		onChange={onChange}
		textColor="primary"
		indicatorColor="primary"
		aria-label="Status"
		variant='scrollable'
		sx={{width:'100%', flexGrow: 2, marginLeft: 10}}
		>
		
		
		
		<Tab value="GEN" label="Generate Random Graph" sx={{ flexGrow: 1 }}/>
		<Tab value="SEL" label="Select Algorithm" sx={{ flexGrow: 1 }}/>
		<Tab value="RUN" label="Run Algorithm" sx={{ flexGrow: 1 }}/>
		</Tabs>
	</Toolbar>
		
	// </AppBar>
);
}


