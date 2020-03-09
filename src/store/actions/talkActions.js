export const createNewTalkRoom = (project) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		const firestore = getFirestore();
		const profile = getState().firebase.profile;
		const authorId = getState().firebase.auth.uid;
		console.log(project)
		firestore.collection('talks').add({
			...project,
			authorId: authorId,
			postedAt: new Date(),
			profile: profile
		}).then(() =>{
			dispatch({type: 'CREATE_NEW_TALK_ROOM',project})
		}).catch((err) => {
			dispatch({type: 'CREATE_NEW_TALK_ROOM_ERROR',err})
		})
	}
};
