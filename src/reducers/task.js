import { ADD_TASK } from "../constants";

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
            title: action.taskTitle
          }
        ]
      });
    default:
      return state;
  }
}
