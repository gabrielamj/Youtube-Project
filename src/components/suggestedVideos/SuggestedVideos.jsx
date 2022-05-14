import React from 'react'
import PropTypes from 'prop-types'
import { useEffect } from 'react'
import Item from '../content/Item'
import { Link } from 'react-router-dom'
import { useDataFetch } from '../hooks/useDataFetch'

const SuggestedVideos = ({videoId}) => {
  const [data, fetchData, loading] = useDataFetch();
  useEffect(() => {
    fetchData(
      // eslint-disable-next-line max-len
      `https://youtube.googleapis.com/youtube/v3/search?&part=snippet&relatedToVideoId=${videoId}&key=${process.env.REACT_APP_YOUTUBE_APY_KEY}&maxResults=6&type=video`
    );
  }, [])

  const filterList = (list) => {
    return list.filter((item) => item.snippet !== undefined )
  }

  return (
    <>
    {loading ? <div>Loading...</div> : (
      <div className="related-videos">
        <div className="related-videos__list">
          {filterList(data).map(
            (
              { id: { videoId }, etag, snippet: { title, description, thumbnails } },
              index
            ) => {
              return (
                <Link to={`/${videoId}`} key={videoId + index}>
                  <Item
                    key={etag + index}
                    title={title}
                    thumbnails={thumbnails}
                  />
                </Link>
              );
            }
          )}
        </div>
      </div>
    )}
    </>
  )
}

SuggestedVideos.propTypes = {}

export default SuggestedVideos
