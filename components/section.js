import React from 'react'
import {SectionBlock, SectionTop, SectionHeader, SectionCTA, SectionContents, SectionTitle, SectionDescription, Items} from './styled-components.js';

import MarkdownIt from 'markdown-it'
const md = new MarkdownIt()

import Item from './item.js'
import Texture from './texture.js'
import SectionIcon from './section-icon.js'

const Section = ({name, title, description, items, index, background, text, cta}) => 
  
  <SectionBlock id={`section-${index}`} className="section" style={{backgroundColor: background}} index={index}>

    <Texture className="svg-background" width={100} height={100} data={{}} options={{index}}/>


    <SectionContents>

      <SectionIcon link={`#section-${index + 1}`} iconName={name} />

      <SectionTop>
        <SectionHeader>
    
          <SectionTitle className="section-title">{title}</SectionTitle>
        
          {description ? <SectionDescription dangerouslySetInnerHTML={{ __html: md.render(description) }} /> : null }
    
        </SectionHeader>
        {cta ? <SectionCTA href={cta.url}>{cta.text} ></SectionCTA> : null}
      </SectionTop>

      <Items>

        {items ? items.map((item, index) => <Item {...item} key={index}/>) : null}
      
      </Items>

    </SectionContents>

  </SectionBlock>

export default Section