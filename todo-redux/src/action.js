export const ADD = (form) => ({
  type: "ADD",
  payload: form,
});

export const DELETE = (id) => ({
  type: "DELETE",
  payload: { id },
});

export const UPDATE_FORM = (payload) => ({
  type: "UPDATE_FORM",
  payload,
});
