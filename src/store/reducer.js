
import {
  FETCH_STORIES_SUCCESS,
  HANDLE_CHANGE_INPUT,
  HANDLE_NEXT_PAGE,
  HANDLE_PREV_PAGE,
  HANDLE_REMOVE_STORY
} from './actions'

const reducer = (state, action) => {
  switch (action.type) {
    case FETCH_STORIES_SUCCESS:
      const { hits, totalPages } = action.payload;
      return { ...state, hits: hits, totalPages: totalPages - 1 }
    case HANDLE_CHANGE_INPUT:
      return {
        ...state, query: action.payload
      }
    case HANDLE_NEXT_PAGE:
      if (state.currentPage <= state.totalPages - 1) {
        return {
          ...state, currentPage: state.currentPage + 1
        }
      }
      else {
        return {
          ...state, currentPage: 0
        }
      }
    case HANDLE_PREV_PAGE:
      if (state.currentPage <= 0) {
        return {
          ...state, currentPage: state.totalPages
        }
      }
      else {
        return {
          ...state, currentPage: state.currentPage - 1
        }
      }
    case HANDLE_REMOVE_STORY:
      return {
        ...state, hits: action.payload
      }
    default:
      throw new Error(`Invalid action ${action.type}`)
  }

}
export default reducer
