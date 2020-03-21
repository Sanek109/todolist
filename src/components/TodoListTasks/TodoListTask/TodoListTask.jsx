import React from 'react';
import style from './TodoListTask.module.css';

class TodoListTask extends React.Component {
    constructor(props) {
        super(props)
    }

    state = {
        editMode: false
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactiveteEditMode = () => {
        this.setState({
            editMode: false
        })
    }

    onIsDoneChanged = (e) => {
        this.props.changeStatus(this.props.task.id, e.currentTarget.checked);
    }

    onTitleChanged = (e) => {
        this.props.changeTitle(this.props.task.title, e.currentTarget.value)
    }

    deleteTaskTodolist = (e) => {
        this.props.deleteTask(this.props.task.id)
    }

    render = () => {
        let classForCheckbox = this.props.task.isDone === true ? "todoList-task" : "todoList-task done";
        return (
            <div>
                <div className={classForCheckbox} >
                    <input type="checkbox" checked={this.props.task.isDone} onChange={this.onIsDoneChanged} />
                    {this.state.editMode
                    ? <input onBlur={this.deactiveteEditMode} autoFocus={true} value={this.props.task.title} onChange={this.onTitleChanged} /> 
                    : <span onDoubleClick={this.activateEditMode}>{this.props.task.title}<button className={style.buttonDelete} onClick={this.deleteTaskTodolist}>x</button></span>}
                </div>
            </div>
        )
    }
}



export default TodoListTask;