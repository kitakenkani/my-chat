
export const sendMessage = (message) => {
	return (dispatch, getState, {getFirebase, getFirestore}) =>{
		const firestore = getFirestore();
		const profile = getState().firebase.profile;
		const authorId = getState().firebase.auth.uid
		firebase.collection
		

	}
}

