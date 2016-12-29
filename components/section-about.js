import React from 'react'
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt({
})

import {LogoBlock, Logo, SectionBlock, SectionContents, SectionTitle, AboutDescription, SocialIcon, SocialLinks} from './styled/styled.js';

import Item from './item.js'
import icons from '../data/icons.yaml'
import Texture from './texture.js'

const contents = `
  Designer, developer, and entrepreneur. 

  I'm originally from Paris, France but these days I live in Osaka, Japan. 

  After studying computer science and working as a UI designer, 
  I now spend my time working on personal projects, 
  contributing to open source, and writing. 

  [Say hello](mailto:hello@sachagreif.com).
`
const SectionAbout = ({title, description, social, index}) => 

  <SectionBlock id={`section-${index}`} className="section" index={index}>

    {/*<LogoBlock><Logo dangerouslySetInnerHTML={{__html: icons.sg}}/><span>Sacha Greif</span></LogoBlock>*/}
    <Texture className="svg-background" width={100} height={100} data={{}} options={{index}}/>

    <SectionContents>
      <AboutDescription dangerouslySetInnerHTML={{ __html: md.render(contents) }} />

      <SocialLinks className="social-links">

        {social.map((item, index) => <SocialIcon key={index}><a title={item.title} href={item.url} dangerouslySetInnerHTML={{__html: icons[item.title.toLowerCase()]}}/></SocialIcon>)}

      </SocialLinks>
    </SectionContents>
  </SectionBlock>

export default SectionAbout