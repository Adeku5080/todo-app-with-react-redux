export const addTask = (data) => ({
  type: "ADD_TASK",
  payload: data,
});

export const fetchTasks = (data) => ({
  type: "FETCH_TASK",
  payload: data,
});

export const deleteTasks = (task) => ({
  type: "DELETE_TASK",
  payload: task,
});

export const updateTasks = (task) => ({
  type: "UPDATE_TASK",
  payload: task,
});
