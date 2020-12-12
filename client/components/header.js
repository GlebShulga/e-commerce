import React from 'react'
import { Link } from 'react-router-dom'
import Currency from './currency'

const Header = () => {
  return (
    <div id="brand-name">
      <Link to="/"> Best Shop </Link>
      <Currency />
    </div>
  )
}

Header.propTypes = {}

export default Header
