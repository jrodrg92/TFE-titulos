import { ADD_ARTICLE } from "../constants/action-types"; 

const initialState = {
  articles: [
      {
        title : 'usuario',
        id : 1
      },
      {
        title : 'Univeridad',
        id : 2
      },
      {
        title : 'Empresa',
        id : 3
      }
  ]
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }
  return state;
}

export default rootReducer;