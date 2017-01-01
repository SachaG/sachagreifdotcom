import React from 'react'
import { IconBlock, LogoBlock, LogoImage } from './styled-components.js';
import { prefixLink } from 'gatsby-helpers'
import { Link } from 'react-router'

import icons from '../data/icons.yaml'

const Logo = () => 

  <IconBlock>

    <LogoBlock>

      <Link to={prefixLink('/')}>

        <LogoImage dangerouslySetInnerHTML={{__html: icons.sg}}/>

        <span>Sacha Greif</span>

      </Link>

    </LogoBlock>

  </IconBlock>

export default Logo