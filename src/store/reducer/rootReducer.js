
import authReducer from './authReducer'
import projectReducer from './projectReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'
import talkReducer from './talkReducer'
import messageReducer from './messageReducer'


const rootReducer = combineReducers({
	auth: authReducer,
	project: projectReducer,
	talk: talkReducer,
	message: messageReducer,
	firestore: firestoreReducer,
	firebase: firebaseReducer

})

export default rootReducer;

