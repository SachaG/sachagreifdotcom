import React from 'react'
import {SectionBlock, SectionTop, SectionHeader, SectionCTA, SectionContents, SectionTitle, SectionDescription, Items} from './styled/styled.js';

import MarkdownIt from 'markdown-it'
const md = new MarkdownIt()

import Item from './item.js'
import Texture from './texture.js'

const Section = ({title, description, items, index, background, text, cta}) => 
  
  <SectionBlock id={`section-${index}`} className="section" style2={{background: `rgba(0,0,0,${0+index/30})`, backgroundColor: background, color: text}} index={index}>

    <Texture className="svg-background" width={100} height={100} data={{}} options={{index}}/>

    <SectionContents>

      <SectionTop>
        <SectionHeader>
    
          <SectionTitle className="section-title">{title}</SectionTitle>
        
          {description ? <SectionDescription className="item-description" dangerouslySetInnerHTML={{ __html: md.render(description) }} /> : null }
    
        </SectionHeader>
        {cta ? <SectionCTA href={cta.url}>{cta.text} ></SectionCTA> : null}
      </SectionTop>
      <Items>

        {items.map((item, index) => <Item {...item} key={index}/>)}
      
      </Items>

    </SectionContents>

  </SectionBlock>

export default Section