

function bin_graph(num_nodes=1000) {
    // alert('here we go!')
    const n = Math.log2(num_nodes)
    let graph = require('ngraph.generators').balancedBinaryTree(n)
    // alert('nodes: '+graph.getNodeCount())
    let nodes = []
    graph.forEachNode(function(node) {nodes.push({id:node.id, label:node.id, group: '_default'})})
    let edges = []
    graph.forEachLink(function(link) {edges.push({from:link.fromId, to:link.toId})})
    return {nodes: nodes, edges: edges}
}

export default bin_graph;