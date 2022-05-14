import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import styles from './favourites.module.scss';
import Header from '../components/header/Header';

const Favourites = (props) => {
  const { favouriteList } = useSelector((state) => state.video);
  const [resultsList, setResultsList] = useState([]);

  return (
    <div className={styles.container}>
      <Header 
          setResultsList = {setResultsList}
        />
      
      <h1>Favourites</h1>
      <div className={styles.content}>
      {favouriteList.map((video) => (
        <div className={styles.card} key={video.title}>
          <h2>{video.title}</h2>
          <iframe className={styles.video}
            title={video.videoId}
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${video.videoId}`}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
      ))}
      </div>
    </div>
  );
};

Favourites.propTypes = {};

export default Favourites;