import React from 'react';
import {connect} from "react-redux";
import {onShowFiltersClick, onHideFiltersClick} from "./../../store/reducerFooter"
import style from './TodoList.module.css';

class TodoListFooter extends React.Component {
    constructor(props) {
        super(props)
    }

    onAllFilterClick = () => {
        this.props.changeFilter('All')
    }

    onCompletedFilterClick = () => {
        this.props.changeFilter('Completed')
    }

    onActiveFilterClick = () => {
        this.props.changeFilter('Active')
    }

    render = () => {
        let classForAll = this.props.filterValue === "All" ? "filter-active" : "";
        let classForCompleted = this.props.filterValue === "Completed" ? "filter-active" : "";
        let classForActive = this.props.filterValue === "Active" ? "filter-active" : "";

        return (
            <div className="todoList-footer">
                {!this.props.isHidden && <div>
                    <button onClick={ this.onAllFilterClick } className={classForAll}>All</button>
                    <button onClick={ this.onCompletedFilterClick } className={classForCompleted}>Completed</button>
                    <button onClick={ this.onActiveFilterClick } className={classForActive}>Active</button>
                </div>}
                {!this.props.isHidden && <span className={style.spanMenu} onClick={ this.props.onShowFiltersClick }>Hide Menu</span>}
                {this.props.isHidden && <span className={style.spanMenu} onClick={ this.props.onHideFiltersClick }>Show Menu</span>}
            </div>
        )
    }
}

const mapStateToProps = (state) =>  {
    return {
        isHidden: state.reducerFooter.isHidden
    }
}


export default connect(mapStateToProps, {onShowFiltersClick, onHideFiltersClick})(TodoListFooter)
