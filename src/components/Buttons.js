import React from 'react'
import { useGlobalContext } from '../store/context'
import {
  HANDLE_PREV_PAGE,
  HANDLE_NEXT_PAGE
} from '../store/actions';
const Buttons = () => {
  const { state, dispatch } = useGlobalContext();
  const { currentPage, totalPages } = state;
  return (
    <div className="btn-container">
      <button onClick={() => {
        dispatch({
          type: HANDLE_PREV_PAGE
        })
      }}>prev</button>
      <p>
        {currentPage + 1} of {totalPages + 1 || "?"}
      </p>
      <button onClick={() => {
        dispatch({
          type: HANDLE_NEXT_PAGE
        })
      }}>next</button>
    </div>
  )
}

export default Buttons
