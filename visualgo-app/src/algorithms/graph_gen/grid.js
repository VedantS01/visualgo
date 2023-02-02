import grid from 'ngraph.generators'

function grid_graph(num_nodes=100, type='triangular') {
    // alert('here we go!')
    const n = Math.floor(Math.sqrt(num_nodes))
    
    let graph = require('ngraph.generators').grid(n,n)
    // alert('nodes: '+graph.getNodeCount())
    let nodes = []
    graph.forEachNode(function(node) {nodes.push({id:node.id, label:node.id, group: '_default'})})
    let edges = []
    graph.forEachLink(function(link) {edges.push({from:link.fromId, to:link.toId})})
    return {nodes: nodes, edges: edges}
}

export default grid_graph;