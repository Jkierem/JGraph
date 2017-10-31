import React from 'react'
import { Graph , Node } from '../../logic/Graph'

let nodes = [
	{sValue: "I'm first" , numValue: 1},
	{sValue: "I'm second", numValue: 2},
	{sValue: "I'm third" , numValue: 3},
	{sValue: "I'm fourth", numValue: 4},
]

let arcs = [
	{start:1,end:2,value:1},
	{start:0,end:2,value:1},
	{start:3,end:2,value:1},
	{start:2,end:3,value:1}
]

class GraphList extends React.Component{
	constructor(props){
		super(props);
		this.state={}
	}

	componentWillMount = () =>{
		let g = new Graph();
		g.addNodesFromDataArray( nodes );
		g.addDirectedArcs(arcs );
		this.setState({
			graph: g
		})
	}

	renderGraphInfo = () =>{
		const { graph: { nodes } } = this.state;
		let info = nodes.map((item) => {
			return <NodeComponent key={item.key} node={item} />
		})
		return info;
	}

	render(){
		return(<div/>);
	}
}

export default GraphList;
