import React from 'react';
import TodoListTask from './TodoListTask/TodoListTask';

class TodoListTasks extends React.Component {
    render = () => {
        let taskElements = this.props.tasks.map( task => <TodoListTask deleteTask={this.props.deleteTask} task={task} changeStatus={this.props.changeStatus}
            changeTitle={this.props.changeTitle} /> )
        return (
            <div className="todoList-task">
                {taskElements}
            </div>
        )
    }
}



export default TodoListTasks;