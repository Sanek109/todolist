import React from 'react';
import '../App.css';
import TodoListTasks from './TodoListTasks/TodoListTasks';
import TodoListFooter from './TodoListFooter/TodoListFooter';
import TodoListTitle from './TodoListHeader/TodoListTitle';
import AddNewItemForm from './TodoListHeader/AddNewItemForm';
import {addTask, changeTask, deleteTask} from "../store/reducerTodolist";
import {connect} from 'react-redux';


class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        filterValue: "All",
    };

    // componentDidMount() {
    //     this._restoreState();
    // }

    nextTaskId = 4



    // _saveState = () => {
    //     let stateAsString = JSON.stringify(this.state);
    //     localStorage.setItem('our-state' + this.props.id, stateAsString);
    // }
    //
    // _restoreState = () => {
    //     let state = {
    //         tasks: [],
    //         filterValue: "All"
    //     };
    //     let stateAsString = localStorage.getItem('our-state' + this.props.id);
    //     if (stateAsString != null) {
    //         state = JSON.parse(stateAsString);
    //     }
    //     this.setState(state);
    // }

    addItem = (newText) => {
        let newTask = {
            id: this.nextTaskId,
            title: newText,
            isDone: false,
        }
        this.props.addTask(newTask);
        this.nextTaskId++;
    }

    changeFilter = (newFilterValue) => {
        this.setState({
            filterValue: newFilterValue
        })
    }

    changeStatus = (taskId, isDone) => {
        this.props.changeTask(taskId, {isDone: isDone});
    }

    changeTitle = (taskId, title) => {
        this.props.changeTask(taskId, {title: title});
    }

    render = () => {
        return (
            <div className="App">
                <div className="todoList">
                    <div className="todoList-header">
                        <TodoListTitle title={this.props.title}/>
                        <AddNewItemForm addItem={this.addItem}/>
                    </div>
                    <TodoListTasks changeStatus={this.changeStatus} changeTitle={this.changeTitle}
                                   deleteTask={this.props.deleteTask}
                                   tasks={this.props.tasks.filter(t => {
                                       if (this.state.filterValue === 'All') {
                                           return true;
                                       } else if (this.state.filterValue === 'Active') {
                                           return t.isDone === false;
                                       } else if (this.state.filterValue === 'Completed') {
                                           return t.isDone === true;
                                       }
                                   })}/>
                    <TodoListFooter changeFilter={this.changeFilter} filterValue={this.state.filterValue}/>
                </div>
            </div>
        );
    }
}

const connectedTodoList = connect(null, {addTask, changeTask, deleteTask})(TodoList);

export default connectedTodoList;