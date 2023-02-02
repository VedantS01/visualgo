//TODO: Write Component to hold (Undirected) Graph

import { AspectRatio } from "@mui/icons-material"
import { Box, Typography } from "@mui/material"
import { Container } from "@mui/system"
import Graph from "react-graph-vis"

const GraphBox = (props) => {
    const {graph, getNetwork} = props
    const options = {
        height: "100%",
          width: "100%",
          nodes: {
              shape: "dot",
              size: 24,
          },
          layout: {
              hierarchical: false
          },
          physics: {
              forceAtlas2Based: {
                  gravitationalConstant: -26,
                  centralGravity: 0.005,
                  springLength: 230,
                  springConstant: 0.18,
              },
              maxVelocity: 146,
            //   solver: "forceAtlas2Based",
            //   solver: "repulsion",
              timestep: 0.35,
              stabilization: {
                  enabled: true,
                  iterations: 2000,
                  updateInterval: 25,
              },
          },
          edges: {
              color: "#abb4be",
              size: 112,
          },
          interaction: {
            multiselect: true
          },
          groups: {
            _start: {color: 'red', shape: "triangle"} ,
            _goal: {color: 'green', shape: "triangle"} ,
            _default: { shape: "dot"}
          }
      };

    const events = {
        // select: ({ nodes, edges }) => {
        //   console.log("Selected nodes:");
        //   console.log(nodes);
        //   console.log("Selected edges:");
        //   console.log(edges);
        //   // alert("Selected node: " + nodes);
        //   if(nodes.size === 0 && edges.size === 0)
        //   setDeleteButton(false);
        //   else
        //   setDeleteButton(true);
        // },
      }
    return (
        <Graph graph={graph} options={options} events={events} style={{flex: 1, height: '700px'}} getNetwork={getNetwork} />
    )
}

export default GraphBox