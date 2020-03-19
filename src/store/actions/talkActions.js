export const createNewTalkRoom = (talk) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		const firestore = getFirestore();
		const profile = getState().firebase.profile;
		const authorId = getState().firebase.auth.uid;
		console.log(talk)
		firestore.collection('talks').add({
			...talk,
			authorId: authorId,
			postedAt: new Date(),
			profile: profile
		}).then(() =>{
			dispatch({type: 'CREATE_NEW_TALK_ROOM',talk})
		}).catch((err) => {
			dispatch({type: 'CREATE_NEW_TALK_ROOM_ERROR',err})
		})
	}
};
