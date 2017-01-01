import React from 'react'
import {FooterContainer} from './styled-components.js';
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt()

const contents = `

  Made by Sacha Greif with [Gatsby](https://github.com/gatsbyjs/gatsby)
  and [Textures.js](https://riccardoscalco.github.io/textures/), 
  using the [Ego](http://ego-icons.com) icons.
  Typeset in [Space Mono](https://fonts.google.com/specimen/Space+Mono).
`

const Footer = () => 

  <FooterContainer dangerouslySetInnerHTML={{ __html: md.render(contents) }} />

export default Footer