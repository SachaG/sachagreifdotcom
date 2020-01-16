import React from 'react'
import { LogoBlock, LogoImage } from './styled-components.js';
import { Link } from 'gatsby'

import icons from '../data/icons.yaml'

const Logo = () => 

  <LogoBlock>

    <Link to={'/'}>

      <LogoImage dangerouslySetInnerHTML={{__html: icons.sg}}/>

      <span>Sacha Greif</span>

    </Link>

  </LogoBlock>


export default Logo