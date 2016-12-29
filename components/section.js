import React from 'react'
import {SectionBlock, SectionContents, SectionTitle, SectionDescription, Items} from './styled/styled.js';

import * as d3 from "d3";
import textures from 'textures'
import d3Wrap from 'react-d3-wrap'

console.log(d3)
console.log(textures)

import MarkdownIt from 'markdown-it'
const md = new MarkdownIt()

import Item from './item.js'

const Texture = d3Wrap({
 
  update (svg, data, options) {

    const d3svg = d3.select(svg)
      // .attr("viewBox", "0 0 100 100")
      // .attr("preserveAspectRatio", "none")
    let t

    switch(options.index) {
      case 1:
        t = textures.paths()
          .d("woven")
          .lighter()
          .stroke("rgba(0,0,0,0.1)")
          .size(20)
      break

      case 2:
        t = textures.paths()
          .d("nylon")
          .lighter()
          .stroke("rgba(0,0,0,0.1)")
          .size(30)
      break

      case 3:
        t = textures.paths()
          .d("caps")
          .lighter()
          .stroke("rgba(0,0,0,0.1)")
          .size(20)
      break

      case 4:
        // t = textures.paths()
        //   .d("hexagons")
        //   .lighter()
        //   .stroke("rgba(0,0,0,0.1)")
        //   .size(20)
        t = textures.lines()
          .lighter()
          .stroke("rgba(0,0,0,0.1)")
      break

      case 5:
        t = textures.paths()
          .d("crosses")
          .lighter()
          .stroke("rgba(0,0,0,0.1)")
          .size(20)
      break
    }

    d3svg.call(t);

    d3svg.append("rect")
      .attr("x", 0)
      .attr("y", 0)
      .attr("height", 3000)
      .attr("width", 3000)
      .style("fill", t.url())

  },
})
 

const Section = ({title, description, items, index, background, text}) => 
  
  <SectionBlock className="section" style2={{background: `rgba(0,0,0,${0+index/30})`, backgroundColor: background, color: text}} index={index}>

    <Texture className="svg-background" width={100} height={100} data={{}} options={{index}}/>

    <SectionContents>

      <SectionTitle className="section-title">{title}</SectionTitle>
      
      {description ? <SectionDescription className="item-description" dangerouslySetInnerHTML={{ __html: md.render(description) }} /> : null }
      
      <Items>

        {items.map((item, index) => <Item {...item} key={index}/>)}
      
      </Items>

    </SectionContents>

  </SectionBlock>

export default Section