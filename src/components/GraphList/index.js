import React from 'react'
import NodeComponent from '../NodeComponent'
import Separator from '../Separator'
import { Graph , PriorityQueue } from '../../logic/Graph'

class GraphList extends React.Component{
	constructor(props){
		super(props);
		this.state={}
	}

	componentWillMount = () =>{
		let g = new Graph();
		g.addVertex('monte', {B: 7, C: 8});
		g.addVertex('B', {monte: 7, F: 2});
		g.addVertex('C', {monte: 8, F: 6, G: 4});
		g.addVertex('D', {F: 8});
		g.addVertex('E', {H: 1});
		g.addVertex('F', {B: 2, C: 6, D: 8, G: 9, H: 3});
		g.addVertex('G', {C: 4, F: 9});
		g.addVertex('H', {E: 1, F: 3});

		//console.log( g.checkIfPathExists( 0, 1) )
		console.log( g.shortestPath( 'monte' , 'H') );
		console.log(g);
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

			</div>
		);
	}
}

export default GraphList;
