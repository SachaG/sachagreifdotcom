import React from 'react'
import { IconBlock, MenuContainer, MenuLink } from './styled-components.js';

import icons from '../data/icons.yaml'

const SectionIcon = ({ link, iconName }) => 

  <IconBlock className="section-icon">
  
    <MenuLink href={link}><span dangerouslySetInnerHTML={{__html: icons[iconName]}}/></MenuLink>

  </IconBlock>

export default SectionIcon