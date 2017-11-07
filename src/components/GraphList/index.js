import React from 'react'
import NodeComponent from '../NodeComponent'
import Separator from '../Separator'
import { Graph } from '../../logic/Graph'

let nodes = [
	{sValue: "I'm first" , numValue: 1},
	{sValue: "I'm second", numValue: 2},
	{sValue: "I'm third" , numValue: 3},
	{sValue: "I'm fourth", numValue: 4},
]

let arcs = [
	{start:2,end:1,value:1},
	{start:2,end:0,value:1},
	{start:2,end:3,value:1},
	{start:3,end:2,value:1},
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
		console.log( g );
		console.log( g.checkIfPathExists( 0, 1) )
		this.setState({
			graph: g
		})
	}

	renderGraphInfo = () =>{
		const { graph: { nodes } } = this.state;
		let info = []
		info.push(<Separator key={-1} />)
		info.push(nodes.map((item) => {
			return <NodeComponent key={item.key} node={item.node} />
		}))
		return info;
	}

	render(){
		return(
			<div>
				{this.renderGraphInfo()}
			</div>
		);
	}
}

export default GraphList;
