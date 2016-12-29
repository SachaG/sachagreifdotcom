import React from 'react'
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt()

import {LogoBlock, Logo, SectionBlock, SectionContents, SectionTitle, AboutDescription, SocialIcon, SocialLinks} from './styled/styled.js';

import Item from './item.js'
import icons from '../data/icons.yaml'

const SectionAbout = ({title, description, social, index}) => 

  <SectionBlock className="section" index={index}>

    {/*<LogoBlock><Logo dangerouslySetInnerHTML={{__html: icons.sg}}/><span>Sacha Greif</span></LogoBlock>*/}

    <SectionContents>
      {description ? <AboutDescription dangerouslySetInnerHTML={{ __html: md.render(description) }} /> : null }

      <SocialLinks className="social-links">

        {social.map((item, index) => <SocialIcon key={index}><a title={item.title} href={item.url} dangerouslySetInnerHTML={{__html: icons[item.title.toLowerCase()]}}/></SocialIcon>)}

      </SocialLinks>
    </SectionContents>
  </SectionBlock>

export default SectionAbout