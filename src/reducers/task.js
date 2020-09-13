import { ADD_TASK, DELETE_TASK, COMPLETE_TASK, SHOW_COMPLETED } from "../constants";

const initialState = {
  showCompleted: false,
  tasks: [
    {
      title: "title",
      description: "Short Description"
    },
    {
      title: "title 2",
      description:
        "Long Description Long Description Long Description Long Description Long Description Long Description Long Description Long Description Long Description Long Description Long Description Long Description Long Description Long Description Long Description Long Description Long Description Long Description Long Description Long Description Long Description Long Description Long Description "
    },

    {
      title: "completed",
      description: "Short Description",
      completed: true
    }
  ]
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

    case SHOW_COMPLETED:
      return Object.assign({}, state, {
        showCompleted: action.show
      });
    default:
      return state;
  }
}
