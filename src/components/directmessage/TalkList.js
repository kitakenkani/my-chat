import React from 'react'
import Talk from './Talk'
import { Link } from 'react-router-dom'


const TalkList = ({projects}) => {
    return (
        <div className="project-list section">
		{ projects && projects.map(project => {
			return (
			<Link to={'/talk/' + project.id} key={project.id}>
				<Talk project={project} />
			</Link>
			)
		})}
		</div>
    )
}

export default TalkList;
