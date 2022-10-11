import React from 'react'
import { useGlobalContext } from '../store/context'
import { HANDLE_CHANGE_INPUT } from '../store/actions';
const SearchForm = () => {
  const { state, dispatch } = useGlobalContext();
  const { query } = state;
  return (
    <div className="search-form">
      <h2>search hacker news</h2>
      <input type="text" className="form-input"
        onChange={(e) => {
          dispatch({
            type: HANDLE_CHANGE_INPUT,
            payload: e.target.value
          })
        }}
        value={query} />
    </div>
  )
}

export default SearchForm
