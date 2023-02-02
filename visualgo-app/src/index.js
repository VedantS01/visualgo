import './index.css';
import reportWebVitals from './reportWebVitals';

import './App.css';


import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import AlgorithmSelector from './components/AlgorithmSelector';
import GraphGenDialog from './components/GraphGenDialog';
import generateGraph from './algorithms/graph_gen/factory';
import Header from './components/Header';
import GraphBox from './components/GraphBox';
import { Typography } from '@mui/material';


const App = () => {

  const [deleteButton, setDeleteButton] = useState(false)
  const [status, setStatus] = useState('GEN')
  const [state, setState] = useState({
    counter: 0,
    graph: {
      nodes: [
        // { id: 1, label: "Node 1", title: "node 1 tootip text" },
        // { id: 2, label: "Node 2", title: "node 2 tootip text" },
        // { id: 3, label: "Node 3", title: "node 3 tootip text" },
        // { id: 4, label: "Node 4", title: "node 4 tootip text" },
        // { id: 5, label: "Node 5", title: "node 5 tootip text" }
      ],
      edges: [
        // { from: 1, to: 2 },
        // { from: 1, to: 3 },
        // { from: 2, to: 4 },
        // { from: 2, to: 5 }
      ]
    },
    events: {}
  })
  const { graph, events } = state;
  const [goalNodes, setGoalNodes] = useState([])
  const [startNode, setStartNode] = useState([])
  const [network, setNetwork] = useState(null);

  useEffect(()=>{
    graph.nodes.forEach(element => {
      if(element.id == startNode) {
        // console.log('haha')
        element.group = '_start'
      }
      else if(element.id in goalNodes) {
        // console.log('hoho')
        element.group = '_goal'
      }
      else {
        element.group = '_default'
      }
    });
    console.log(graph.nodes);
    // var options = {
    //   groups: {
    //     useDefaultGroups: false,
    //     _start: {color: {background: 'red'}, borderWidth: 3, shape: "square"} ,
    //     _goal: {color: {background: 'green'}, borderWidth: 3, shape: "dot"} ,
    //     _default: {color: {background: 'blue'}, borderWidth: 3, shape: "triangle"}
    //   }
    // }
    // setState(graph, events)
    
  })

  const handleNodeDelete = () => {
    network.deleteSelected();
    
    // alert('Nodes: ' + graph.nodes.remove)
    setDeleteButton(false);
    
  };
  const handleGenerateGraph = (nodes, grid, scheme) => {
    let graph_ = generateGraph(nodes, grid, scheme);
    // alert(graph_.nodes.length)
    setState(({graph, counter, ...rest})=>{return {graph: graph_, counter: graph_.nodes.length, ...rest}})
  
    setStatus('GEN')
  }
  const handleGoalSet = (event) => {
    network.getSelectedNodes().forEach(element => {
      var node = graph.nodes.find((node) => {return node.id == element})
      node.group = '_goal'
    });
    
  }

  const handleStartSet = (event)=> {
    if(network.getSelectedNodes().length == 1) {
      var element = network.getSelectedNodes()[0]
      var node = graph.nodes.find((node) => {return node.id == element})
      node.group = '_start'
    }
    else {
      alert('Inappropriate selection: please select exactly one node')
    }
  }


  const [algo, setAlgo] = useState('DFS')
  const handleAlgoChange = (event) => {
    setAlgo(event.target.value);
    // setStatus('RUN')
  };

  const handleStatusChange = (event, value) => {
    setStatus(value)
  }
  return (
    <div  //style={{display:"flex"}}>
    >
      <Header value={status} onChange={handleStatusChange}/>
      {/* <SubHeader value={status} onChange={handleStatusChange}/> */}
      {status == 'GEN' && <GraphGenDialog nodes={200} onGenerate={handleGenerateGraph}/>}
      {status == 'SEL' && <AlgorithmSelector algo={algo} handleAlgoChange={handleAlgoChange} setStartNode={handleStartSet} setGoalNodes={handleGoalSet}/>}

      {/* {<menubar name='header' >
        <button onClick={()=>{alert('clicked!');}}>
          Click to add random nodes
        </button>
        <button onClick={()=>{}}>
          Save Graph
        </button>
        {deleteButton && <button onClick={handleNodeDelete}>
          Delete
        </button>}
      </menubar>} */}
      {state.graph.nodes.length > 0 && <GraphBox startNode={startNode} goalNodes={goalNodes} graph={graph} style={{ height: '800px' }} getNetwork={network => {
        setNetwork(network);
      }}/>}
      {state.graph.nodes.length == 0 && <Typography style={{flex: 1, height: '500px', width: '100%', textAlign:'center', textAlignVertical:'middle', paddingTop:'200px'}}>No graph generated yet!</Typography>}
      {/* <Graph graph={graph} options={options} events={events} style={{ height: '800px' }} getNetwork={network => {
        setNetwork(network);
      }}/> */}
      
    <div>
      <p> Start node id: {startNode}</p>
      <p> Goal node id(s): {goalNodes}</p>
    </div>
    </div>
  );

}


ReactDOM.render(
  <App />,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
