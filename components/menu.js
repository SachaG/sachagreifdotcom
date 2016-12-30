import React from 'react'
import {MenuContainer, LogoBlock, Logo, MenuLink} from './styled/styled.js';

import icons from '../data/icons.yaml'

const Menu = () => 

  <MenuContainer>

    <LogoBlock><a href="#section-1"><Logo dangerouslySetInnerHTML={{__html: icons.sg}}/><span>Sacha Greif</span></a></LogoBlock>

    <MenuLink href="#section-2"><span dangerouslySetInnerHTML={{__html: icons.code}}/></MenuLink>
    <MenuLink href="#section-3"><span dangerouslySetInnerHTML={{__html: icons.robot}}/></MenuLink>
    <MenuLink href="#section-4"><span dangerouslySetInnerHTML={{__html: icons.writing}}/></MenuLink>
    <MenuLink href="#section-5"><span dangerouslySetInnerHTML={{__html: icons.mic}}/></MenuLink>
    <MenuLink href="#section-0"><span dangerouslySetInnerHTML={{__html: icons.skull}}/></MenuLink>
  </MenuContainer>

export default Menu