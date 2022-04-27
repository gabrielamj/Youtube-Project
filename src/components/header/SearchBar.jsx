import React from 'react'
import PropTypes from 'prop-types'
import { GiMagnifyingGlass } from 'react-icons/gi'
import styles from './header.module.scss'

function SearchBar(props) {
  return (
    <div className={styles.searchBar}>
        <GiMagnifyingGlass />
        <input type='text' placeholder='wizeline' style={{border: 'none', background: 'none'}}/>
    </div>
  )
}

SearchBar.propTypes = {}

export default SearchBar
