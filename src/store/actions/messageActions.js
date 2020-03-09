
export const DirectMessage = (project) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		const firestore = getFirestore();
		const profile = getState().firebase.profile;
		const authorId = getState().firebase.auth.uid;

		firestore.collection('projects').add({
		...project,
		authorFirstName: profile.firstName,
		authorLastName: profile.lastName,
		authorId: authorId,
		postedAt: new Date()
		}).then(() => {
			dispatch({ type: 'SEND_A_MESSAGE',project })
		}).catch((err) => {
			dispatch({ type:'SEND_A_MESSAGE_ERROR', err })
		})
	}
};
