import * as React from "react";

// importing material UI components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Tabs,Tab } from "@mui/material";

export default function SubHeader(props) {
    // const style = {
    //     background = '#2E3B55',
    // };
    const {value='GEN', onChange=()=>{}} = props
    // const {status='INIT', onGenerate=()=>{}, onSelect=()=>{}, onRun=()=>{if(status != 'READY') alert('We are not ready to run!');}} = props
    // let s1 = true
    // let s2 = true
    // let s3 = true
    // if(status == 'INIT') {
    //     s2 = false
    //     s3 = false
    // } else if(status == 'GEN') {
    //     s1 = true
    //     s2 = true
    //     s3 = false
    // } else if(status == 'READY') {
    //     s1 = true
    //     s2 = true
    //     s3 = true
    // } else if(status == 'RAN') {
    //     s1 = true
    //     s2 = true
    //     s3 = false
    // }
return (
	// <AppBar position="static" style={{ background: '#FFFFFF', color: '#0288D1'}}>
	// 	<Toolbar variant="dense">
	// 	<Button disabled = {!s1} color="inherit" sx={{ flexGrow: 1 }} onClick={onGenerate}>Generate Random Graph</Button>
	// 	<Button disabled = {!s2} color="inherit" sx={{ flexGrow: 1 }} onClick={onSelect}>Select Algorithm</Button>
	// 	<Button disabled = {!s3} color="inherit" sx={{ flexGrow: 1 }} onClick={onRun}>Run Algorithm</Button>
	// 	</Toolbar>
	// </AppBar>

    <Tabs
    value={value}
    onChange={onChange}
    textColor="primary"
    indicatorColor="primary"
    aria-label="secondary tabs example"
    variant='fullwidth'
    centered
    sx={{width:'100%'}}
    >
    <Tab value="GEN" label="Generate Random Graph" sx={{ flexGrow: 1 }}/>
    <Tab value="SEL" label="Select Algorithm" sx={{ flexGrow: 1 }}/>
    <Tab value="RUN" label="Run Algorithm" sx={{ flexGrow: 1 }}/>
    </Tabs>
);
}
