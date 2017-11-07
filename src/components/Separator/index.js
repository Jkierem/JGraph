import React from 'react'

class Separator extends React.Component{
	constructor(props){
		super(props);
		this.state={}
	}

	render(){
		const {color} = this.props
		return(
			<div
				style={{
					height: 1 ,
					width: '100%' ,
					background: color?color:'#000' ,
					marginTop: 15 ,
					marginBottom: 15
				}}
			/>);
	}
}

export default Separator;
