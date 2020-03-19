import React from 'react'
import Talk from './Talk'
import { Link } from 'react-router-dom'


const TalkList = ({talks}) => {
    return (
        <div className="project-list section">
		{ talks && talks.map(talk => {
			return (
			<Link to={'/talk/' + talk.id} key={talk.id}>
				<Talk talk={talk} />
			</Link>
			)
		})}
		</div>
    )
}

export default TalkList;
