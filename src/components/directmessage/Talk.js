import React from 'react'
import moment from 'moment'


const  Talk = ({project}) => {
	return (
		<div className='card z-depth-0 project-summary'>
			<div className='card-content grey-text text-darken-3'>
				<span className='card-title'>{project.title}</span>
				<p>from  {project.firstName} {project.lastName} </p>
				<p className='grey-text'>aaa</p>
			</div>
		</div>
	
	)
}

export default Talk;


