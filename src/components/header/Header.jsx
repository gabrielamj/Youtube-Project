import styles from './header.module.scss'
import { GiHamburgerMenu } from 'react-icons/gi'
import { CgProfile } from 'react-icons/cg'
import SearchBar from './SearchBar'
import { Switch } from '@material-ui/core'
import { useState } from 'react'

function Header(props) {
  const [checked, setChecked] = useState(false);

  const handleSwitch = () => {
    setChecked(!checked);
  }
  return (
    <nav className={styles.container} >
      <div className={styles.left}>
        <GiHamburgerMenu style={{color: 'white', transform: 'scale(1.5)'}}/>
        <SearchBar />
      </div>

      <div className={styles.right}>
        <Switch 
        checked={checked}
        onChange={() => handleSwitch()}
        inputProps={{ 'aria-label': 'controlled'}}
        />
        <CgProfile style={{transform: 'scale(2)'}} />
      </div>

    </nav>
  )
}

Header.propTypes = {}

export default Header
