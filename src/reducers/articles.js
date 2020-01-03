export const getArticles = (state = {}, action) => {
  switch(action.type) {
    case 'GET_ARTICLES':
      return {...state, ...action.articles}
    default: 
      return state
  }
}