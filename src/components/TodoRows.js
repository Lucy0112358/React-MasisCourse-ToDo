import React, { Component } from 'react';
export class TodoRows extends Component {
	render = () => (
		<tr>
			<td>{this.props.item.action}</td>
		
		</tr>
	);
}
