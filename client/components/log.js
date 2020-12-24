import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getLogs, delLogs } from '../redux/reducers/log'
import Header from './header'

const Log = () => {
  const logList = useSelector((s) => s.log.list)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getLogs())
  }, [])
  return (
    <>
      <Header />
      <div className="flex justify-end px-4">
        <button
          type="button"
          className="border border-gray-500 text-gray-500 rounded-md px-4 py-2 mx-2 transition duration-500 ease select-none hover:text-white hover:bg-gray-600 focus:outline-none focus:shadow-outline"
          onClick={() => dispatch(delLogs())}
        >
          Delete Logs
        </button>
      </div>
      <div>
        {logList.map((it) => {
          return <div key={it.log}>{it.log}</div>
        })}
      </div>
    </>
  )
}

Log.propTypes = {}

export default Log
