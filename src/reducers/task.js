import { ADD_TASK, DELETE_TASK } from "../constants";

const initialState = {
  tasks: []
};

export default function task(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return Object.assign({}, state, {
        tasks: [
          ...state.tasks,
          {
            ...action.task
          }
        ]
      });
    case DELETE_TASK:
      return Object.assign({}, state, {
        tasks: state.tasks.filter(task => task !== action.task)
      });
    default:
      return state;
  }
}
