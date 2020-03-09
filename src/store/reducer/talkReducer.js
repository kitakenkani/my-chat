const initState = {
	projects: [
		{id: '1', email:'test1@gamil.com'},
		{id: '2', email:'test2@gamil.com'},
		{id: '3', email:'test3@gamil.com'}
	]
}
const talkReducer = ( state=initState, action) => {
	switch (action.type) {
		case 'CREATE_NEW_TALK_ROOM':
			console.log('created talk room', action.project)
			return state;
		case 'CREATE_NEW_TALK_ROOM_ERROR':
			console.log('create talk room error',action.err)
			return state;
		default:
			return state;
	}
}

export default talkReducer;

