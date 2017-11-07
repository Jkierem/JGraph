import React from 'react'
import Separator from '../Separator'

class NodeComponent extends React.Component{
	constructor(props){
		super(props);
		this.state={}
	}

	renderNodeData = ( ) =>{
		const { node } = this.props
		var properties = []
		for (var property in node.data) {
	    if (node.data.hasOwnProperty(property)) {
	        properties.push(<section key={property} >{`${property} : ${node.data[property]}`}</section>)
	    }
		}
		return properties
	}

	render(){
		return(
			<div style={{ minHeight: 20 , padding: 1 }}>
				<div>
					{this.renderNodeData()}
				</div>
				<Separator/>
			</div>
		);
	}
}

export default NodeComponent;
