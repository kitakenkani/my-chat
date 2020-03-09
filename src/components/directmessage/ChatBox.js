import React from 'react';


export default class ChatBox extends React.Component {
	render() {
	return(
		<div className="ChatBox">
			<div className="">
				<input name="userName" onChange={this.props.onTextChange} className="" placeholder="名前"/>
<input name='prfileImage' onChange={this.props.onTextChange} className="" placeholder="プロフィール写真"/>
			</div>
		</div>
		);
	}
}
