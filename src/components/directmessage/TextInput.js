import React, { Component } from 'react'

import TextField from '@material-ui/core/TextField'
import '../../TextInput.css'
import SendButtons from './SendButton'

//import { bindActionCreator } from 'redux'
//import { connect } from 'react-redux'

//import * as actions from '../../store/actions'



class TextInput extends Component {
	render() {
		return (
			<React.Fragment>
			<form className='wrap' noValidate autoComplete='off'>
			<TextField
			id='standard-text'
			label='メッセージを入力'
			className='text'
			margin='normal'
			/>
			<SendButtons />
			</form>
			</React.Fragment>
		);
	}
}

export default TextInput;

