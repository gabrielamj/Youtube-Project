import PropTypes from 'prop-types'
import Item from './Item'
import styles from './content.module.scss'
import data from '../../mocks/youtube-videos-mock.json'

function Content(props) {

  const {} = props;

  const { items } = data;
  console.log(data);

  return (
    <div className={styles.container}>
      {items.map(({etag, snippet:{channelTitle, description, thumbnails}}) => {
      return (
        <Item
        key={etag}
        title={channelTitle}
        description={description}
        thumbnails={thumbnails}
        />
      )
      })}
    </div>
  )
}

Content.propTypes = {}

export default Content
