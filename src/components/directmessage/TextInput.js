import React, { Component } from 'react'
import { connect} from 'react-redux'
import { Redirect } from 'react-router-dom'



import TextField from '@material-ui/core/TextField'
import '../../TextInput.css'
import SendButtons from './SendButton'

//import { bindActionCreator } from 'redux'
//import { connect } from 'react-redux'

//import * as actions from '../../store/actions'



class TextInput extends Component {
	state = {
		text: ''
	}
	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}
	handleSubmit = (e) => {
		e.preventDefault()
		this.props.createProject(this.state)
		this.props.history.push()
	}

	render() {
		return (
			<React.Fragment>
			<form className='wrap' noValidate onSubmit={this.handleSubmit} autoComplete='off'>
			<TextField
			id='text'
			label='メッセージを入力'
			className='text'
			onChange={e => this.props.onChange(e.target.value)}
			margin='normal'
			/>
			<SendButtons />
			</form>
			</React.Fragment>
		);
	}
}


const mapStateToProps = (state) => {
	return {
		auth: state.firebase.auth
	}
}


export default TextInput;

