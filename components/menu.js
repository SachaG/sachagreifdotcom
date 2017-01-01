import React from 'react'
import { MenuContainer, MenuLink } from './styled-components.js';

import icons from '../data/icons.yaml'
import Logo from './logo.js'

const Menu = () => 

  <MenuContainer>

    <Logo />

    <MenuLink href="#section-2"><span dangerouslySetInnerHTML={{__html: icons.code}}/></MenuLink>
    <MenuLink href="#section-3"><span dangerouslySetInnerHTML={{__html: icons.robot}}/></MenuLink>
    <MenuLink href="#section-4"><span dangerouslySetInnerHTML={{__html: icons.writing}}/></MenuLink>
    <MenuLink href="#section-5"><span dangerouslySetInnerHTML={{__html: icons.mic}}/></MenuLink>
    <MenuLink href="#section-0"><span dangerouslySetInnerHTML={{__html: icons.skull}}/></MenuLink>
  </MenuContainer>

export default Menu