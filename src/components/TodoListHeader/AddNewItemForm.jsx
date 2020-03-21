import React from 'react';

class AddNewItemForm extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        isError: true,
        title: ''
    }

    onAddItemClick = () => {
        let newText = this.state.title;
        this.state.title = '';
        if(newText === '') {
            this.setState ({
                isError: true
            })
        } else {
            this.setState ({
                isError: false
            })
        }
        this.setState ({
            isError: true 
        })

        this.props.addItem(newText);
    }

    deleteError = (e) => {
        this.setState ({
            isError: false,
            title: e.currentTarget.value
        })
    }

    onAddItemKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.onAddItemClick();
        }
    }

    render = () => {
        let classForError = this.state.isError === true ? "error" : "";
        return (
            <div className="todoList-header">
                <div className="todoList-newTaskForm">
                    <input onChange={this.deleteError} 
                           ref={this.newTaskTitleRef} 
                           type="text" placeholder="New item name" 
                           className={classForError} 
                           onKeyPress={this.onAddItemKeyPress} 
                           value={this.state.title} />
                    <button onClick={this.onAddItemClick}>Add</button>
                </div>
            </div>
        )
    }
}

export default AddNewItemForm;