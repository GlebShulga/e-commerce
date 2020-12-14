import React from 'react'
import { Link } from 'react-router-dom'
import Currency from './currency'
import Sort from './sort'

const Header = () => {
  return (
    <div id="brand-name" className="text-center  my-2">
      <Link to="/" className="font-bold text-3xl">
        Best Shop
      </Link>
      <div className="container mx-auto flex justify-between p-5 flex-col md:flex-row items-center">
        <Currency />
        <Sort />
      </div>
    </div>
  )
}

Header.propTypes = {}

export default Header
