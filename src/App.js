import React, { Component } from 'react';
import { Navbar } from './components/Navbar';
import { TodoRows } from './components/TodoRows';
import 'bootstrap/dist/css/bootstrap.css'

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			userName: 'Lusine',
			todoItems: [
				{ action: '', done: false },
			],
			newTodo: '',
		};
	}

	updateValue = (event) => {
		this.setState({ newTodo: event.target.value });
	};

	newTodo = () => {
		this.setState({
			todoItems: [
				...this.state.todoItems,
				{ action: this.state.newTodo, done: false },
			],
		});
	};

	todoRows = () =>
		this.state.todoItems.map((item) => (
			<TodoRows key={item.action} item={item} />
		));


	render = () => (
		<div className="container">
			<div className="row">
				<Navbar name={this.state.userName} />
				<div className="col-12">
					<input
						className="form-control"
						value={this.state.newToDo}
						onChange={this.updateValue}
					/>
					<button className="btn btn-primary" onClick={this.newTodo}>
						Add
					</button>
				</div>
				<div className="col-12">
					<table className="table">
						<thead>
							<tr>
								<th>Task</th>
								<th>Complete</th>
							</tr>
						</thead>
						<tbody>{this.todoRows()}</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
