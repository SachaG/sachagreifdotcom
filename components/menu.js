import React from 'react'
import {MenuContainer, LogoBlock, Logo, MenuLink} from './styled/styled.js';

import icons from '../data/icons.yaml'

const Menu = () => 

  <MenuContainer>

    <LogoBlock><a href="#"><Logo dangerouslySetInnerHTML={{__html: icons.sg}}/><span>Sacha Greif</span></a></LogoBlock>

    <MenuLink href="#"><span dangerouslySetInnerHTML={{__html: icons.smiley}}/></MenuLink>
    <MenuLink href="#"><span dangerouslySetInnerHTML={{__html: icons.robot}}/></MenuLink>
    <MenuLink href="#"><span dangerouslySetInnerHTML={{__html: icons.writing}}/></MenuLink>
    <MenuLink href="#"><span dangerouslySetInnerHTML={{__html: icons.robot}}/></MenuLink>
    <MenuLink href="#"><span dangerouslySetInnerHTML={{__html: icons.robot}}/></MenuLink>
  </MenuContainer>

export default Menu