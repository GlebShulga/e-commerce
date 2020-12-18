import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import { getLocalBasket } from '../redux/reducers/basket'

const Startup = (props) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getLocalBasket(localStorage.getItem('basketSaving')))
  }, [])

  return props.children
}

Startup.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
}

export default Startup
