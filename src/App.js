import React from 'react';
import './index.css';
import TodoList from './components/TodoList';
import { connect } from 'react-redux';
 
class App extends React.Component {
    constructor(props) {
        super(props)
    }

    // componentDidMount() {
    //     this._restoreState();
    // }
    //
    // _saveState = () => {
    //     let stateAsString = JSON.stringify(this.props.state);
    //     localStorage.setItem('our-state', stateAsString);
    // }
    //
    // _restoreState = () => {
    //     let state = this.props.state;
    //     let stateAsString = localStorage.getItem('our-state');
    //     if (stateAsString != null) {
    //         state = JSON.parse(stateAsString);
    //     }
    //     this.setState(state);
    // }

    render = () => {
        return (
            <div>
                <div className="App">
                    <TodoList tasks={this.props.tasks} title={this.props.title} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.reducerTodolist.tasks,
        title: state.reducerTodolist.title
    }
}

const connectedApp = connect(mapStateToProps, null)(App);

export default connectedApp;

// componentDidMount() {
//     this._restoreState();
// }
//
// _saveState = () => {
//     let stateAsString = JSON.stringify(this.state);
//     localStorage.setItem('our-state' + this.state.todolists.id, stateAsString);
// }
//
// _restoreState = () => {
//     let state = this.props.state;
//     let stateAsString = localStorage.getItem('our-state' + this.state.todolists.id);
//     if (stateAsString != null) {
//         state = JSON.parse(stateAsString);
//     }
//     this.setState(state);
// }