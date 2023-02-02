import { Button } from "@mui/material";
import {default as startnode} from "../assets/startnode.svg"
import {default as goalnode} from "../assets/goalnode.svg"
import {default as normalnode} from "../assets/normalnode.svg"

//selection dropdown menu to select algorithm
export default function AlgorithmSelector (props) {
    const {algo, handleAlgoChange, setStartNode, setGoalNodes} = props
    // algos = ["DFS", "BFS"]
    const algos = [{label:"Depth First Search",value:"DFS"},{label:"Breadth First Search",value:"BFS"}]
    // const [algo, setAlgo] = useState('DFS')
    // const handleAlgoChange = (event) => {setAlgo(event.target.value)}
    
    const view = <div>
        <table align='center' width='72%' border={1}>
            <tr>
                <td align="center" colSpan={1}>
                    Set start node
                </td>
                <td align="center" colSpan={1}>
                    Set goal node(s)
                </td>
                <td align="center" colSpan={1}>
                    Select algorithm
                </td>
                <td rowSpan={1} align='center' colSpan={3}>
                    Legend
                </td>
            </tr>
            <tr>
                <td align="center">
                    <Button sx={{bgcolor:'primary', width:'100%'}} onClick={setStartNode}>Set selected nodes</Button>
                </td>
                <td align="center">
                    <Button sx={{bgcolor:'primary', width:'100%'}} onClick={setGoalNodes}>Set selected nodes</Button>
                </td>
                <td colSpan={1} rowSpan={1} align='center'>
                <select value={algo} onChange={handleAlgoChange}>
                {algos.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
                </select>
                </td>
                <td align="center" valign="middle">
                <img src={startnode} height="30px" width="30px" alt="start node img"/> 
                <label padding='10px'>Start node</label>
                </td>
                <td align="center" valign="middle">
                <img src={goalnode} height="30px" width="30px" alt="start node img"/> 
                <label padding='10px' valign='middle'>Goal node</label>
                </td>
                <td align="center" valign="middle">
                <img src={normalnode} height="30px" width="30px" alt="start node img"/> 
                <label padding='10px' valign='middle'>Normal node</label>
                </td>
            </tr>
        </table>

        
    </div>

    return view;
};