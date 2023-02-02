//Dialog Box to select params for Graph generation
import * as React from "react";

// importing material UI components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Input } from "@mui/material";
import { textAlign } from "@mui/system";

export default function SubHeader(props) {
    // const style = {
    //     background = '#2E3B55',
    // };
    const {onGenerate=(nodes, grid, scheme)=>{}, setGraph=()=>{}} = props
    const types = [{label:"SQUARE GRID",value:"SQR"},{label:"BINARY BALANCED",value:"BIN"}]
    const schemes = [{label:"Remove 5% nodes", value:"N5"}, {label:"Remove 5% edges", value:"E5"},
    {label:"Remove 10% nodes", value:"N10"}, {label:"Remove 10% edges", value:"E10"},
    {label:"Remove 20% nodes", value:"N20"}, {label:"Remove 20% edges", value:"E20"}, {label:"None", value:"None"}]
    const [scheme, setScheme] = React.useState('E5')
    const [grid, setGrid] = React.useState('SQR')
    const [nodes, setNodes] = React.useState(200)

    const handleNodesAdd = (event) => {
        setNodes((nodes)=>{return nodes+1;})
    }

    const handleNodesMinus = (event) => {
        setNodes((nodes)=>{return nodes-1;})
    }

    const handleGridChange = (event) => {
        // alert('grid changed to '+ event.target.value)
        setGrid(event.target.value);
    }

    const handleSchemeChange = (event) => {
        // alert('grid changed to '+ event.target.value)
        setScheme(event.target.value);
    }

    const handleGenerateGraph = () => {
        onGenerate(nodes, grid, scheme);
    }
    
    
return (
    <div>
        <table align='center' width='72%' border={1}>
            <tr>
                <td align="center" colSpan={3}>
                    Select nodes
                </td>
                <td align="center" colSpan={3}>
                    Select grid type
                </td>
                <td align="center" colSpan={3}>
                    Select randomization
                </td>
                <td rowSpan={2} align='center' colSpan={3}>
                    <Button sx={{bgcolor:'primary', width:'100%'}} onClick={handleGenerateGraph}>Generate</Button>
                </td>
            </tr>
            <tr>
                <td>
                    <Button sx={{width:'100%'}} onClick={handleNodesMinus}>-</Button>
                </td>
                <td rowSpan={1} align='center'>
                    <Input placeholder='#NODES' value={nodes} onInput={(event)=>{setNodes(parseInt(event.target.value));}} onFocus={(event)=>{event.target.select()}} align='center' textAlign='center' sx={{width:'fit-content', align:'center', textAlign:'center', }} ></Input>
                </td>
                <td>
                    <Button sx={{width:'100%'}} onClick={handleNodesAdd}>+</Button>
                </td>
                <td colSpan={3} rowSpan={1} align='center'>
                <select width='100%' sx={{height:'100%', width:'100%'}} value={grid} onChange={handleGridChange}>
                    {types.map((option) => (
                         <option value={option.value}>{option.label}</option>
                     ))}
                 </select>
                </td>
                <td colSpan={3} rowSpan={1} align='center'>
                <select width='100%' sx={{height:'100%', width:'100%'}} value={scheme} onChange={handleSchemeChange}>
                    {schemes.map((option) => (
                         <option value={option.value}>{option.label}</option>
                     ))}
                 </select>
                </td>
            </tr>
        </table>

        {/* <p padding='10px'>Select nodes</p> */}
        
    </div>
// 	<AppBar position="static" style={{ background: '#FFFFFF', color: '#0288D1'}}>
// 		<Toolbar variant="dense">
//         <p>Select nodes</p>
// 		<Button color="inherit" sx={{ flexGrow: 1 }} onClick={nodes=nodes-1}>-</Button>
// 		<Input color="inherit" sx={{ flexGrow: 1 }} value={nodes} onClick={onGenerate}>{nodes}</Input>
// 		<Button color="inherit" sx={{ flexGrow: 1 }} onClick={nodes=nodes+1}>+</Button>
// 		<div sx={{ flexGrow: 1 }}>
//             <label> Select the type of graph 
//                 <select value={props.value} onChange={props.onChange}>
//                     {types.map((option) => (
//                         <option value={option.value}>{option.label}</option>
//                     ))}
//                 </select>
//             </label>
//         </div>
// 		<Button color="deepblue" sx={{ flexGrow: 1 }} onClick={onGenerate}>Generate</Button>
// 		</Toolbar>
// 	</AppBar>
// );
)
}
