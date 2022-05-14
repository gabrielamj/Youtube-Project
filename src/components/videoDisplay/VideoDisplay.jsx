import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { BiLike } from 'react-icons/bi';
import { GrOverview } from 'react-icons/gr';
// import styles from './home.module.scss';
import styles from '../videoDisplay/videoDisplay.module.scss';
import { useDataFetch } from '../hooks/useDataFetch';

function VideoDisplay({ videoId }) {
    const [data, fetchData, loading] = useDataFetch();

    useEffect(() => {
        fetchData(
          // eslint-disable-next-line max-len
          `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${process.env.REACT_APP_YOUTUBE_APY_KEY}&part=snippet,statistics`
        );
      }, []);

  return (
    <>
    {loading ? (
      <div>Loading...</div>
      ) : (
        <div className={styles.container}>
        <iframe
          title={videoId}
          width="100%"
          height="50%"
          src={`//www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allowFullScreen
          allow={
            'accelerometer; autoplay; clipboard-write;' +
            'encrypted-media; gyroscope; picture-in-picture'
          }
        />
        <div style={{ display: 'flex', gap: '1rem' }}>
          <div>
            <BiLike /> <span> Likes: {data[0].statistics.likeCount}</span>{' '}
          </div>
          <div>
            <span>{data[0].statistics.viewCount} Views</span>{' '}
          </div>
        </div>
        <div>{console.log(data)}</div>
      </div>
        )}
    </>
  );
};

VideoDisplay.propTypes = {};

export default VideoDisplay;
