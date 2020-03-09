

const initState = {
	sendError: null
}


const messageReducer = (state = initState, action) => {
	switch(action.type) {
		case 'SEND_A_MESSAGE_ERROR':
			console.log('sending failed');
			return {
				...state,
				sendError: 'sending failed'
			}
		case 'SEND_A_MESSAGE':
			console.log('sending success');
			return {
				...state,
				sendError: null
			}
		default:
			return state;
	}
}

export default messageReducer;


