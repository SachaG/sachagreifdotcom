import React from 'react'
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt({
})

import {SectionBlock, SectionContents, SectionTitle, AboutDescription, AboutLinksBlock, AboutLink, SocialIcon, SocialLinks} from './styled-components.js';

import Item from './item.js'
import icons from '../data/icons.yaml'
import Texture from './texture.js'
import Logo from './logo.js'

const contents = `
  
  I'm **Sacha Greif**, a designer, developer, and entrepreneur. 

  I'm originally from Paris, France but these days I live in Osaka, Japan. 

  [Say hello](mailto:hello@sachagreif.com), or keep scrolling.
`
const SectionAbout = ({name, title, description, social, index, background}) => 

  <SectionBlock id={`section-${index}`} className="section" style={{backgroundColor: background}} index={index}>

    {/*<LogoBlock><Logo dangerouslySetInnerHTML={{__html: icons.sg}}/><span>Sacha Greif</span></LogoBlock>*/}
    <Texture className="svg-background" width={100} height={100} data={{}} options={{index}}/>

    <Logo />

    <SectionContents>
      <AboutDescription dangerouslySetInnerHTML={{ __html: md.render(contents) }} />

      <SocialLinks className="social-links">

        {social.map((item, index) => <SocialIcon key={index}><a title={item.title} href={item.url} dangerouslySetInnerHTML={{__html: icons[item.title.toLowerCase()]}}/></SocialIcon>)}

      </SocialLinks>



    </SectionContents>
  </SectionBlock>

export default SectionAbout