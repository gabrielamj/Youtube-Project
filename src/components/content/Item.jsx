import styles from './content.module.scss'

function Item({title, description, thumbnails}) {
  return (
    <>
    <div className={styles.video}>
      <p>{title}</p>
      <p>{description}</p>
      <img src={thumbnails.medium.url} alt="" />
    </div>
    </>
  )
}

Item.propTypes = {}

export default Item
