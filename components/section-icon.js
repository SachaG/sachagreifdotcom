import React from 'react'
import { IconBlock, MenuContainer, MenuIcon } from './styled-components.js';

import icons from '../data/icons.yaml'

const SectionIcon = ({ link, iconName }) => 

  <IconBlock className="section-icon">
  
    <MenuIcon><span dangerouslySetInnerHTML={{__html: icons[iconName]}}/></MenuIcon>

  </IconBlock>

export default SectionIcon