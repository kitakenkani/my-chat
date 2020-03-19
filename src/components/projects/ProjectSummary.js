import React from 'react'
import moment from 'moment'


const  ProjectSummary = ({project}) => {
			console.log(project)
return (

//	<div className='col s12 m8 offset-m2 16 offset-13'>
		<div className='card-panel grey lighten-5 z-depth-1'>
			<p className='grey-text'>@{project.authorHandleName}</p>

		<div className='row valign-wrapper'>
			<div className='col s2'>
					<p className='btn btn-floating pink lighten-1'>{project.authorFirstName[0]}{project.authorLastName[0]}</p>
				</div>
				<div className='col s10'>
					<span className='black-text'>
					{project.content}
					</span>
						<p className='grey-text'>{moment(project.createdAt.toDate()).fromNow()}</p>
				</div>
							</div>
		</div>
//	</div>

/*
		<div className='card z-depth-0 project-summary'>
			<div className='card-content grey-text text-darken-3'>
				<span className='card-title'>{project.title}</span>
				<p>Posted by the {project.authorFirstName} {project.authorLastName} </p>
				<p className='grey-text'>{moment(project.createdAt.toDate()).calendar()}</p>
			</div>
		</div>
*/

	
	)
}

export default ProjectSummary;


