import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList'
import { connect } from 'react-redux'
import {firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect, Link } from 'react-router-dom'
import Notification from './Notifications'

class Dashboard extends Component {
	render(){
		const { projects, auth, notifications } = this.props;
		if (!auth.uid) return <Redirect to='/signin'/>

		return(
		<div className='dashboard container'>
	
			<div className='row'>
					<div className='col s12 m6'>
						<ProjectList projects={projects}/>
					</div>
					<div className='col s12 m5 offset-ml'>
						<Notification notifications={notifications}/>
					</div>
				<div >	
			<Link to='/tweet'>
					<span  className="btn-floating btn-large cyan pulse"><i className="material-icons">edit</i></span>
			</Link>		
</div>
			</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		projects: state.firestore.ordered.projects,
		auth: state.firebase.auth,
		notifications: state.firestore.ordered.notifications
	}
}


export default compose( 
	connect(mapStateToProps),
	firestoreConnect([
		{ collection: 'projects',orderBy: ['createdAt','desc'] },
		{ collection: 'notifications',limit: 3, orderBy:['time', 'desc'] }
	])
)(Dashboard);

