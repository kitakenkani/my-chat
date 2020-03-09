import React, { Component } from 'react'
import TalkList from './TalkList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Talks extends Component {
	render() {
		console.log(this.props)
		const {projects} = this.props
		return(
			<div className='dashboard container'>
			<div className='row'>
			<div className='col s12 m6'>
				<TalkList projects={projects} />
			</div>
			</div>
			</div>
		)
	}

}

const mapStateToProps = (state) => {
	console.log(state)
	return {
		projects: state.project.projects
	}
}

export default compose(
	connect(mapStateToProps),
	firestoreConnect([
		{collection: 'projects'}
	]))(Talks);

