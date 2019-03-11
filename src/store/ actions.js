const ADDAUTHOR = "ADD_AUTHOR";
const DELETEAUTHOR = "DELETE_AUTHOR";

export const addAuthor = author => {
  return {
    type: ADDAUTHOR,
    payload: author
  };
};

export const deleteAuthor = author => {
  return {
    type: DELETEAUTHOR,
    payload: author
  };
};
