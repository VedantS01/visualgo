import bin_graph from "./binTree"
import grid_graph from "./grid"

function generateGraph (nodes, grid, scheme) {
    // let data = {
    //   nodes: [
    //     { id: 1, label: "Node 1", title: "node 1 tootip text" },
    //     { id: 2, label: "Node 2", title: "node 2 tootip text" },
    //     { id: 3, label: "Node 3", title: "node 3 tootip text" },
    //     { id: 4, label: "Node 4", title: "node 4 tootip text" },
    //     { id: 5, label: "Node 5", title: "node 5 tootip text" }
    //   ],
    //   edges: [
    //     { from: 1, to: 2 },
    //     { from: 1, to: 3 },
    //     { from: 2, to: 4 },
    //     { from: 4, to: 2 },
    //     { from: 2, to: 1 },
    //     { from: 2, to: 5 }
    //   ]
    // };
    let data = null
    if(grid == 'SQR') {
      data = grid_graph(nodes, 'square')
      // return data;
    } else if(grid == 'BIN') {
      data = bin_graph(nodes)
      // return data;
    } else {
      alert('not implemented error!')
      return {nodes : [], edges : []}
    }
  
  
    if(scheme == 'None') {
      return data;
    }
    else if(scheme == 'N5') {
      let n = data.nodes.length
      let rs = n / 20
      while(rs > 0) {
        rs -= 1
        const random = Math.floor(Math.random() * data.nodes.length);
        const el = data.nodes.splice(random, 1)[0];
        data.edges.forEach(element => {
          if(element.from == el || element.to == el) {
            const index = data.egdes.indexOf(element)
            data.edges.splice(index, 1)
          }
        });
        console.log(el.id);
      }
    } else if(scheme == 'E5') {
      let n = data.edges.length
      let rs = n / 20
  
    // alert(data.nodes.length + " " + n + " " + rs)
      while(rs > 0) {
        rs -= 1
        const random = Math.floor(Math.random() * data.edges.length);
        const el = data.edges.splice(random, 1)[0];
        console.log(el.from + " " + el.to)
      }
    }
    else if(scheme == 'N10') {
      let n = data.nodes.length
      let rs = n / 10
      while(rs > 0) {
        rs -= 1
        const random = Math.floor(Math.random() * data.nodes.length);
        const el = data.nodes.splice(random, 1)[0];
        data.edges.forEach(element => {
          if(element.from == el || element.to == el) {
            const index = data.egdes.indexOf(element)
            data.edges.splice(index, 1)
          }
        });
        console.log(el.id);
      }
    } else if(scheme == 'E10') {
      let n = data.edges.length
      let rs = n / 10
  
    // alert(data.nodes.length + " " + n + " " + rs)
      while(rs > 0) {
        rs -= 1
        const random = Math.floor(Math.random() * data.edges.length);
        const el = data.edges.splice(random, 1)[0];
        console.log(el.from + " " + el.to)
      }
    }
    else if(scheme == 'N20') {
      let n = data.nodes.length
      let rs = n / 5
      while(rs > 0) {
        rs -= 1
        const random = Math.floor(Math.random() * data.nodes.length);
        const el = data.nodes.splice(random, 1)[0];
        data.edges.forEach(element => {
          if(element.from == el || element.to == el) {
            const index = data.egdes.indexOf(element)
            data.edges.splice(index, 1)
          }
        });
        console.log(el.id);
      }
    } else if(scheme == 'E20') {
      let n = data.edges.length
      let rs = n / 5
  
    // alert(data.nodes.length + " " + n + " " + rs)
      while(rs > 0) {
        rs -= 1
        const random = Math.floor(Math.random() * data.edges.length);
        const el = data.edges.splice(random, 1)[0];
        console.log(el.from + " " + el.to)
      }
    }
    else {
      alert('not implemented error!')
      return data;
    }
    
    return data
  }

export default generateGraph;