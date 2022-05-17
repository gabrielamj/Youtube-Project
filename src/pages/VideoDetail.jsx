import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Header from '../components/header/Header'
import { useParams } from 'react-router-dom';
import VideoDisplay from '../components/videoDisplay/VideoDisplay';
import SuggestedVideos from '../components/suggestedVideos/SuggestedVideos';
import styles from '../pages/videoDetail.module.scss';

function VideoDetail() {
    const params = useParams()
    const [resultsList, setResultsList] = useState([]);
  return (
      <>
        <Header setResultsList={setResultsList}/>
        <div className={styles.container}>
          <VideoDisplay videoId = {params.videoId} className={styles.videoDisplay}/>
          <SuggestedVideos videoId = {params.videoId} className={styles.suggestedVideos}/>
        </div>
      </>
  )
}

VideoDetail.propTypes = {}

export default VideoDetail
