import React from 'react';

class TodoListHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        isError: false,
        title: ''
    }

    onAddTaskClick = () => {
        let newText = this.state.title;
        
        if(newText === '') {
            this.setState ({
                isError: true
            })
        } else {
            this.setState ({
                isError: false
            })
        }
        this.state.title = '';
        this.props.addTask(newText);
    }

    deleteError = (e) => {
        this.setState ({
            isError: false,
            title: e.currentTarget.value
        })
    }

    onAddTaskKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.onAddTaskClick();
        }
    }

    render = () => {
        let classForError = this.state.isError === true ? "error" : "";
        return (
            <div className="todoList-header">
                <div className="todoList-newTaskForm">
                    <input onChange={this.deleteError} 
                           ref={this.newTaskTitleRef} 
                           type="text" placeholder="New task name" 
                           className={classForError} 
                           onKeyPress={this.onAddTaskKeyPress} 
                           value={this.state.title} />
                    <button onClick={this.onAddTaskClick}>Add</button>
                </div>
            </div>
        )
    }
}

export default TodoListHeader;