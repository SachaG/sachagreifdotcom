import React from 'react'
import { IconBlock, Icon } from './styled-components.js';

import icons from '../data/icons.yaml'

const SectionIcon = ({ link, iconName }) => 

  <IconBlock className="section-icon">
  
    <Icon><span dangerouslySetInnerHTML={{__html: icons[iconName]}}/></Icon>

  </IconBlock>

export default SectionIcon