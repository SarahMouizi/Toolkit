import React from 'react';
import ToDoItem from './ToDoItem';
import { useSelector } from 'react-redux';


const ToDoListView = () => {
	const todos = useSelector((state) => state.todos);

	return (
		<ul className='list-group'>
			{todos.map((todo) => (
				<ToDoItem id={todo.id} title={todo.title} completed={todo.completed}  edit ={todo.edit} />
			))}
		</ul>
	);
};

export default ToDoListView;
