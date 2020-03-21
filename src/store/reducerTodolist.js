const ADD_TASK = 'ADD_TASK';
const CHANGE_TASK = 'CHANGE_TASK';
const DELETE_TASK = 'DELETE_TASK';

const initialState = {
    title: 'My tasks!',
    tasks: [
        {id: 0, title: "GitHub", isDone: false},
        {id: 1, title: "Redux", isDone: false},
        {id: 2, title: "React", isDone: true}
    ]
}

const reducerTodolist = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.newTask]
            }
        case CHANGE_TASK: {
            return {
                ...state,
                tasks: state.tasks.map(t => {
                    if (t.title != action.taskId && t.id != action.taskId) {
                        return t;
                    } else {
                        return {...t, ...action.obj}
                    }
                })
            }
        }
        case DELETE_TASK: {
            return {
                ...state,
                tasks: state.tasks.filter(t => {
                    if(t.id !== action.taskId ) {
                        return  t;
                    }
                })
            }
        }
    }

    return state;
}

export const addTask = (newTask) => {
    return {
        type: "ADD_TASK",
        newTask
    }
}

export const changeTask = (taskId, obj) => {
    return {
        type: CHANGE_TASK,
        taskId,
        obj
    }
}

export const deleteTask = (taskId) => {
    return {
        type: DELETE_TASK,
        taskId
    }
}

export default reducerTodolist;