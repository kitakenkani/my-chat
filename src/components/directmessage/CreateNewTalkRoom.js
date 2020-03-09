import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createNewTalkRoom } from '../../store/actions/talkActions'


class CreateNewTalkRoom extends Component {
	state = {
		email: ''
	}
	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}
	handleSubmit = (e) => {
		e.preventDefault()
		this.props.createNewTalkRoom(this.state)
	}
	render() {
		return (
			<div className='container'>
				<form onSubmit={this.handleSubmit} className='white'>
					<h5 className='grey-text text-darken-3'>Create New Talk Room</h5>
					<div className='input-field'>
						<label htmlFor='email'>email</label>
						<input type='email' id='email' onChange={this.handleChange}/>
					</div>
				<div className='input-field'>
					<button className='btn pink lighten-1 z-depth-0'>Create</button>
				</div>
			</form>
			</div>
		)
	}
}


const mapDispatchToProps = (dispatch) => {
	return{
		createNewTalkRoom: (project) => dispatch(createNewTalkRoom(project))
	}
}


export default connect(null,mapDispatchToProps)(CreateNewTalkRoom);

