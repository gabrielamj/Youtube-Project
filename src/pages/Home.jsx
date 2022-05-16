import Content from '../components/content/Content'
import Header from '../components/header/Header'
import styles from './home.module.scss'

function Home(props) {
  return (
    <div className={styles.container}>
        <Header />
        <h1>Bienvenido a FakeYoutube</h1>
        <Content />
    </div>
  )
}

Home.propTypes = {}

export default Home
