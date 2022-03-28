import React, { useState } from 'react'
import HeaderLogo from '../header/headerLogo/HeaderLogo';
// import PropTypes from 'prop-types'

function Header() {
    const [isConnected, setIsConnected] = useState(false)
  return (
    <header className="App-header">
      <div className="App-header-left">
      <HeaderLogo/>
      </div>
      <div className="App-header-right">
        {/* add useState logged */}
        {isConnected?
      <div>signIn</div>
        :
      <div>logging</div>
        }
      </div>
        <button onClick={() => setIsConnected(!isConnected)}>TODO simulateLogged</button>
    </header>
  )
}

Header.propTypes = {}

export default Header
