import React from 'react'
import { Link } from 'react-router-dom'

import { Div,LogoTitle } from './HeaderStyledComp'

function Header() {
  return (
    <Div>
        <Link to='/'>
            <LogoTitle>movie app</LogoTitle>
        </Link>
    </Div>
  )
}

export default Header