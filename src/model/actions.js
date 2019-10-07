export const SET_COMPANIES_LIST = "setCompaniesList";
export const SET_COMMENTS = "setComments";
export const ADD_COMMENT = "addComment";


export  function setCompaniesList(companies = []) {
    return {type: SET_COMPANIES_LIST, data: companies}
}
export function setComments(comments = []) {
    return {type: SET_COMMENTS, data: comments}
}
export function addComment(comment) {
    return {type: ADD_COMMENT, data: comment}
}