import React from 'react'
import { LogoBlock, LogoImage } from './styled/styled.js';
import { prefixLink } from 'gatsby-helpers'
import { Link } from 'react-router'

import icons from '../data/icons.yaml'

const Logo = () => 

  <LogoBlock>

    <Link to={prefixLink('/')}>

      <LogoImage dangerouslySetInnerHTML={{__html: icons.sg}}/>

      <span>Sacha Greif</span>

    </Link>

  </LogoBlock>

export default Logo