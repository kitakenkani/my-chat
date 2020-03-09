import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'


import AlignItemsList from './AlignItemsList'
import TextInput from './TextInput'



const TalkDetails = (props) => {
	const { auth } = props;
	console.log(props)
	if (!auth.uid) return <Redirect to='/createtalkroom'/>
		return(
			<React.Fragment>
			<div className='Talk'>
			<AlignItemsList/>
			<TextInput value='メッセージを入力' />
			</div>
			</React.Fragment>
		);
	} 


const mapStateToProps = (state,ownProps) => {
	const id = ownProps.match.params.id;
	const projects = state.firestore.data.projects;
	const project = projects ? projects[id] : null
	return {
		project: project,
		auth: state.firebase.auth
	}
}



export default compose(
	connect(mapStateToProps),
	firestoreConnect([
		{ collection: 'projects' }
	])
)(TalkDetails);




