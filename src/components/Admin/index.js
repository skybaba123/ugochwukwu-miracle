import React from 'react'
import Loader from 'react-loaders'
import Dashboard from './Dashboard'
import Login from '.'

const index = () => {
  return (
    <>
      <Loader type="pacman" />

      <div>
        <Login />
        <Dashboard/>
      </div>
    </>
  )
}

export default index
