import React, { Component } from 'react'
import TalkList from './TalkList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'


class Talks extends Component {
	render() {
		console.log(this.props)
		const {talks} = this.props
		return(
			<div className='dashboard container'>
			<div className='row'>
			<div className='col s12 m6'>
				<TalkList talks={talks} />
			</div>
			</div>
			</div>
		)
	}

}

const mapStateToProps = (state) => {
	console.log(state)
	return {
		talks: state.firestore.ordered.talks
	}
}

export default compose(
	connect(mapStateToProps),
	firestoreConnect([
		{collection: 'talks'}
	]))(Talks);

