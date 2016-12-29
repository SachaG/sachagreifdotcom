import React from 'react'
import * as d3 from "d3";
import textures from 'textures'
import d3Wrap from 'react-d3-wrap'

const Texture = d3Wrap({
 
  initialize (svg, data, options) {

    const d3svg = d3.select(svg)
      // .attr("viewBox", "0 0 100 100")
      // .attr("preserveAspectRatio", "none")
    let t

    switch(options.index) {

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

  },
})

export default Texture