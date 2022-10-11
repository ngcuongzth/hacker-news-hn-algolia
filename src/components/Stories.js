import React, { useEffect } from 'react'
import { useGlobalContext } from '../store/context'
import useAxios from './../custom/useAxios'
import { FETCH_STORIES_SUCCESS, HANDLE_REMOVE_STORY, } from '../store/actions'
import Loading from './../components/Loading'

const Stories = () => {
  const { API_ENDPOINT, state, dispatch } = useGlobalContext();
  const { query, currentPage, hits } = state;
  const { loading, response } = useAxios(`${API_ENDPOINT}query=${query}&page=${currentPage}`)
  useEffect(() => {
    if (loading === true) {
      return;
    }
    else {
      dispatch({
        type: FETCH_STORIES_SUCCESS,
        payload: {
          hits: response.hits,
          totalPages: response.nbPages
        }
      })
    }
    // eslint-disable-next-line
  }, [loading])

  if (loading) {
    return <Loading />
  }
  else {
    if (hits) {
      return <section className="stories">
        {hits.map((story) => {
          const { title, objectID, points, author, num_comments, url, } = story;
          return (
            <article className="story" key={objectID}>
              <h4 className="title">{title}</h4>
              <p className="info">
                {points} points by
                <span>{author} | {num_comments} comments </span>
              </p>
              <div>
                <a href={url} rel="noreferrer" target="_blank" className="read-link">read more</a>
                <button className="remove-btn"
                  onClick={() => {
                    const newHits = hits.filter((currentHit, index) => {
                      if (currentHit.objectID === objectID) {
                        return false;
                      }
                      return true;
                    })
                    dispatch({
                      type: HANDLE_REMOVE_STORY,
                      payload: newHits
                    })
                  }}
                >remove</button>
              </div>
            </article>
          )
        })}
      </section>
    }
  }
}
export default Stories
