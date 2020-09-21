import { ADD_TASK, DELETE_TASK, COMPLETE_TASK, SHOW_COMPLETED, FETCH_TASKS } from "../constants";

const initialState = {
  showCompleted: false,
  tasks: []
};

export default function task(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return Object.assign({}, state, {
        tasks: [...state.tasks, action.task]
      });

    case DELETE_TASK:
      return Object.assign({}, state, {
        tasks: state.tasks.filter(task => task !== action.task)
      });

    case COMPLETE_TASK:
      return Object.assign({}, state, {
        tasks: [
          ...state.tasks.filter(task => task !== action.task),
          {
            ...action.task,
            completed: true
          }
        ]
      });

    case FETCH_TASKS:
      return Object.assign({}, state, {
        tasks: [...state.tasks, ...action.tasks]
      });

    case SHOW_COMPLETED:
      return Object.assign({}, state, {
        showCompleted: action.show
      });

    default:
      return state;
  }
}
