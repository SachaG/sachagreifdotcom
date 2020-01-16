import React from 'react'
import * as d3 from "d3";
import textures from 'textures'

import ReactFauxDOM from 'react-faux-dom'

import { TextureWrapper } from './styled-components.js'

class Texture extends React.Component {
  render () {
    // Create your element.
    var node = ReactFauxDOM.createElement('svg')
    var d3svg = d3.select(node)
    // Change stuff using actual DOM functions.
    // Even perform CSS selections!
    // el.style.setProperty('color', 'red')
    // el.setAttribute('class', 'box')

      // .attr("viewBox", "0 0 100 100")
      // .attr("preserveAspectRatio", "none")
    let t

    switch(this.props.options.index) {

      case 0: 
        t = textures.circles()
          .radius(4)
          .fill("transparent")
          .stroke("rgba(0,0,0,0.13)")
          .size(20)
          .strokeWidth(1)
      break

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
        t = textures.circles()
          .lighter()
          .fill("rgba(0,0,0,0.3)")
      break

      case 5:
        // t = textures.paths()
        //   .d("hexagons")
        //   .lighter()
        //   .stroke("rgba(0,0,0,0.1)")
        //   .size(20)
        t = textures.paths()
          .d("squares")
          .lighter()
          .stroke("rgba(0,0,0,0.08)")

      break

      case 6:
        t = textures.paths()
          .d("crosses")
          .lighter()
          .stroke("rgba(255,255,255,0.1)")
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
    // Render it to React elements.
    return <TextureWrapper>{node.toReact()}</TextureWrapper>
  }
}

export default Texture