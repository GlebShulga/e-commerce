import React from 'react'
import { useDispatch } from 'react-redux'
import { sort } from '../redux/reducers/goods'

const Sort = () => {
  const dispatch = useDispatch()

  const sortingTypes = {
    'Price ▲': { type: 'price', order: 1 },
    'Price ▼': { type: 'price', order: -1 },
    'Title ▲': { type: 'title', order: 1 },
    'Title ▼': { type: 'title', order: -1 }
  }

  const sortOptions = Object.keys(sortingTypes).map((type) => {
    const value = JSON.stringify(sortingTypes[type])
    return (
      <option key={type} className="sortHover" value={value}>
        {type}
      </option>
    )
  })

  return (
    <label htmlFor="sorting">
      <select
        name="sorting"
        id="sorting"
        onChange={(e) => {
          dispatch(sort(e.target.value))
        }}
        className="sortButton"
      >
        <option disabled hidden>
          Sort by
        </option>
        {sortOptions}
      </select>
    </label>
  )
}

export default Sort
